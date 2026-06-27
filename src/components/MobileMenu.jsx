import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Icon from "./Icon.jsx";
import { nav, company } from "../data/site.js";
import { services } from "../data/services.js";

const panel = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 40px) 40px)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  visible: {
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const item = {
  hidden: { y: 80, opacity: 0, rotateX: -45 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const fade = (delay = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
});

export default function MenuOverlay({ open, onClose }) {
  const stripeRef = useRef(null);
  const closeRef = useRef(null);
  const numbersRef = useRef([]);
  const sideRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const stripeAnim = gsap.fromTo(
      stripeRef.current,
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "200% 50%",
        duration: 6,
        ease: "none",
        repeat: -1,
      },
    );

    const closeAnim = gsap
      .timeline()
      .fromTo(
        closeRef.current,
        { rotation: -180, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)", delay: 0.3 },
      );

    const numAnim = gsap.fromTo(
      numbersRef.current.filter(Boolean),
      { opacity: 0, x: -20 },
      {
        opacity: 0.35,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.55,
      },
    );

    const sideAnim = sideRef.current
      ? gsap.fromTo(
          sideRef.current.children,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.06, delay: 0.55 },
        )
      : null;

    return () => {
      document.body.style.overflow = "";
      stripeAnim.kill();
      closeAnim.kill();
      numAnim.kill();
      sideAnim && sideAnim.kill();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={panel}
          className="fixed inset-0 z-[60] bg-on-background text-on-primary overflow-hidden"
        >
          {/* animated background stripe */}
          <div
            ref={stripeRef}
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, #003d9b 0%, #0052cc 25%, #001848 50%, #0052cc 75%, #003d9b 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary-container blur-3xl opacity-40 pointer-events-none" />

          {/* top bar */}
          <div className="relative flex justify-between items-center px-gutter lg:px-2xl py-md max-w-[1600px] mx-auto">
            <img
              src="/images/aattizen-white-logo.png"
              alt="Aattizen"
              className="h-9 lg:h-10 w-auto"
            />
            <button
              ref={closeRef}
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center text-white/80 hover:text-white hover:rotate-90 transition-all duration-300"
              aria-label="Close menu"
            >
              <Icon name="close" className="!text-3xl" />
            </button>
          </div>

          {/* main grid: nav left, contact pane right (only on lg+) */}
          <div className="relative max-w-[1600px] mx-auto px-gutter lg:px-2xl pt-md lg:pt-lg pb-[160px] lg:pb-md h-[calc(100vh-72px)] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-lg lg:gap-2xl">
            {/* nav list */}
            <motion.ul
              variants={list}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-1 sm:gap-sm lg:gap-sm"
              style={{ perspective: 1000 }}
            >
              {nav.map((n, idx) => (
                <motion.li
                  key={n.path}
                  variants={item}
                  className="overflow-hidden"
                  style={{ transformOrigin: "left top" }}
                >
                  {n.path.startsWith("/#") ? (
                    <a
                      href={n.path.slice(1)}
                      onClick={onClose}
                      className="group flex items-baseline gap-md text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4vw] leading-[1.05] font-extrabold tracking-tight"
                    >
                      <span
                        ref={(el) => (numbersRef.current[idx] = el)}
                        className="text-label-md font-mono text-primary-fixed-dim shrink-0"
                      >
                        {String(idx).padStart(2, "0")}
                      </span>
                      <span className="relative">
                        {n.label}
                        <span className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full bg-primary-fixed-dim transition-all duration-500" />
                      </span>
                    </a>
                  ) : (
                    <NavLink
                      to={n.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-md text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4vw] leading-[1.05] font-extrabold tracking-tight ${
                          isActive ? "text-primary-fixed-dim" : "text-white"
                        }`
                      }
                    >
                      <span
                        ref={(el) => (numbersRef.current[idx] = el)}
                        className="text-label-md font-mono text-primary-fixed-dim shrink-0"
                      >
                        {String(idx).padStart(2, "0")}
                      </span>
                      <span className="relative">
                        {n.label}
                        <span className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full bg-primary-fixed-dim transition-all duration-500" />
                      </span>
                    </NavLink>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            {/* right column — visible from lg up */}
            <aside
              ref={sideRef}
              className="hidden lg:flex flex-col gap-lg justify-between"
            >
              <div>
                <p className="text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
                  — Services
                </p>
                <ul className="space-y-sm">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between py-sm border-b border-white/10 hover:border-primary-fixed-dim transition-colors"
                      >
                        <span className="text-headline-sm font-semibold">{s.title}</span>
                        <Icon
                          name="north_east"
                          className="!text-base opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-label-sm uppercase tracking-widest text-primary-fixed-dim mb-md">
                  — Talk to us
                </p>
                <a
                  href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                  className="block text-headline-md font-bold hover:text-primary-fixed-dim transition-colors"
                >
                  {company.phones.primary}
                </a>
                <a
                  href={`mailto:${company.emails.sales}`}
                  className="block text-body-lg text-white/80 hover:text-white transition-colors mt-xs"
                >
                  {company.emails.sales}
                </a>
                <p className="mt-md text-body-md text-white/60 max-w-xs leading-relaxed">
                  {company.address.line1}, {company.address.line2}, {company.address.line3}
                </p>
              </div>
            </aside>
          </div>

          {/* mobile / tablet footer block */}
          <motion.div
            variants={fade(0.6)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute z-10 bottom-0 left-0 right-0 px-gutter py-md backdrop-blur-sm bg-on-background/50 border-t border-white/10"
          >
            <div className="flex items-center justify-between text-label-sm text-white/70 mb-sm">
              <a
                href={`tel:${company.phones.primary.replace(/\s/g, "")}`}
                className="flex items-center gap-xs hover:text-white transition-colors"
              >
                <Icon name="call" className="!text-base" /> {company.phones.primary}
              </a>
              <a
                href={`mailto:${company.emails.sales}`}
                className="flex items-center gap-xs hover:text-white transition-colors"
              >
                <Icon name="mail" className="!text-base" /> Sales
              </a>
            </div>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-sm w-full bg-primary-container text-on-primary text-label-md font-semibold py-md rounded-lg hover:bg-primary transition-all"
            >
              Get a Quote <Icon name="arrow_forward" className="!text-base" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
