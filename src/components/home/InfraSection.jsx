import Icon from "../Icon.jsx";

const points = [
  {
    icon: "dns",
    title: "Carrier-Grade Backbone",
    body: "Multi Tier-1 upstream and diverse route options, with BGP failover that reroutes traffic in milliseconds during any upstream outage.",
  },
  {
    icon: "security",
    title: "Security Built-In",
    body: "DDoS scrubbing, encrypted overlays and per-VRF segmentation are standard. Protection follows the IP, not the link.",
  },
  {
    icon: "monitoring",
    title: "24×7×365 Real-Time NOC",
    body: "Our Network Operations Center watches every enterprise link with sub-second granularity — and pages an engineer before you notice.",
  },
];

export default function InfraSection() {
  return (
    <section className="py-2xl bg-on-background text-on-primary">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-2xl">
          <div className="lg:w-1/2">
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-sm">
              — Institutional Grade
            </span>
            <h2 className="text-headline-lg mb-lg">
              Built for Enterprise. Engineered for Uptime.
            </h2>
            <div className="space-y-lg">
              {points.map((p) => (
                <div key={p.title} className="flex gap-md">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-fixed-dim/10 text-primary-fixed-dim flex items-center justify-center">
                    <Icon name={p.icon} />
                  </div>
                  <div>
                    <h4 className="text-label-md font-bold mb-xs">{p.title}</h4>
                    <p className="text-body-md text-white/70">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-on-surface-variant/20 rounded-xl border border-white/10 p-md relative overflow-hidden h-full min-h-[320px]">
              <div className="flex items-center justify-between mb-md">
                <div className="flex items-center gap-sm">
                  <span className="pulse-dot" />
                  <span className="text-label-sm uppercase tracking-widest opacity-80">
                    Network Status: Nominal
                  </span>
                </div>
                <span className="text-label-sm font-mono opacity-60">
                  Mumbai Core #42-A
                </span>
              </div>
              <div className="flex items-end gap-1 h-32 mb-md">
                {[60, 80, 40, 90, 70, 85, 55, 78, 92, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary-fixed-dim/40 rounded-t animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
                {[
                  { l: "Latency (Domestic)", v: "2.4ms", c: "" },
                  { l: "Packet Loss", v: "0.00%", c: "text-emerald-400" },
                  { l: "Uptime (30d)", v: "100%", c: "text-emerald-400" },
                  { l: "Active Tickets", v: "0", c: "" },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="bg-white/5 p-sm rounded border border-white/5"
                  >
                    <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">
                      {m.l}
                    </p>
                    <p className={`text-xl font-bold ${m.c}`}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
