import { motion } from "framer-motion";

// Reusable animated backdrop for dark hero / banner sections.
// Layers: drifting glow blobs, masked grid pattern, looping diagonal light sweep,
// constellation of pulsing dots with connecting lines. All decorative — pointer-events:none.
export default function AnimatedBackdrop({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
    >
      {/* drifting glow blobs */}
      <motion.div
        className="absolute -top-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-primary-container blur-3xl opacity-40"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-32 w-[34rem] h-[34rem] rounded-full bg-primary blur-3xl opacity-30"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-primary-fixed-dim blur-3xl opacity-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* masked grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      {/* diagonal sweeping light */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-1/3 h-[200%] bg-gradient-to-r from-transparent via-primary-fixed-dim/20 to-transparent rotate-12"
        animate={{ x: ["-50%", "500%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* constellation */}
      <Constellation />
    </div>
  );
}

// SVG: small dots drift gently and connect with thin pulsing lines.
function Constellation() {
  const nodes = [
    { x: "12%", y: "30%", delay: 0 },
    { x: "28%", y: "65%", delay: 0.6 },
    { x: "45%", y: "20%", delay: 1.2 },
    { x: "62%", y: "55%", delay: 0.3 },
    { x: "78%", y: "32%", delay: 0.9 },
    { x: "88%", y: "70%", delay: 1.5 },
  ];
  const lines = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 2],
    [3, 5],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      style={{ overflow: "visible" }}
    >
      {lines.map(([a, b], i) => {
        const A = nodes[a];
        const B = nodes[b];
        return (
          <motion.line
            key={i}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="rgba(178,197,255,0.35)"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.2, 0.7] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="0.4"
          fill="#b2c5ff"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: n.delay,
          }}
          style={{ filter: "drop-shadow(0 0 4px rgba(178,197,255,0.8))" }}
        />
      ))}
    </svg>
  );
}
