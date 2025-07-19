import React from "react";
import { CalendarDays } from "lucide-react";

const weekdaysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeeklyOptions = ({ weekdays, setField }) => (
  <div>
    <label className="flex items-center font-medium gap-2 mb-2 text-gray-700">
      <CalendarDays className="w-4 h-4" />
      Select Days of the Week
    </label>
    <div className="flex flex-wrap gap-3">
      {weekdaysList.map((day) => (
        <label
          key={day}
          className="flex items-center gap-2 border rounded px-3 py-1 cursor-pointer hover:bg-teal-50"
        >
          <input
            type="checkbox"
            checked={weekdays.includes(day)}
            onChange={(e) => {
              const checked = e.target.checked;
              setField(
                "weekdays",
                checked ? [...weekdays, day] : weekdays.filter((d) => d !== day)
              );
            }}
          />
          <span>{day}</span>
        </label>
      ))}
    </div>
  </div>
);

export default WeeklyOptions;
