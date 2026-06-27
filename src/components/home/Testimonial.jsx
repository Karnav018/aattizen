import Icon from "../Icon.jsx";

export default function Testimonial() {
  return (
    <section className="py-2xl bg-surface-container-low">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-xl md:p-2xl flex flex-col md:flex-row items-start gap-xl">
          <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Icon name="format_quote" className="!text-4xl" />
          </div>
          <div>
            <span className="inline-block text-label-sm uppercase tracking-widest text-primary mb-md">
              — Client Voice · Best Services
            </span>
            <p className="text-body-lg text-on-background mb-md leading-relaxed">
              "I am writing to express my sincere gratitude and appreciation for the
              outstanding service provided by M/s Aattizen Internet Services. As a prime
              customer for the last 4 years, I have consistently been impressed by the
              level of dedication and professionalism demonstrated by your team."
            </p>
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold">
                JD
              </div>
              <div>
                <p className="text-label-md font-bold">Enterprise Customer</p>
                <p className="text-label-sm text-on-surface-variant">4-year Aattizen ILL subscriber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
