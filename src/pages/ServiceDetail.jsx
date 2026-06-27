import { Link, useParams, Navigate } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { services } from "../data/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHeader
        eyebrow={`Service ${service.code} · ${service.short}`}
        title={service.title}
        subtitle={service.tagline}
        code={service.code}
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="rounded-xl bg-on-background text-on-primary p-xl md:p-2xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/30 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[120px_1fr] gap-lg items-center">
              <span className="text-[5rem] leading-none font-bold text-primary-fixed-dim/60">
                {service.code}
              </span>
              <div>
                <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-sm">
                  — {service.tagline.split(",")[0]}
                </span>
                <h2 className="text-headline-lg mb-md">{service.tagline}</h2>
                <p className="text-body-lg text-white/80 max-w-3xl">{service.hero}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.capabilities && (
        <section className="pb-2xl bg-background">
          <div className="px-gutter max-w-container-max mx-auto">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
              — {service.short === "P2P" ? "Typical Use Cases" : service.short === "SD-WAN" ? "Capabilities" : "What You Get"}
            </span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              {service.capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-md">
                      <Icon name={c.icon} filled />
                    </div>
                    <h3 className="text-label-md font-bold mb-sm">{c.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.vectors && (
        <section className="pb-2xl bg-background">
          <div className="px-gutter max-w-container-max mx-auto">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
              — Three Attack Vectors. One Defence Stack.
            </span>
            <div className="grid md:grid-cols-3 gap-lg">
              {service.vectors.map((v) => (
                <div
                  key={v.title}
                  className={`bg-surface-container-lowest p-lg rounded-xl border-t-4 ${
                    v.accent === "red"
                      ? "border-error"
                      : v.accent === "amber"
                        ? "border-amber-500"
                        : "border-primary"
                  } shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-md">
                    <h3 className="text-headline-sm font-bold">{v.title}</h3>
                    <span className="text-label-sm uppercase tracking-widest bg-on-background/5 px-sm py-xs rounded">
                      {v.tag}
                    </span>
                  </div>
                  <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-sm">
                    Common Attacks
                  </p>
                  <ul className="space-y-xs mb-md">
                    {v.attacks.map((a) => (
                      <li key={a} className="text-body-md flex gap-sm">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                            v.accent === "red"
                              ? "bg-error"
                              : v.accent === "amber"
                                ? "bg-amber-500"
                                : "bg-primary"
                          }`}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-sm">
                    How We Stop It
                  </p>
                  <p className="text-body-md text-on-surface-variant">{v.defence}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!service.capabilities && service.bullets && (
        <section className="pb-2xl bg-background">
          <div className="px-gutter max-w-container-max mx-auto">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
              — What It Delivers
            </span>
            <ul className="grid md:grid-cols-2 gap-md">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex gap-sm"
                >
                  <Icon name="check_circle" className="text-primary" />
                  <span className="text-body-md">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="pb-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="rounded-xl bg-on-background text-on-primary p-xl grid grid-cols-2 md:grid-cols-4 gap-md">
            {service.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-display-md font-bold text-primary-fixed-dim mb-xs">
                  {m.value}
                </p>
                <p className="text-label-sm uppercase tracking-widest text-white/70">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-md bg-primary/5 border border-primary/20 rounded-xl p-xl">
          <div>
            <h3 className="text-headline-sm mb-xs">Ready to deploy {service.title}?</h3>
            <p className="text-body-md text-on-surface-variant">
              Talk to a NOC engineer. Quotes and feasibility within 24 hours.
            </p>
          </div>
          <div className="flex gap-md">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-lg py-md rounded-lg text-label-md font-semibold hover:bg-primary-container transition-all"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="border border-primary text-primary px-lg py-md rounded-lg text-label-md font-semibold hover:bg-primary/10 transition-all"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
