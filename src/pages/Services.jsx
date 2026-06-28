import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/animation/MagneticButton.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Enterprise Services Portfolio"
        title="Connectivity. Reliability. Security."
        subtitle="Carrier-grade internet, private transport, and managed security — engineered for the enterprises that can't afford downtime."
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto space-y-xl">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <article className="grid lg:grid-cols-[160px_1fr_auto] gap-lg items-start bg-surface-container-lowest border border-outline-variant rounded-xl p-xl hover:border-primary transition-colors group">
                <div className="overflow-hidden">
                  <span className="text-[5rem] leading-none font-bold text-primary/15 group-hover:text-primary/30 transition-colors block group-hover:-translate-y-2 duration-500">
                    {s.code}
                  </span>
                </div>
                <div>
                  <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-sm">
                    Service {s.code} · {s.short}
                  </span>
                  <h2 className="text-headline-md mb-sm">{s.title}</h2>
                  <p className="text-body-md text-on-surface-variant max-w-2xl mb-md">
                    {s.hero}
                  </p>
                  <div className="flex flex-wrap gap-sm">
                    {s.metrics.slice(0, 3).map((m) => (
                      <span
                        key={m.label}
                        className="text-label-sm bg-primary/5 text-primary px-md py-xs rounded-full uppercase tracking-wider"
                      >
                        {m.value} · {m.label}
                      </span>
                    ))}
                  </div>
                </div>
                <MagneticButton className="justify-self-start lg:justify-self-end">
                  <Link
                    to={`/services/${s.slug}`}
                    className="bg-primary-container text-on-primary px-lg py-md rounded-lg text-label-md font-semibold hover:bg-primary transition-all flex items-center gap-sm"
                  >
                    Explore
                    <Icon
                      name="east"
                      className="!text-base transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </MagneticButton>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
