import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PillarCard } from "@/components/site/PillarCard";

describe("PillarCard", () => {
  const props = {
    eyebrow: "PLATFORM",
    title: "MCP Fabric",
    body: "Connect every system.",
    bullets: ["Bullet 1"],
    href: "/platform/mcp-fabric",
  };

  it("renders Learn more link with accessible tap target (min-h 44px)", () => {
    render(<PillarCard {...props} />);
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toBeInTheDocument();
    expect(link.className).toMatch(/py-3|min-h-\[44px\]/);
  });
});
