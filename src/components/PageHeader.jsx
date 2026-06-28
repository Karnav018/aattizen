import AnimatedBackdrop from "./animation/AnimatedBackdrop.jsx";

export default function PageHeader({ eyebrow, title, subtitle, code }) {
  return (
    <section className="bg-on-background text-on-primary pt-32 pb-2xl relative overflow-hidden">
      <AnimatedBackdrop />
      <div className="relative z-10 px-gutter max-w-container-max mx-auto">
        {eyebrow && (
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
            — {eyebrow}
          </span>
        )}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md">
          <h1 className="text-display-md md:text-display-lg leading-tight max-w-3xl">
            {title}
          </h1>
          {code && (
            <span className="text-[5rem] md:text-[6rem] leading-none font-bold text-primary-fixed-dim/40">
              {code}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-body-lg text-white/70 max-w-2xl mt-md">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
