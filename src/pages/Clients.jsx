import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { clients, sectors } from "../data/clients.js";

export default function Clients() {
  return (
    <>
      <PageHeader
        eyebrow="Our Clients"
        title="Powering 20+ Indian enterprises."
        subtitle="From BFSI giants to media platforms, manufacturing hubs to public infrastructure — Aattizen connects the businesses that move India."
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-md">
            {clients.map((c, i) => (
              <Reveal key={c.name} delay={i * 30}>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md aspect-[3/2] flex items-center justify-center hover:border-primary hover:shadow-md transition-all">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-2xl bg-surface-container-low">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="text-center mb-2xl">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-sm">
              — Industries We Serve
            </span>
            <h2 className="text-headline-lg">
              Connectivity tailored to your industry.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-sm">
            {sectors.map((s) => (
              <span
                key={s.name}
                className="bg-surface-container-lowest border border-outline-variant rounded-full px-lg py-sm text-label-md hover:border-primary hover:text-primary transition-all"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
