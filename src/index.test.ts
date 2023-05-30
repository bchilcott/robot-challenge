import { describe, it, expect } from "vitest";
import { add } from "./index.js";

describe("A collection of tests", () => {
  it("should add numbers", () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
});
