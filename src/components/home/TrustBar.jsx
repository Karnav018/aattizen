import { stats } from "../../data/site.js";

export default function TrustBar() {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          {stats.map((s) => (
            <div key={s.label} className="px-md md:px-xl py-lg text-center md:text-left">
              <div className="flex items-center gap-sm justify-center md:justify-start mb-xs">
                {s.pulse && <span className="pulse-dot" />}
                <span className="text-primary font-bold text-headline-md md:text-headline-lg">
                  {s.value}
                </span>
              </div>
              <p className="text-on-surface-variant text-label-md uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
