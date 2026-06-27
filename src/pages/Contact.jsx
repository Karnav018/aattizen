import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import { company } from "../data/site.js";
import { services } from "../data/services.js";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_QUERY = encodeURIComponent(
  "Aattizen Telecom, 202 Midas, Sahar Plaza Complex, Andheri East, Mumbai 400059",
);
const mapSrc = GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${MAP_QUERY}&zoom=16`
  : `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;

export default function Contact() {
  const [sent, setSent] = useState(false);
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
    // Wire to backend / Gravity Forms endpoint when ready.
    setSent(true);
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
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl">
            {sent ? (
              <div className="text-center py-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-md flex items-center justify-center">
                  <Icon name="check_circle" filled className="!text-4xl" />
                </div>
                <h3 className="text-headline-md mb-sm">Thank you — message received.</h3>
                <p className="text-body-md text-on-surface-variant">
                  Someone from the Aattizen team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-md">
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
                    className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none"
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
                    className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-primary text-on-primary py-md px-lg rounded-lg text-label-md font-semibold hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center gap-sm"
                >
                  Send Enquiry <Icon name="arrow_forward" className="!text-base" />
                </button>
              </form>
            )}
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

function Field({ label, ...rest }) {
  return (
    <label className="grid gap-xs">
      <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
      <input
        {...rest}
        className="bg-background border border-outline-variant rounded-lg px-md py-sm text-body-md focus:border-primary focus:outline-none"
      />
    </label>
  );
}

function InfoCard({ icon, title, lines, link }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
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
