import { clients } from "../../data/clients.js";

export default function ClientMarquee() {
  const track = [...clients, ...clients];
  return (
    <section className="py-2xl overflow-hidden bg-background">
      <div className="px-gutter max-w-container-max mx-auto mb-xl">
        <h2 className="text-label-sm uppercase tracking-widest text-secondary text-center">
          Powering Mumbai's Industry Leaders
        </h2>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="marquee-track items-center gap-2xl">
          {track.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="shrink-0 h-16 w-[180px] flex items-center justify-center px-md grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
