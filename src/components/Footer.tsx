import { motion } from "framer-motion";
import logo from "@/assets/logo-admark.png";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-6 border-t border-border"
  >
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <motion.img
        src={logo}
        alt="AdMark Digitals"
        className="h-8 w-auto"
        whileHover={{ scale: 1.05 }}
      />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} AdMark Digitals. All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
