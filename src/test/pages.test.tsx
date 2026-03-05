import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";

import Index from "@/pages/Index";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/NotFound";

describe("Index page", () => {
  it("renders the full homepage without crashing", () => {
    renderWithProviders(<Index />);
    expect(screen.getByText("We build")).toBeInTheDocument();
  });

  it("contains all major sections", () => {
    renderWithProviders(<Index />);
    expect(screen.getByText("Custom vs Pre-Built")).toBeInTheDocument();
    expect(screen.getByText("Our Strategic Process")).toBeInTheDocument();
    expect(screen.getByText("Features That Set Us Apart")).toBeInTheDocument();
    expect(screen.getByText("The People Behind AdMark")).toBeInTheDocument();
    expect(screen.getByText("What Our Clients Say")).toBeInTheDocument();
    expect(screen.getByText("Industries We Serve")).toBeInTheDocument();
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(screen.getByText("Internships at AdMark")).toBeInTheDocument();
  });

  it("includes the navbar", () => {
    renderWithProviders(<Index />);
    expect(screen.getByText("Schedule a Demo")).toBeInTheDocument();
  });

  it("includes the footer", () => {
    renderWithProviders(<Index />);
    expect(screen.getByText(/Let's build something great/)).toBeInTheDocument();
  });
});

describe("Services page", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Services />);
    expect(screen.getByText("Our Core Services")).toBeInTheDocument();
  });

  it("includes navbar and footer", () => {
    renderWithProviders(<Services />);
    expect(screen.getByText("Schedule a Demo")).toBeInTheDocument();
    expect(screen.getByText(/Let's build something great/)).toBeInTheDocument();
  });
});

describe("Projects page", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText(/Work &/)).toBeInTheDocument();
  });

  it("displays featured projects", () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText("Dronark Aerospace")).toBeInTheDocument();
    expect(screen.getByText("Kavach.World")).toBeInTheDocument();
  });

  it("shows corporate pillars", () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText("Strategic")).toBeInTheDocument();
    expect(screen.getByText("Reliable")).toBeInTheDocument();
    expect(screen.getByText("Results-driven")).toBeInTheDocument();
  });

  it("displays client testimonials", () => {
    renderWithProviders(<Projects />);
    expect(screen.getByText("Vivid Infrastructures")).toBeInTheDocument();
    expect(screen.getByText("Naidile")).toBeInTheDocument();
  });

  it("has external project links", () => {
    renderWithProviders(<Projects />);
    const links = screen.getAllByText("View project");
    expect(links.length).toBeGreaterThanOrEqual(5);
  });
});

describe("NotFound page", () => {
  it("renders 404 message", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
