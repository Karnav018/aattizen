import { Link } from "react-router-dom";
import Icon from "../Icon.jsx";
import Reveal from "../Reveal.jsx";
import { services } from "../../data/services.js";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-2xl bg-surface-container-low">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-2xl max-w-2xl mx-auto">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-sm">
            — Our Service Portfolio
          </span>
          <h2 className="text-headline-lg mb-md text-on-background">
            Mission-Critical Services
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Foundational technology that Mumbai's digital enterprises rely on — engineered
            for zero-latency, multi-Tier-1 redundancy, and maximum resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to={`/services/${s.slug}`}
                className="h-full bg-surface-container-lowest p-xl rounded-xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="flex items-center justify-between mb-lg">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={s.icon} filled />
                  </div>
                  <span className="text-label-sm uppercase tracking-widest text-secondary">
                    Service {s.code}
                  </span>
                </div>
                <h3 className="text-headline-sm font-semibold mb-sm">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-lg flex-grow">
                  {s.summary}
                </p>
                <ul className="space-y-sm mb-lg">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-sm text-label-md text-on-surface"
                    >
                      <Icon
                        name="check_circle"
                        className="!text-base text-primary mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-primary text-label-md font-semibold flex items-center gap-xs group-hover:gap-md transition-all">
                  Learn More <Icon name="east" className="!text-base" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
