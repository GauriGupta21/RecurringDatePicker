import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";

vi.mock("../store/useRecurringStore", () => {
  const { create } = require("zustand");
  const useMockStore = create(() => ({
    frequency: "daily",
    setField: vi.fn(),
  }));
  return {
    useRecurringStore: useMockStore,
  };
});

import RecurringDatePicker from "./RecurringDatePicker";

describe("RecurringDatePicker", () => {
  it("renders heading", () => {
    render(<RecurringDatePicker />);
    const heading = screen.getByText(/recurring/i);
    expect(heading).toBeInTheDocument();
  });
});
