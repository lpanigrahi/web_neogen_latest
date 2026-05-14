import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Chip } from "@/components/ui/chip";

describe("Chip", () => {
  it("renders label", () => {
    render(<Chip>Self-hosted</Chip>);
    expect(screen.getByText("Self-hosted")).toBeInTheDocument();
  });

  it("renders dot indicator when dot prop is true", () => {
    const { container } = render(<Chip dot>Live</Chip>);
    const dot = container.querySelector(".h-1\\.5");
    expect(dot).toBeInTheDocument();
  });
});
