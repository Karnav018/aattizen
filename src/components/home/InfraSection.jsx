import { useEffect, useRef, useState } from "react";
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

const CORES = ["Mumbai Core #42-A", "BKC Edge #07-B", "Powai PoP #12-A", "Vashi Core #08-C"];

function randomBar() {
  return 40 + Math.random() * 55;
}

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
            <LiveDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveDashboard() {
  const [bars, setBars] = useState(() => Array.from({ length: 14 }, randomBar));
  const [coreIdx, setCoreIdx] = useState(0);
  const [throughput, setThroughput] = useState(12.4);
  const [delta, setDelta] = useState(0);
  const [latency, setLatency] = useState(2.4);
  const [packetLoss, setPacketLoss] = useState(0);
  const [activeTickets, setActiveTickets] = useState(0);
  const [tickSecs, setTickSecs] = useState(0);
  const lastTickRef = useRef(Date.now());

  useEffect(() => {
    const TICK_MS = 2200;
    const tick = setInterval(() => {
      lastTickRef.current = Date.now();
      setTickSecs(0);

      const nextBar = randomBar();
      setBars((prev) => [...prev.slice(1), nextBar]);

      setThroughput((prev) => {
        const change = (Math.random() - 0.5) * 3;
        const next = Math.max(8, Math.min(18, prev + change));
        setDelta(parseFloat((next - prev).toFixed(2)));
        return parseFloat(next.toFixed(1));
      });

      setLatency(parseFloat((2.0 + Math.random() * 1.2).toFixed(1)));
      setPacketLoss(Math.random() < 0.08 ? parseFloat((Math.random() * 0.02).toFixed(2)) : 0);
      setActiveTickets((prev) => {
        if (prev > 0) return Math.random() < 0.4 ? 0 : prev;
        return Math.random() < 0.06 ? 1 : 0;
      });
    }, TICK_MS);

    const secTick = setInterval(() => {
      setTickSecs(Math.floor((Date.now() - lastTickRef.current) / 1000));
    }, 500);

    const coreRotate = setInterval(() => {
      setCoreIdx((i) => (i + 1) % CORES.length);
    }, 9000);

    return () => {
      clearInterval(tick);
      clearInterval(secTick);
      clearInterval(coreRotate);
    };
  }, []);

  const deltaUp = delta >= 0;
  const lossOk = packetLoss === 0;

  return (
    <div className="bg-on-surface-variant/20 rounded-xl border border-white/10 p-md relative overflow-hidden h-full min-h-[320px]">
      {/* header */}
      <div className="flex items-center justify-between mb-md">
        <div className="flex items-center gap-sm">
          <span className="pulse-dot" />
          <span className="text-label-sm uppercase tracking-widest opacity-80">
            Network Status: Nominal
          </span>
          <span className="text-[10px] font-mono opacity-50 hidden sm:inline">
            · live · {tickSecs}s
          </span>
        </div>
        <span className="text-label-sm font-mono opacity-60 transition-opacity duration-500">
          {CORES[coreIdx]}
        </span>
      </div>

      {/* throughput */}
      <div className="flex items-baseline gap-sm mb-sm">
        <span className="text-3xl font-extrabold tabular-nums">{throughput}</span>
        <span className="text-label-sm uppercase tracking-widest opacity-60">Gbps</span>
        <span
          className={`text-label-sm font-semibold ml-auto flex items-center gap-xs ${
            deltaUp ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          <Icon
            name={deltaUp ? "trending_up" : "trending_down"}
            className="!text-base"
          />
          {deltaUp ? "+" : ""}
          {delta} Gbps
        </span>
      </div>

      {/* chart */}
      <div className="flex items-end gap-1 h-28 mb-md">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t transition-all duration-[2000ms] ease-out"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? "linear-gradient(to top, rgba(178,197,255,0.8), rgba(178,197,255,1))"
                  : "rgba(178,197,255,0.35)",
              boxShadow:
                i === bars.length - 1 ? "0 0 12px rgba(178,197,255,0.5)" : "none",
            }}
          />
        ))}
      </div>

      {/* metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
        <Metric label="Latency" value={`${latency}ms`} />
        <Metric
          label="Packet Loss"
          value={`${packetLoss.toFixed(2)}%`}
          tone={lossOk ? "good" : "warn"}
        />
        <Metric label="Uptime (30d)" value="99.99%" tone="good" />
        <Metric
          label="Active Tickets"
          value={activeTickets}
          tone={activeTickets === 0 ? "good" : "warn"}
        />
      </div>
    </div>
  );
}

function Metric({ label, value, tone }) {
  const colour =
    tone === "good"
      ? "text-emerald-400"
      : tone === "warn"
        ? "text-amber-400"
        : "text-white";
  return (
    <div className="bg-white/5 p-sm rounded border border-white/5">
      <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{label}</p>
      <p className={`text-xl font-bold tabular-nums transition-colors ${colour}`}>
        {value}
      </p>
    </div>
  );
}
