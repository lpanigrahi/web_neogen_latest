import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>SOC 2</Badge>);
    expect(screen.getByText("SOC 2")).toBeInTheDocument();
  });

  it("renders aurora variant", () => {
    render(<Badge variant="aurora">MCP-Native</Badge>);
    expect(screen.getByText("MCP-Native")).toBeInTheDocument();
  });
});
