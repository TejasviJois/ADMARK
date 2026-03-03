import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ type: "success", message: "Thank you! We'll get back to you soon." });
        form.reset();
      } else {
        setResult({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setResult({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-6"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Build Your Digital Infrastructure
          </h2>
          <p className="text-muted-foreground">Ready to elevate your brand?</p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-start gap-3 text-left sm:text-center sm:max-w-[280px]">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                Prashanth Plaza, 5th Cross, 4th Main,
                <br />
                Saraswathipuram, Mysuru, Karnataka 570009
              </address>
            </div>
            <div className="flex flex-col gap-3 sm:items-center">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-foreground/80 font-medium">96320 92273</span>
                <span className="flex items-center gap-2">
                  <a href="tel:+919632092273" className="hover:text-foreground transition-colors" title="Call">Call</a>
                  <span className="text-border">·</span>
                  <a href="https://wa.me/919632092273" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="WhatsApp">WhatsApp</a>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-foreground/80 font-medium">96866 58055</span>
                <span className="flex items-center gap-2">
                  <a href="tel:+919686658055" className="hover:text-foreground transition-colors" title="Call">Call</a>
                  <span className="text-border">·</span>
                  <a href="https://wa.me/919686658055" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="WhatsApp">WhatsApp</a>
                </span>
              </div>
            </div>
            <a
              href="mailto:admarkkagency@gmail.com"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-foreground transition-colors"
            >
              <Mail size={18} className="text-primary shrink-0" />
              admarkkagency@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border shadow-card p-6 sm:p-8"
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell us about your project or requirements..."
                required
                rows={4}
                className="bg-background border-border min-h-[100px] resize-y"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of meeting</Label>
              <Textarea
                id="purpose"
                name="purpose_of_meeting"
                placeholder="What would you like to discuss?"
                required
                rows={3}
                className="bg-background border-border min-h-[80px] resize-y"
              />
            </div>

            {result && (
              <p
                className={`text-sm font-medium ${
                  result.type === "success" ? "text-green-500" : "text-destructive"
                }`}
              >
                {result.message}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:opacity-90 shadow-glow px-8"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
