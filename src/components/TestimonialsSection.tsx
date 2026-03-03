import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "AdMark Digitals transformed our digital presence completely. Their structured process and SEO-first approach gave us measurable growth within months.",
    author: "Manufacturing Client",
    location: "Bangalore",
  },
  {
    text: "They don't just build websites — they build systems that scale.",
    author: "SaaS Founder",
    location: "Hyderabad",
  },
];

const TestimonialsSection = () => (
  <section className="py-10 border-t border-border relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-6"
    >
      <span className="text-primary font-semibold text-sm tracking-wider uppercase">Testimonials</span>
      <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.02, y: -4, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}
            className="group p-8 rounded-2xl bg-card border border-border shadow-card cursor-default"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.3 }}
                  className="inline-block"
                >
                  <Star size={16} className="fill-primary text-primary" />
                </motion.span>
              ))}
            </div>
            <p className="text-foreground italic mb-4 leading-relaxed">&quot;{t.text}&quot;</p>
            <p className="text-sm text-muted-foreground">— {t.author}, {t.location}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
