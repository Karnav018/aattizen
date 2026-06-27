import { Link } from "react-router-dom";
import Icon from "../Icon.jsx";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* full-bleed background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(0,24,72,0.92) 0%, rgba(0,61,155,0.55) 55%, rgba(0,82,204,0.2) 100%), url('https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* bottom fade for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-on-background/60 to-transparent" />
      </div>

      <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full pt-[120px] pb-2xl">
        <div className="max-w-2xl text-on-primary">
          <span className="inline-flex items-center gap-sm px-md py-xs bg-white/10 border border-white/20 rounded-full text-label-sm uppercase tracking-wider mb-lg">
            <span className="pulse-dot" /> Enterprise Connectivity · Mumbai
          </span>
          <h1 className="text-display-lg md:text-[56px] md:leading-[64px] mb-md leading-tight font-extrabold">
            Mumbai's Trusted B2B Connectivity Partner.
          </h1>
          <p className="text-body-lg mb-xl text-white/85 max-w-xl">
            Internet Leased Lines, private Point-to-Point transport, DDoS mitigation and
            SD-WAN — engineered for the enterprises that can't afford downtime.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link
              to="/contact"
              className="bg-primary-container text-on-primary px-xl py-md rounded-lg text-label-md font-semibold hover:bg-primary transition-all flex items-center gap-sm shadow-lg shadow-primary/30"
            >
              Speak with an Expert
              <Icon name="arrow_forward" className="!text-base" />
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white/30 text-white px-xl py-md rounded-lg text-label-md font-semibold hover:bg-white/10 transition-all"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-lg left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-xs text-white/60 animate-pulse">
        <span className="text-label-sm uppercase tracking-widest">Scroll</span>
        <Icon name="keyboard_arrow_down" className="!text-2xl" />
      </div>
    </header>
  );
}
