import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Icon from "../Icon.jsx";
import SplitText from "../animation/SplitText.jsx";
import MagneticButton from "../animation/MagneticButton.jsx";
import { imagery } from "../../data/imagery.js";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background drifts up slower than content for a parallax feel.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  return (
    <header
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url(${imagery.hero})` }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: overlayOpacity,
            background:
              "linear-gradient(120deg, rgba(0,24,72,0.85) 0%, rgba(0,61,155,0.35) 55%, rgba(0,82,204,0.1) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-on-background/70 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 px-gutter max-w-container-max mx-auto w-full pt-[120px] pb-2xl"
        style={{ y: contentY }}
      >
        <div className="max-w-2xl text-on-primary">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-sm px-md py-xs bg-white/10 border border-white/20 rounded-full text-label-sm uppercase tracking-wider mb-lg"
          >
            <span className="pulse-dot" /> Enterprise Connectivity · Mumbai
          </motion.span>
          <h1 className="text-display-lg md:text-[56px] md:leading-[64px] mb-md leading-tight font-extrabold">
            <SplitText
              text="Mumbai's Trusted B2B Connectivity Partner."
              className="block"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-body-lg mb-xl text-white/85 max-w-xl"
          >
            Internet Leased Lines, private Point-to-Point transport, DDoS mitigation and
            SD-WAN — engineered for the enterprises that can't afford downtime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap items-center gap-md"
          >
            <MagneticButton>
              <Link
                to="/contact"
                className="group h-12 bg-primary-container text-on-primary px-xl rounded-lg text-label-md font-semibold hover:bg-primary transition-all inline-flex items-center gap-sm shadow-lg shadow-primary/30"
              >
                Speak with an Expert
                <Icon
                  name="arrow_forward"
                  className="!text-base transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/services"
                className="h-12 bg-transparent border border-white/30 text-white px-xl rounded-lg text-label-md font-semibold hover:bg-white/10 transition-all inline-flex items-center"
              >
                View Solutions
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-lg left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-xs text-white/60 animate-pulse">
        <span className="text-label-sm uppercase tracking-widest">Scroll</span>
        <Icon name="keyboard_arrow_down" className="!text-2xl" />
      </div>
    </header>
  );
}
