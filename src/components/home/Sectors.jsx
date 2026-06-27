import { sectors } from "../../data/clients.js";
import Reveal from "../Reveal.jsx";

export default function Sectors() {
  return (
    <section id="sectors" className="py-2xl bg-background">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-2xl max-w-2xl mx-auto">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-sm">
            — Industries We Serve
          </span>
          <h2 className="text-headline-lg mb-md text-on-background">
            Trusted Across Sectors
          </h2>
          <p className="text-body-md text-on-surface-variant">
            From regulated BFSI workloads to high-density media production — Aattizen
            delivers connectivity tailored to each industry's risk profile.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-md">
          {sectors.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>
              <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-md group">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                  <img
                    src={s.icon}
                    alt=""
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-label-md font-semibold text-on-background group-hover:text-primary transition-colors">
                  {s.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
