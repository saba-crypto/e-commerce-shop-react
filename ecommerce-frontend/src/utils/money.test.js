import { it, expect, describe } from "vitest";
import { formatCurrency } from "./money";
describe("format currency", () => {
  it("formats 1999 cents as $19.99", () => {
    expect(formatCurrency(1999)).toBe("$19.99");
  });

  it("displays two decimals", () => {
    expect(formatCurrency(1090)).toBe("$10.90");
    expect(formatCurrency(100)).toBe("$1.00");
  });
  it("displays 0 as $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  it("works with negative numbers", () => {
    expect(formatCurrency(-999)).toBe("-$9.99");
    expect(formatCurrency(-100)).toBe("-$1.00");
  });
});
