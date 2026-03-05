import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
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

    const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "").trim();
    if (!accessKey) {
      setResult({
        type: "error",
        message: "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file. Get a free key at web3forms.com",
      });
      return;
    }

    setIsSubmitting(true);
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
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-6"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s Build Your Digital Infrastructure
          </h2>
          <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
          <p className="text-muted-foreground">Ready to elevate your brand?</p>
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
              <Label htmlFor="enquiry_type">I'm interested in</Label>
              <select
                id="enquiry_type"
                name="enquiry_type"
                required
                className="flex h-11 sm:h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-base sm:text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none"
              >
                <option value="">Select...</option>
                <option value="Project">Project</option>
                <option value="Internship">Internship</option>
              </select>
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
