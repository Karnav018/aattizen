import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import MagneticButton from "../components/animation/MagneticButton.jsx";
import { company } from "../data/site.js";
import { services } from "../data/services.js";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_QUERY = encodeURIComponent(
  "Aattizen Telecom, 202 Midas, Sahar Plaza Complex, Andheri East, Mumbai 400059",
);
const mapSrc = GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${MAP_QUERY}&zoom=16`
  : `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;

const STATES = { IDLE: "idle", SENDING: "sending", SENT: "sent" };

// Build the WhatsApp template that gets pre-typed into the chat window.
// Uses WhatsApp's *bold* markup. Emojis were stripped because the wa.me URL
// handoff mangles 4-byte codepoints on some clients (the `*` next to emoji
// breaks the bold parser and shifts the Name field into the heading).
function buildWhatsAppMessage(form) {
  const sep = "------------------------------";
  return [
    "*NEW ENQUIRY - AATTIZEN TELECOM*",
    sep,
    `*Name:* ${form.name}`,
    `*Company:* ${form.company}`,
    `*Email:* ${form.email}`,
    `*Phone:* ${form.phone || "-"}`,
    `*Service of interest:* ${form.service}`,
    sep,
    "*Message:*",
    form.message,
    sep,
    "Sent via aattizen.net",
  ].join("\n");
}

function buildWhatsAppUrl(form) {
  const text = encodeURIComponent(buildWhatsAppMessage(form));
  return `https://wa.me/${company.whatsapp.number}?text=${text}`;
}

export default function Contact() {
  const [state, setState] = useState(STATES.IDLE);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0].title,
    message: "",
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (state !== STATES.IDLE) return;
    setState(STATES.SENDING);

    const url = buildWhatsAppUrl(form);
    setWhatsAppUrl(url);

    // Brief delay to play the morphing spinner, then hand off to WhatsApp.
    setTimeout(() => {
      // Try to open in a new tab — most browsers allow this because it's
      // triggered by a user submit. If popups are blocked, the success-state
      // fallback button below still lets the user open it manually.
      window.open(url, "_blank", "noopener,noreferrer");
      setState(STATES.SENT);
    }, 600);
  };

  const reset = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: services[0].title,
      message: "",
    });
    setWhatsAppUrl("");
    setState(STATES.IDLE);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Talk to Aattizen."
        subtitle="Quotes and feasibility within 24 hours. For incidents on a live circuit, call the NOC hotline directly."
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-2xl items-start">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {state === STATES.SENT ? (
                <SuccessState
                  key="success"
                  onReset={reset}
                  whatsAppUrl={whatsAppUrl}
                />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  onSubmit={onSubmit}
                  className="grid gap-md"
                >
                  <div className="grid sm:grid-cols-2 gap-md">
                    <Field
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                    <Field
                      label="Company"
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-md">
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                    />
                  </div>
                  <label className="grid gap-xs">
                    <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                      Service of interest
                    </span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>General enquiry</option>
                    </select>
                  </label>
                  <label className="grid gap-xs">
                    <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                      How can we help?
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      required
                      className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none resize-none transition-colors"
                    />
                  </label>

                  <MorphingSubmit state={state} />
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="space-y-md">
            <InfoCard
              icon="location_on"
              title="Corporate Office"
              lines={[company.address.line1, company.address.line2, company.address.line3]}
              link={{ href: company.address.mapUrl, label: "View on Google Maps" }}
            />
            <InfoCard
              icon="call"
              title="Phone Support · 24×7 NOC"
              lines={company.phones.list}
              link={{
                href: `tel:${company.phones.primary.replace(/\s/g, "")}`,
                label: "Call NOC",
              }}
            />
            <InfoCard
              icon="mail"
              title="Email"
              lines={[
                `Sales: ${company.emails.sales}`,
                `Support: ${company.emails.support}`,
              ]}
              link={{ href: `mailto:${company.emails.sales}`, label: "Email Sales" }}
            />
          </aside>
        </div>
      </section>

      <section className="pb-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="rounded-xl overflow-hidden border border-outline-variant aspect-[16/6]">
            <iframe
              title="Aattizen office map"
              src={mapSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function MorphingSubmit({ state }) {
  const sending = state === STATES.SENDING;
  return (
    <MagneticButton className="mt-sm">
      <motion.button
        type="submit"
        disabled={sending}
        layout
        className="group bg-[#25D366] text-white py-md px-lg rounded-lg text-label-md font-semibold hover:bg-[#1ebe57] active:scale-95 transition-colors flex items-center justify-center gap-sm min-w-[220px] disabled:opacity-80 shadow-lg shadow-[#25D366]/30"
        whileTap={{ scale: 0.97 }}
      >
        <AnimatePresence mode="wait">
          {sending ? (
            <motion.span
              key="spin"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-sm"
            >
              <motion.span
                className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              Opening WhatsApp…
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Send via WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </MagneticButton>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SuccessState({ onReset, whatsAppUrl }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-2xl relative"
    >
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-20 h-20 rounded-full bg-[#25D366]/15 text-[#25D366] mx-auto mb-md flex items-center justify-center relative"
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]/40"
          animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <WhatsAppIcon className="w-9 h-9" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-headline-md mb-sm"
      >
        WhatsApp opened — tap Send to deliver.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-body-md text-on-surface-variant mb-lg max-w-md mx-auto"
      >
        Your enquiry is already typed in our Aattizen WhatsApp chat. Hit the send
        button there and the team will reply within one business day.
      </motion.p>
      {whatsAppUrl && (
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-sm bg-[#25D366] text-white px-lg py-md rounded-lg text-label-md font-semibold hover:bg-[#1ebe57] transition-colors mb-md shadow-lg shadow-[#25D366]/30"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Re-open WhatsApp
        </motion.a>
      )}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={onReset}
          className="text-primary text-label-md font-semibold inline-flex items-center gap-xs hover:gap-md transition-all"
        >
          Send another enquiry <Icon name="east" className="!text-base" />
        </button>
      </motion.div>
    </motion.div>
  );
}

function Field({ label, ...rest }) {
  return (
    <label className="grid gap-xs">
      <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
      <input
        {...rest}
        className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none transition-colors"
      />
    </label>
  );
}

function InfoCard({ icon, title, lines, link }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover:border-primary transition-colors">
      <div className="flex items-start gap-md">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon name={icon} filled />
        </div>
        <div className="flex-1">
          <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-xs">
            {title}
          </p>
          {lines.map((l) => (
            <p key={l} className="text-body-md text-on-background">
              {l}
            </p>
          ))}
          {link && (
            <a
              href={link.href}
              className="mt-sm text-primary text-label-md font-semibold flex items-center gap-xs hover:gap-md transition-all"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {link.label} <Icon name="east" className="!text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
