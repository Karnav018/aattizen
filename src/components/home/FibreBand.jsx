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
      className="relative h-[50vh] min-h-[360px] overflow-hidden text-on-primary"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="w-full h-[130%] bg-cover bg-center"
          style={{ backgroundImage: `url(${imagery.fibreBand})` }}
        />
      </motion.div>
      {/* Heavy on the left to ground the text, fades to fully transparent on the right
          so the mesh sphere stays visible. */}
      <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/75 to-transparent" />
      <div className="relative h-full flex items-center px-gutter max-w-container-max mx-auto">
        <div className="max-w-xl">
          <span className="inline-block text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
            — Our Backbone
          </span>
          <h2 className="text-headline-lg mb-md">
            Every site, one fabric. Sub-second failover across the mesh.
          </h2>
          <p className="text-body-md text-white/75 max-w-md">
            Multi-Tier-1 upstream, diverse-path routing and live link telemetry —
            engineered so traffic finds the best path long before you notice the worst one.
          </p>
        </div>
      </div>
    </section>
  );
}
