import { Link } from "react-router-dom";
import Icon from "../Icon.jsx";
import { company } from "../../data/site.js";

export default function CTA() {
  return (
    <section className="py-2xl bg-background">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-on-background text-on-primary p-xl md:p-2xl">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary blur-3xl" />
          </div>
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-xl items-center">
            <div>
              <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
                — Let's Connect
              </span>
              <h2 className="text-headline-lg mb-md">
                Ready to accelerate your business with Aattizen?
              </h2>
              <p className="text-body-md text-white/75 mb-lg max-w-xl">
                Have a question or need a quote from Mumbai's most trusted enterprise ISP?
                Send us a note and someone from the Aattizen team will be in touch within
                one business day.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link
                  to="/contact"
                  className="bg-primary-container text-on-primary px-xl py-md rounded-lg text-label-md font-semibold hover:bg-primary transition-all inline-flex items-center gap-sm"
                >
                  Get a Free Quote <Icon name="arrow_forward" className="!text-base" />
                </Link>
                <a
                  href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                  className="border border-white/30 text-white px-xl py-md rounded-lg text-label-md font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-sm"
                >
                  <Icon name="call" className="!text-base" /> {company.phones.primary}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-md">
              <ContactRow icon="location_on" label="Corporate Office" lines={[company.address.line1, company.address.line2, company.address.line3]} />
              <ContactRow icon="mail" label="Sales" lines={[company.emails.sales]} />
              <ContactRow icon="support_agent" label="24×7 NOC Support" lines={[company.emails.support]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, lines }) {
  return (
    <div className="flex gap-md p-md rounded-lg bg-white/5 border border-white/10">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-primary-fixed-dim">
        <Icon name={icon} />
      </div>
      <div>
        <p className="text-label-sm uppercase tracking-widest text-white/60 mb-xs">{label}</p>
        {lines.map((l) => (
          <p key={l} className="text-label-md text-white">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
