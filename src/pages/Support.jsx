import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";
import { company } from "../data/site.js";

const channels = [
  {
    icon: "support_agent",
    title: "24×7 NOC Hotline",
    body: "Direct line to a Tier-2 NOC engineer. No call-trees, no triage hold-music.",
    action: company.phones.primary,
    actionHref: `tel:${company.phones.primary.replace(/\s/g, "")}`,
    actionLabel: "Call NOC",
  },
  {
    icon: "mail",
    title: "Email Ticketing",
    body: "Tickets land in our queue with link telemetry already attached. Average first response: 12 minutes.",
    action: company.emails.support,
    actionHref: `mailto:${company.emails.support}`,
    actionLabel: "Email Support",
  },
  {
    icon: "dashboard",
    title: "Real-Time Portal",
    body: "Live throughput graphs, latency, packet loss, and uptime dashboards — 24×7 visibility for every circuit.",
    action: "Customer portal",
    actionHref: "/contact",
    actionLabel: "Request Access",
  },
];

const sla = [
  { value: "< 12 min", label: "Avg. First Response" },
  { value: "< 4 hr", label: "Mean Time to Repair" },
  { value: "99.5%", label: "Service Availability" },
  { value: "< 1 hr", label: "Critical Incident Page" },
];

export default function Support() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Round-the-clock support, by the engineers who built your link."
        subtitle="Aattizen support is anchored in our Mumbai NOC — staffed every hour, every day. Your ticket lands with someone who can fix it."
      />

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-lg">
          {channels.map((c) => (
            <div
              key={c.title}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-md">
                <Icon name={c.icon} filled />
              </div>
              <h3 className="text-headline-sm font-semibold mb-sm">{c.title}</h3>
              <p className="text-body-md text-on-surface-variant flex-grow">{c.body}</p>
              <a
                href={c.actionHref}
                className="mt-md text-primary text-label-md font-semibold flex items-center gap-xs hover:gap-md transition-all"
              >
                {c.actionLabel} — {c.action} <Icon name="east" className="!text-base" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-2xl bg-on-background text-on-primary">
        <div className="px-gutter max-w-container-max mx-auto">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
            — SLA at a Glance
          </span>
          <h2 className="text-headline-lg mb-xl">An SLA that pays out if we miss.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {sla.map((m) => (
              <div
                key={m.label}
                className="bg-white/5 border border-white/10 rounded-xl p-lg"
              >
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

      <section className="py-2xl bg-background">
        <div className="px-gutter max-w-container-max mx-auto">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
            — Frequently Asked
          </span>
          <h2 className="text-headline-lg mb-xl">Support FAQs</h2>
          <div className="grid md:grid-cols-2 gap-lg">
            <Faq
              q="What hours is your NOC staffed?"
              a="Every hour, every day, every year. We staff our Mumbai NOC 24×7×365 with no overnight skeleton crew — escalation paths are identical at 3 AM and 3 PM."
            />
            <Faq
              q="How do I raise a critical incident?"
              a="Call the NOC hotline directly. Tickets that originate by phone are flagged P1 by default and trigger an engineer page within 60 seconds."
            />
            <Faq
              q="Do you offer credits if SLA is missed?"
              a="Yes — 99.5% uptime is contractual. If we miss, service credits are auto-calculated and applied to the next invoice. No paperwork required."
            />
            <Faq
              q="Can I see live link health?"
              a="Yes. Every enterprise circuit comes with a real-time portal showing throughput, latency, packet loss, and historical uptime — accessible 24×7."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
      <h3 className="text-headline-sm font-semibold mb-sm">{q}</h3>
      <p className="text-body-md text-on-surface-variant">{a}</p>
    </div>
  );
}
