import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import TrustWeOverDeliverSection from "@/components/TrustWeOverDeliverSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

describe("HeroSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText("We build")).toBeInTheDocument();
  });

  it("displays the location pill", () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Mysore · Bangalore · Hyderabad/)).toBeInTheDocument();
  });

  it("has CTA buttons", () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText("Start Your Project")).toBeInTheDocument();
    expect(screen.getByText("Book a Call")).toBeInTheDocument();
  });

  it("shows trust line", () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Trusted by/)).toBeInTheDocument();
    expect(screen.getByText("25+")).toBeInTheDocument();
  });

  it("renders rotating text with one visible line", () => {
    renderWithProviders(<HeroSection />);
    const rotatingTexts = ["websites that convert", "SaaS that scales", "digital foundations", "growth engines"];
    const found = rotatingTexts.some((text) => screen.queryByText(text));
    expect(found).toBe(true);
  });
});

describe("StatsSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<StatsSection />);
    expect(screen.getByText("25+")).toBeInTheDocument();
  });

  it("displays all stat values", () => {
    renderWithProviders(<StatsSection />);
    expect(screen.getByText("25+")).toBeInTheDocument();
    expect(screen.getByText("9+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("displays stat labels", () => {
    renderWithProviders(<StatsSection />);
    expect(screen.getByText("Projects Delivered")).toBeInTheDocument();
    expect(screen.getByText("Industries Served")).toBeInTheDocument();
    expect(screen.getByText("Custom Solutions")).toBeInTheDocument();
  });
});

describe("ComparisonSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<ComparisonSection />);
    expect(screen.getByText("Custom vs Pre-Built")).toBeInTheDocument();
  });

  it("shows both options", () => {
    renderWithProviders(<ComparisonSection />);
    expect(screen.getByText("Custom Development")).toBeInTheDocument();
    expect(screen.getByText("Pre-Built Solutions")).toBeInTheDocument();
  });

  it("shows recommended badge", () => {
    renderWithProviders(<ComparisonSection />);
    expect(screen.getByText("Recommended")).toBeInTheDocument();
  });

  it("has a CTA link to projects", () => {
    renderWithProviders(<ComparisonSection />);
    expect(screen.getByText(/View Our Projects/)).toBeInTheDocument();
  });
});

describe("ProcessSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<ProcessSection />);
    expect(screen.getByText("Our Strategic Process")).toBeInTheDocument();
  });

  it("displays all 6 steps", () => {
    renderWithProviders(<ProcessSection />);
    expect(screen.getByText("Discovery")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
    expect(screen.getByText("Strategy & Wireframing")).toBeInTheDocument();
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
    expect(screen.getByText("Launch & Scale")).toBeInTheDocument();
  });
});

describe("FeaturesSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<FeaturesSection />);
    expect(screen.getByText("Features That Set Us Apart")).toBeInTheDocument();
  });

  it("displays all feature labels", () => {
    renderWithProviders(<FeaturesSection />);
    expect(screen.getByText("SEO-Optimized Code Structure")).toBeInTheDocument();
    expect(screen.getByText("Lightning Fast Performance")).toBeInTheDocument();
    expect(screen.getByText("100% Responsive Layouts")).toBeInTheDocument();
  });

  it("renders the ticker", () => {
    renderWithProviders(<FeaturesSection />);
    expect(screen.getAllByText("Develop it once. Scale it forever.").length).toBeGreaterThanOrEqual(1);
  });
});

describe("TeamSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<TeamSection />);
    expect(screen.getByText("The People Behind AdMark")).toBeInTheDocument();
  });

  it("displays team members", () => {
    renderWithProviders(<TeamSection />);
    expect(screen.getByText("Tejasvi Jois")).toBeInTheDocument();
    expect(screen.getByText("Harshith V. Malipatil")).toBeInTheDocument();
  });

  it("shows roles", () => {
    renderWithProviders(<TeamSection />);
    expect(screen.getByText("Founder & CEO")).toBeInTheDocument();
    expect(screen.getByText("Co-founder & CTO")).toBeInTheDocument();
  });

  it("renders team member images", () => {
    renderWithProviders(<TeamSection />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(2);
  });
});

describe("TestimonialsSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<TestimonialsSection />);
    expect(screen.getByText("What Our Clients Say")).toBeInTheDocument();
  });

  it("displays testimonial authors", () => {
    renderWithProviders(<TestimonialsSection />);
    expect(screen.getByText(/Manufacturing Client/)).toBeInTheDocument();
    expect(screen.getByText(/SaaS Founder/)).toBeInTheDocument();
  });

  it("renders star ratings", () => {
    renderWithProviders(<TestimonialsSection />);
    const stars = document.querySelectorAll(".fill-primary");
    expect(stars.length).toBe(10);
  });
});

describe("IndustriesSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<IndustriesSection />);
    expect(screen.getByText("Industries We Serve")).toBeInTheDocument();
  });

  it("displays all industries", () => {
    renderWithProviders(<IndustriesSection />);
    expect(screen.getByText("Manufacturing")).toBeInTheDocument();
    expect(screen.getByText("SaaS Startups")).toBeInTheDocument();
    expect(screen.getByText("Logistics")).toBeInTheDocument();
  });
});

describe("FAQSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<FAQSection />);
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });

  it("displays FAQ questions", () => {
    renderWithProviders(<FAQSection />);
    expect(screen.getByText(/Do you provide website development/)).toBeInTheDocument();
    expect(screen.getByText(/How long does it take/)).toBeInTheDocument();
  });
});

describe("CareersSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<CareersSection />);
    expect(screen.getByText("Internships at AdMark")).toBeInTheDocument();
  });

  it("displays all internship roles", () => {
    renderWithProviders(<CareersSection />);
    expect(screen.getByText("Business Development Intern")).toBeInTheDocument();
    expect(screen.getByText("Web Application Developer Intern")).toBeInTheDocument();
    expect(screen.getByText("UI/UX Intern")).toBeInTheDocument();
    expect(screen.getByText("Digital Marketing Intern")).toBeInTheDocument();
  });

  it("shows commission tag for business dev", () => {
    renderWithProviders(<CareersSection />);
    expect(screen.getByText("With commission")).toBeInTheDocument();
  });

  it("has apply links", () => {
    renderWithProviders(<CareersSection />);
    const applyLinks = screen.getAllByText("Apply now");
    expect(applyLinks.length).toBe(4);
  });
});

describe("ContactSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByText(/Let's Build Your Digital Infrastructure/)).toBeInTheDocument();
  });

  it("has all form fields", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Purpose of meeting")).toBeInTheDocument();
  });

  it("has enquiry type dropdown", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByLabelText("I'm interested in")).toBeInTheDocument();
    const select = screen.getByLabelText("I'm interested in") as HTMLSelectElement;
    expect(select.options.length).toBe(3);
  });

  it("has submit button", () => {
    renderWithProviders(<ContactSection />);
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});

describe("TrustWeOverDeliverSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<TrustWeOverDeliverSection />);
    expect(screen.getByText("Trust Us")).toBeInTheDocument();
    expect(screen.getByText("We Deliver")).toBeInTheDocument();
    expect(screen.getByText("Beyond Expectations.")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Let's build something great/)).toBeInTheDocument();
  });

  it("displays contact info", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("admarkkagency@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+91 96866 58055")).toBeInTheDocument();
  });

  it("has navigation links", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("shows office address", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Prashanth Plaza/)).toBeInTheDocument();
    expect(screen.getByText("Opening soon")).toBeInTheDocument();
  });

  it("displays copyright", () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} AdMark Digitals`)).toBeInTheDocument();
  });

  it("renders footer logo", () => {
    renderWithProviders(<Footer />);
    const logos = screen.getAllByAltText("AdMark Digitals");
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });
});

describe("WhatsAppButton", () => {
  it("renders without crashing", () => {
    renderWithProviders(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://wa.me/919686658055");
  });

  it("opens in new tab", () => {
    renderWithProviders(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });
});

describe("AboutSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("Research-First Digital Solutions Agency")).toBeInTheDocument();
  });

  it("mentions founding year", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText("founded in 2024")).toBeInTheDocument();
  });

  it("shows description text", () => {
    renderWithProviders(<AboutSection />);
    expect(screen.getByText(/digital infrastructure/)).toBeInTheDocument();
  });
});

describe("ServicesSection", () => {
  it("renders without crashing", () => {
    renderWithProviders(<ServicesSection />);
    expect(screen.getByText("Our Core Services")).toBeInTheDocument();
  });

  it("displays service categories", () => {
    renderWithProviders(<ServicesSection />);
    expect(screen.getByText("Custom Website Development")).toBeInTheDocument();
    expect(screen.getByText("SaaS Product Development")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce Development")).toBeInTheDocument();
    expect(screen.getByText("ERP & Business Automation")).toBeInTheDocument();
  });

  it("shows category headers", () => {
    renderWithProviders(<ServicesSection />);
    expect(screen.getByText("Web & product development")).toBeInTheDocument();
    expect(screen.getByText("Project & research")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
    expect(screen.getByText("Business systems")).toBeInTheDocument();
  });
});
