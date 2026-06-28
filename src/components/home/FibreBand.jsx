import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { imagery } from "../../data/imagery.js";

export default function FibreBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-[42vh] min-h-[280px] overflow-hidden text-on-primary"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="w-full h-[130%] bg-cover bg-center"
          style={{ backgroundImage: `url(${imagery.fibreBand})` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/70 to-on-background/40" />
      <div className="relative h-full flex items-center px-gutter max-w-container-max mx-auto">
        <div className="max-w-2xl">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
            — Our Fibre Backbone
          </span>
          <h2 className="text-headline-lg mb-md">
            Own fibre across Mumbai. Direct peering. Tier-1 upstream.
          </h2>
          <p className="text-body-md text-white/75 max-w-xl">
            Unlike resellers, we own and maintain the fibre that carries your traffic
            — sub-second BGP failover and 24×7 splice-ready field teams.
          </p>
        </div>
      </div>
    </section>
  );
}
