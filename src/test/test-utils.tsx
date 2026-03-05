import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactElement } from "react";

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </TooltipProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export { render };
