import { describe, it, expect } from "vitest";
import { add } from "./index.js";

describe("A collection of tests", () => {
  it("should add numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});
