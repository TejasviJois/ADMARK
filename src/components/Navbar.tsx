import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Layout, FolderKanban, Users, GraduationCap, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-admark.png";

const centerNavLinks = [
  { label: "About Us", href: "#about", icon: Users },
  { label: "Services", href: "/services", icon: Layout },
  { label: "Careers", href: "#careers", icon: GraduationCap },
  { label: "Contact Us", href: "#contact", icon: MessageCircle },
];

const rightPrimaryHref = "#contact";
const rightPrimaryLabel = "Schedule a Demo";

const mobileNavLinks = [
  ...centerNavLinks,
  { label: "Our Projects", href: "/projects", icon: FolderKanban },
  { label: rightPrimaryLabel, href: rightPrimaryHref, icon: MessageCircle },
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

  const navLinkClass =
    "relative text-[13px] font-medium tracking-wide text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/[0.06]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/85 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="container mx-auto px-4 flex items-center justify-between h-[72px] md:h-16 max-w-6xl relative">
        {/* Left: Logo + brand */}
        <a
          href="/#hero"
          onClick={(e) => { e.preventDefault(); handleHashClick(e, "#hero"); }}
          className="flex items-center gap-3 shrink-0 rounded-xl py-2 pl-2 pr-3 -ml-2 hover:bg-white/[0.04] transition-colors duration-200"
        >
          <img src={logo} alt="AdMark Digitals" className="h-12 sm:h-14 w-auto" />
        </a>

        {/* Center: Nav links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {centerNavLinks.map((l) =>
            isHash(l.href) ? (
              <a key={l.href} href={l.href} onClick={(e) => handleHashClick(e, l.href)} className={navLinkClass}>
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => { if (location.pathname === l.href) window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={navLinkClass}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Right: Outline + primary buttons */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <Link
            to="/projects"
            onClick={() => { if (location.pathname === "/projects") window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-white/95 border border-white/20 rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-200"
          >
            <FolderKanban className="w-4 h-4 opacity-90" />
            Our Projects
          </Link>
          <a
            href={rightPrimaryHref}
            onClick={(e) => { e.preventDefault(); handleHashClick(e, rightPrimaryHref); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 shadow-lg shadow-red-900/30 hover:shadow-red-900/40 transition-all duration-200"
          >
            {rightPrimaryLabel}
          </a>
        </div>

        <motion.button
          className="md:hidden p-2.5 text-neutral-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              id="mobile-menu"
              className="md:hidden fixed top-[72px] left-3 right-3 z-50 rounded-2xl overflow-hidden border border-red-500/20 bg-black/95 shadow-2xl shadow-black/50"
            >
              <div className="p-3">
                {mobileNavLinks.map((l, i) => {
                  const Icon = l.icon;
                  const content = (
                    <>
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-950/80 border border-red-800/40 text-red-400">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="font-medium text-white">{l.label}</span>
                      </span>
                      <ChevronRight className="w-5 h-5 text-red-500/60 shrink-0" />
                    </>
                  );
                  const baseClass =
                    "flex items-center justify-between w-full py-3.5 px-3 rounded-xl text-left transition-colors active:scale-[0.98] hover:bg-red-950/50";
                  if (isHash(l.href)) {
                    return (
                      <motion.a
                        key={l.href}
                        href={l.href}
                        onClick={(e) => { handleHashClick(e, l.href); setOpen(false); }}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 + i * 0.04 }}
                        className={baseClass}
                      >
                        {content}
                      </motion.a>
                    );
                  }
                  return (
                    <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>
                      <motion.span
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 + i * 0.04 }}
                        className={`block ${baseClass}`}
                      >
                        {content}
                      </motion.span>
                    </Link>
                  );
                })}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mx-3" />
              <div className="p-3 pb-4">
                <a
                  href="/#hero"
                  onClick={(e) => { e.preventDefault(); handleHashClick(e, "#hero"); setOpen(false); }}
                  className="flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-red-950/40 transition-colors"
                >
                  <img src={logo} alt="AdMark Digitals" className="h-8 w-auto opacity-90" />
                  <span className="text-xs font-medium text-red-200/80">Back to top</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
