import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Splits children string into words and reveals each from below.
export default function SplitText({ text, as: As = "span", className = "" }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-baseline"
        >
          <motion.span variants={wordVariant} className="inline-block pr-[0.25em]">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
