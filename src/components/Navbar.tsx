import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-admark.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#process" },
  { label: "Our Projects", href: "/projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const scrollToSection = (href: string) => {
  if (!href || href === "#") return;
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHash = (href: string) => href.startsWith("#");

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      scrollToSection(href);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const [ball, setBall] = useState({ x: 0, y: 0, visible: false });
  const onNavMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBall({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };
  const onNavMouseLeave = () => setBall((b) => ({ ...b, visible: false }));

  const glassClass =
    "bg-gradient-to-b from-red-950/50 via-red-950/30 to-black/60 backdrop-blur-xl rounded-full border border-red-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(239,68,68,0.12)]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-4xl">
        <div
          onMouseMove={onNavMouseMove}
          onMouseLeave={onNavMouseLeave}
          className={`hidden md:flex items-center justify-center gap-8 lg:gap-12 ${glassClass} px-8 py-3 relative overflow-visible`}
        >
          {/* Tracking ball */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ visibility: ball.visible ? "visible" : "hidden" }}
          >
            <motion.span
              className="absolute w-2 h-2 rounded-full bg-red-400/80 border border-red-300/50 shadow-[0_0_12px_rgba(239,68,68,0.45)]"
              style={{
                left: ball.x,
                top: ball.y,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: ball.visible ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          </motion.div>
          {navLinks.slice(0, 2).map((l) =>
            isHash(l.href) ? (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleHashClick(e, l.href)}
                className="relative z-10 text-sm font-medium text-red-100/90 hover:text-red-300 transition-colors duration-300 group py-1"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="relative z-10 text-sm font-medium text-red-100/90 hover:text-red-300 transition-colors duration-300 group py-1"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
          <a
            href="/#hero"
            onClick={(e) => { e.preventDefault(); handleHashClick(e, "#hero"); }}
            className="relative z-10 flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="AdMark Digitals" className="h-8 w-auto" />
            <span className="font-bold text-red-50 tracking-tight">ADMARK DIGITALS</span>
          </a>
          {navLinks.slice(2).map((l) =>
            isHash(l.href) ? (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleHashClick(e, l.href)}
                className="relative z-10 text-sm font-medium text-red-100/90 hover:text-red-300 transition-colors duration-300 group py-1"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="relative z-10 text-sm font-medium text-red-100/90 hover:text-red-300 transition-colors duration-300 group py-1"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
          {/* Scroll progress tracking bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-full overflow-hidden bg-red-500/25 z-10">
            <motion.div
              className="h-full bg-red-400/90 rounded-b-full origin-left"
              style={{ scaleX }}
            />
          </div>
        </div>

        <div className={`md:hidden flex items-center justify-between ${glassClass} px-4 py-3`}>
          <a
            href="/#hero"
            onClick={(e) => { e.preventDefault(); handleHashClick(e, "#hero"); }}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="AdMark Digitals" className="h-7 w-auto" />
          </a>
          <motion.button
            className="text-red-100 p-1 rounded-lg hover:bg-red-500/20 transition-colors"
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden fixed top-[72px] left-4 right-4 backdrop-blur-xl rounded-2xl overflow-hidden z-50 ${glassClass} bg-gradient-to-b from-red-950/55 via-red-950/35 to-black/65`}
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l, i) =>
                isHash(l.href) ? (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => { handleHashClick(e, l.href); setOpen(false); }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-sm font-medium text-red-100/90 hover:text-red-300 py-3 px-4 rounded-lg hover:bg-red-500/15 transition-all duration-200"
                  >
                    {l.label}
                  </motion.a>
                ) : (
                  <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block text-sm font-medium text-red-100/90 hover:text-red-300 py-3 px-4 rounded-lg hover:bg-red-500/15 transition-all duration-200"
                    >
                      {l.label}
                    </motion.span>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
