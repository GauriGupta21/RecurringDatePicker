import React from "react";
import { CalendarPlus } from "lucide-react";

const ordinals = ["First", "Second", "Third", "Fourth", "Last"];
const weekdaysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MonthlyOptions = ({ monthlyPattern, setField }) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="flex items-center font-medium gap-2 mb-1 text-gray-700">
        <CalendarPlus className="w-4 h-4" />
        Week
      </label>
      <select
        className="p-2 border rounded w-full"
        value={monthlyPattern.ordinal}
        onChange={(e) =>
          setField("monthlyPattern", {
            ...monthlyPattern,
            ordinal: e.target.value,
          })
        }
      >
        <option value="">Select</option>
        {ordinals.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className="block font-medium mb-1 text-gray-700">Weekday</label>
      <select
        className="p-2 border rounded w-full"
        value={monthlyPattern.weekday}
        onChange={(e) =>
          setField("monthlyPattern", {
            ...monthlyPattern,
            weekday: e.target.value,
          })
        }
      >
        <option value="">Select</option>
        {weekdaysList.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default MonthlyOptions;
