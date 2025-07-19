import { generateRecurringDates } from "../utils/generateRecurringDates";

describe("generateRecurringDates", () => {
  it("generates daily recurring dates", () => {
    const dates = generateRecurringDates({
      frequency: "daily",
      interval: 1,
      startDate: "2025-07-01",
      endDate: "2025-07-03",
    });

    expect(dates.length).toBe(3);
  });

  it("generates weekly recurring dates", () => {
    const dates = generateRecurringDates({
      frequency: "weekly",
      interval: 1,
      weekdays: ["Monday"],
      startDate: "2025-07-01",
      endDate: "2025-07-31",
    });

    const allMondays = dates.every((d) => new Date(d).getDay() === 1);
    expect(allMondays).toBe(true);
  });

  it("generates monthly on second Tuesday", () => {
    const dates = generateRecurringDates({
      frequency: "monthly",
      interval: 1,
      startDate: "2025-01-01",
      endDate: "2025-06-30",
      monthlyPattern: {
        ordinal: "Second",
        weekday: "Tuesday",
      },
    });

    expect(dates.length).toBeGreaterThan(0);
  });
});
