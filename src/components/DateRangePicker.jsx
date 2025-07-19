import React from "react";
import { CalendarSearch } from "lucide-react";

const DateRangePicker = ({ startDate, endDate, setField }) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="flex items-center font-medium gap-2 text-gray-700">
        <CalendarSearch className="w-4 h-4" />
        Start Date
      </label>
      <input
        type="date"
        value={startDate || ""}
        onChange={(e) => setField("startDate", e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
    <div>
      <label className="block font-medium mb-1 text-gray-700">
        End Date(Optional)
      </label>
      <input
        type="date"
        value={endDate || ""}
        onChange={(e) => setField("endDate", e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
  </div>
);

export default DateRangePicker;
