import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";

import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByAltText("AdMark Digitals")).toBeInTheDocument();
  });

  it("shows desktop nav links", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("shows right-side buttons", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Our Projects")).toBeInTheDocument();
    expect(screen.getByText("Schedule a Demo")).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    renderWithProviders(<Navbar />);
    const logo = screen.getByAltText("AdMark Digitals");
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("IMG");
  });

  it("has mobile menu button with correct aria attributes", () => {
    renderWithProviders(<Navbar />);
    const menuButton = screen.getByLabelText("Open menu");
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles mobile menu on click", () => {
    renderWithProviders(<Navbar />);
    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
    expect(screen.getByLabelText("Close menu")).toHaveAttribute("aria-expanded", "true");
  });

  it("shows mobile nav links when menu is open", () => {
    renderWithProviders(<Navbar />);
    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);
    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
  });

  it("Schedule a Demo links to contact section", () => {
    renderWithProviders(<Navbar />);
    const demoButton = screen.getByText("Schedule a Demo");
    expect(demoButton.closest("a")).toBeTruthy();
  });

  it("Our Projects links to /projects", () => {
    renderWithProviders(<Navbar />);
    const projectsLink = screen.getByText("Our Projects");
    expect(projectsLink.closest("a")).toHaveAttribute("href", "/projects");
  });
});
