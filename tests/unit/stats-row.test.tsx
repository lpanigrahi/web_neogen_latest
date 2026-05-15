import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { StatsRow } from "@/components/site/StatsRow";

const stats = [
  { value: "40%+", label: "Test", source: "Source" },
  { value: "1.7x", label: "Test2", source: "Source2" },
];

describe("StatsRow", () => {
  it("has grid-cols-1 as base class for mobile-first single column", () => {
    const { container } = render(<StatsRow stats={stats} />);
    const grid = container.querySelector("[class*='grid']");
    expect(grid?.className).toMatch(/grid-cols-1/);
  });
});
