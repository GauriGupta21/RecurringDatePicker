import { describe, it, expect } from "vitest";
import { useRecurringStore } from "../store/useRecurringStore";

describe("Recurring Store", () => {
  it("updates frequency", () => {
    useRecurringStore.getState().setField("frequency", "weekly");
    expect(useRecurringStore.getState().frequency).toBe("weekly");
  });
});
