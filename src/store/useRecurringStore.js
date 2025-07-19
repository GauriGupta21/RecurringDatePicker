import { create } from "zustand";

const store = (set) => ({
  frequency: "daily",
  interval: 1,
  startDate: null,
  endDate: null,
  weekdays: [],
  monthlyPattern: { ordinal: "", weekday: "" },
  yearlyPattern: { month: "", day: "" },
  setField: (key, value) => set(() => ({ [key]: value })),
});

export const useRecurringStore = create(store);
export const recurringStoreConfig = store;
