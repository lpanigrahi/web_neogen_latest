import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ROICalculator } from "@/components/site/ROICalculator";

describe("ROICalculator", () => {
  it("renders calculator inputs", () => {
    render(<ROICalculator />);
    expect(screen.getByLabelText(/knowledge workers/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/annual AI tool spend/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/processes to automate/i)).toBeInTheDocument();
  });

  it("renders output metrics", () => {
    render(<ROICalculator />);
    expect(screen.getByText(/projected annual savings/i)).toBeInTheDocument();
    expect(screen.getByText(/ROI multiple/i)).toBeInTheDocument();
  });
});
