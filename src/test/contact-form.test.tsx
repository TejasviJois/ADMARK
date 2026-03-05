import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";

import ContactSection from "@/components/ContactSection";

describe("Contact form validation", () => {
  it("has required fields", () => {
    renderWithProviders(<ContactSection />);
    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const phoneInput = screen.getByLabelText("Phone number") as HTMLInputElement;
    const descInput = screen.getByLabelText("Description") as HTMLTextAreaElement;
    const purposeInput = screen.getByLabelText("Purpose of meeting") as HTMLTextAreaElement;
    const enquirySelect = screen.getByLabelText("I'm interested in") as HTMLSelectElement;

    expect(nameInput.required).toBe(true);
    expect(emailInput.required).toBe(true);
    expect(phoneInput.required).toBe(true);
    expect(descInput.required).toBe(true);
    expect(purposeInput.required).toBe(true);
    expect(enquirySelect.required).toBe(true);
  });

  it("email field validates email type", () => {
    renderWithProviders(<ContactSection />);
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    expect(emailInput.type).toBe("email");
  });

  it("phone field validates tel type", () => {
    renderWithProviders(<ContactSection />);
    const phoneInput = screen.getByLabelText("Phone number") as HTMLInputElement;
    expect(phoneInput.type).toBe("tel");
  });

  it("enquiry dropdown has Project and Internship options", () => {
    renderWithProviders(<ContactSection />);
    const select = screen.getByLabelText("I'm interested in") as HTMLSelectElement;
    const options = Array.from(select.options).map((o) => o.value);
    expect(options).toContain("Project");
    expect(options).toContain("Internship");
  });

  it("shows error when API key is missing", async () => {
    const original = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "");

    renderWithProviders(<ContactSection />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Phone number");
    const descInput = screen.getByLabelText("Description");
    const purposeInput = screen.getByLabelText("Purpose of meeting");
    const selectInput = screen.getByLabelText("I'm interested in");

    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(descInput, { target: { value: "Test description" } });
    fireEvent.change(purposeInput, { target: { value: "Test purpose" } });
    fireEvent.change(selectInput, { target: { value: "Project" } });

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Contact form is not configured/)).toBeInTheDocument();
    });

    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", original ?? "");
  });
});

describe("Contact form submission", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "test-key-123");
  });

  it("shows loading state during submission", async () => {
    global.fetch = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: () => Promise.resolve({ success: true }),
              }),
            100
          )
        )
    );

    renderWithProviders(<ContactSection />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "t@t.com" } });
    fireEvent.change(screen.getByLabelText("Phone number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Desc" } });
    fireEvent.change(screen.getByLabelText("Purpose of meeting"), { target: { value: "Meet" } });
    fireEvent.change(screen.getByLabelText("I'm interested in"), { target: { value: "Project" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText("Sending...")).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });

  it("shows success message on successful submission", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    renderWithProviders(<ContactSection />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "t@t.com" } });
    fireEvent.change(screen.getByLabelText("Phone number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Desc" } });
    fireEvent.change(screen.getByLabelText("Purpose of meeting"), { target: { value: "Meet" } });
    fireEvent.change(screen.getByLabelText("I'm interested in"), { target: { value: "Project" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Thank you/)).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });

  it("shows error message on failed submission", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: false, message: "Server error" }),
    });

    renderWithProviders(<ContactSection />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "t@t.com" } });
    fireEvent.change(screen.getByLabelText("Phone number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Desc" } });
    fireEvent.change(screen.getByLabelText("Purpose of meeting"), { target: { value: "Meet" } });
    fireEvent.change(screen.getByLabelText("I'm interested in"), { target: { value: "Project" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText("Server error")).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });

  it("handles network errors gracefully", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderWithProviders(<ContactSection />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "t@t.com" } });
    fireEvent.change(screen.getByLabelText("Phone number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Desc" } });
    fireEvent.change(screen.getByLabelText("Purpose of meeting"), { target: { value: "Meet" } });
    fireEvent.change(screen.getByLabelText("I'm interested in"), { target: { value: "Project" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });
});
