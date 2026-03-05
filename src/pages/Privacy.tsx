import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                AdMark Digitals ("we", "our", or "us") operates the website{" "}
                <Link to="/" className="text-primary hover:underline">admarkdigitals.com</Link>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li><span className="text-foreground font-medium">Personal Information:</span> Name, email address, phone number, and any other details you provide through our contact form.</li>
                <li><span className="text-foreground font-medium">Usage Data:</span> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li><span className="text-foreground font-medium">Cookies & Tracking:</span> We may use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>To respond to your inquiries and provide requested services.</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To send updates about our services (only if you have opted in).</li>
                <li>To comply with legal obligations.</li>
                <li>To detect, prevent, and address technical issues or fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Sharing & Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website (e.g., form submission via Web3Forms), subject to confidentiality agreements. We may also disclose information if required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Withdraw consent for data processing at any time.</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p className="mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="space-y-1.5 ml-2">
                <li><span className="text-foreground font-medium">Email:</span>{" "}
                  <a href="mailto:admarkkagency@gmail.com" className="text-primary hover:underline">admarkkagency@gmail.com</a>
                </li>
                <li><span className="text-foreground font-medium">Phone:</span>{" "}
                  <a href="tel:+919686658055" className="text-primary hover:underline">+91 96866 58055</a>
                </li>
                <li><span className="text-foreground font-medium">Address:</span> Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram, Mysuru 570009</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
