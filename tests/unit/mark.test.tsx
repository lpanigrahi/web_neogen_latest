import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Mark } from "@/components/site/Mark";

describe("Mark", () => {
  it("generates unique gradient IDs when rendered multiple times", () => {
    const { container: c1 } = render(<Mark />);
    const { container: c2 } = render(<Mark />);
    const id1 = c1.querySelector("linearGradient")?.id;
    const id2 = c2.querySelector("linearGradient")?.id;
    expect(id1).toBeTruthy();
    expect(id2).toBeTruthy();
    expect(id1).not.toBe(id2);
  });

  it("references its own gradient ID in fill attributes", () => {
    const { container } = render(<Mark />);
    const gradientId = container.querySelector("linearGradient")?.id ?? "";
    const rects = container.querySelectorAll("rect[fill]");
    rects.forEach((rect) => {
      expect(rect.getAttribute("fill")).toBe(`url(#${gradientId})`);
    });
  });
});
