import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-admark.webp";

const Footer = () => (
  <footer className="relative bg-black overflow-hidden">
    {/* Subtle top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

    <div className="container mx-auto px-4 max-w-5xl">
      {/* Top section — CTA band */}
      <div className="py-10 sm:py-14 text-center border-b border-white/[0.06]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3"
        >
          Let's build something great.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-neutral-500 mb-6"
        >
          Ready to start your project? Get in touch today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:admarkkagency@gmail.com"
            className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 transition-colors shadow-lg shadow-red-900/20"
          >
            admarkkagency@gmail.com
          </a>
          <a
            href="tel:+919686658055"
            className="px-5 py-2.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-lg hover:border-white/25 hover:text-white transition-all"
          >
            +91 96866 58055
          </a>
        </motion.div>
      </div>

      {/* Middle section — links + info */}
      <div className="py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 text-sm">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-3">Navigate</p>
          <ul className="space-y-2">
            {[
              { label: "About", to: "/#about" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-neutral-500 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-3">Company</p>
          <ul className="space-y-2">
            <li><a href="#careers" className="text-neutral-500 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#contact" className="text-neutral-500 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#faq" className="text-neutral-500 hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-3">Call us</p>
          <ul className="space-y-2">
            <li><a href="tel:+919632092273" className="text-neutral-500 hover:text-white transition-colors">96320 92273</a></li>
            <li><a href="tel:+919686658055" className="text-neutral-500 hover:text-white transition-colors">96866 58055</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-3">Office</p>
          <address className="not-italic text-neutral-500 leading-relaxed text-[13px]">
            Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram, Mysuru 570009
          </address>
          <span className="inline-block mt-2 text-red-400/80 text-[10px] font-semibold uppercase tracking-wider bg-red-500/10 px-2 py-0.5 rounded">
            Opening soon
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-[11px] text-neutral-700">
          <span>© {new Date().getFullYear()} AdMark Digitals</span>
          <span className="text-neutral-800">·</span>
          <Link to="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
        </div>
        <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">
          <img src={logo} alt="AdMark Digitals" className="h-10 w-auto" />
        </Link>
        <p className="text-[11px] text-neutral-700">
          Mysore · Bangalore · Hyderabad
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
