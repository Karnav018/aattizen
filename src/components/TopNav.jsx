import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import MenuOverlay from "./MobileMenu.jsx";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all ${
          scrolled
            ? "glass-header shadow-sm border-outline-variant"
            : "bg-surface border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src="/images/aattizen.png"
              alt="Aattizen"
              className="h-8 w-auto rounded-md"
            />
          </Link>

          <div className="flex items-center gap-md">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-primary-container text-on-primary text-label-md font-medium px-md py-1.5 rounded-lg active:scale-95 hover:bg-primary transition-all"
            >
              Get a Quote
            </Link>

            <button
              className="group relative w-10 h-10 text-primary flex items-center justify-center transition-colors duration-300"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="flex flex-col items-center justify-center gap-[5px] transition-[gap] duration-300 group-hover:gap-[3px]">
                <span className="block w-6 h-[2px] rounded-full bg-current transition-all duration-300 group-hover:-translate-y-px" />
                <span className="block w-6 h-[2px] rounded-full bg-current transition-all duration-300 group-hover:w-4" />
                <span className="block w-6 h-[2px] rounded-full bg-current transition-all duration-300 group-hover:translate-y-px" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
