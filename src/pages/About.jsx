import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/animation/Counter.jsx";
import { whyAattizen } from "../data/services.js";
import { company } from "../data/site.js";
import { imagery } from "../data/imagery.js";

const stats = [
  {
    label: "SLA-backed Uptime",
    render: () => <Counter to={99.5} decimals={1} suffix="%" />,
  },
  { label: "NOC & Local Support", render: () => "24×7×365" },
  { label: "Upstream Redundancy", render: () => "Multi Tier-1" },
  { label: "Symmetric Bandwidth", render: () => "1:1" },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Aattizen"
        title="Built for Enterprise. Engineered for Uptime."
        subtitle="Aattizen is a Mumbai-based Internet Service Provider delivering carrier-grade connectivity and managed security solutions to enterprises across India."
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-2xl items-start">
            <div>
              <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
                — Who We Are
              </span>
              <h2 className="text-headline-lg mb-md">
                Mumbai's enterprise ISP — flexible, secure, and built around our customers.
              </h2>
              <p className="text-body-md text-on-surface-variant mb-md">
                We specialise in dedicated leased-line internet, point-to-point links,
                DDoS mitigation and SD-WAN — backed by 24×7 NOC support, multi-Tier-1
                upstream redundancy, and a customer-first delivery model.
              </p>
              <p className="text-body-md text-on-surface-variant mb-lg">
                From network planning and design to implementation and ongoing
                administration, our engineers manage every step — survey, building
                liaison, install, and lifelong maintenance.
              </p>

              <blockquote className="border-l-4 border-primary pl-lg italic text-on-background">
                "{company.vision}"
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-md">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg"
                >
                  <p className="text-headline-md font-bold text-primary mb-xs">
                    {s.render()}
                  </p>
                  <p className="text-label-md text-on-surface-variant uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-2xl bg-surface-container-low">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="text-center mb-2xl max-w-2xl mx-auto">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-sm">
              — Why Aattizen
            </span>
            <h2 className="text-headline-lg mb-md">Trusted by Enterprises Across India.</h2>
            <p className="text-body-md text-on-surface-variant">
              Six commitments we hold ourselves to, every link, every ticket, every hour
              of every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {whyAattizen.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:border-primary transition-colors h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-md">
                    <Icon name={w.icon} filled />
                  </div>
                  <h3 className="text-label-md font-bold text-headline-sm mb-sm">
                    {w.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagery.dataCentre})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/85 via-on-background/60 to-on-background/30" />
        <div className="relative h-full flex items-center px-gutter max-w-container-max mx-auto">
          <div className="max-w-xl text-on-primary">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
              — Our Backbone
            </span>
            <h2 className="text-headline-lg mb-md">
              Mumbai-anchored. Built for India's enterprise traffic.
            </h2>
            <p className="text-body-md text-white/75">
              Carrier-grade fibre, Tier-1 upstreams and a 24×7 NOC — engineered to keep
              your business online when everything else is on fire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto grid lg:grid-cols-3 gap-lg">
          <Pillar
            icon="hub"
            title="Network Planning"
            body="Site surveys, capacity modelling, and route design — engineered for tomorrow's bandwidth, not today's."
          />
          <Pillar
            icon="construction"
            title="Design & Implementation"
            body="From building-management coordination to fibre pulls, splices and on-site testing — done by Aattizen engineers, not subcontractors."
          />
          <Pillar
            icon="manage_accounts"
            title="Administration & Lifecycle"
            body="Proactive monitoring, configuration management, scheduled audits and a single named point of contact for every account."
          />
        </div>
      </section>
    </>
  );
}

function Pillar({ icon, title, body }) {
  return (
    <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant">
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-md">
        <Icon name={icon} filled />
      </div>
      <h3 className="text-headline-sm font-semibold mb-sm">{title}</h3>
      <p className="text-body-md text-on-surface-variant">{body}</p>
    </div>
  );
}
