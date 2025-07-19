import React from "react";
import { Calendar } from "lucide-react";

const YearlyOptions = ({ yearlyPattern, setField }) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="flex items-center font-medium gap-2 text-gray-700">
        <Calendar className="w-4 h-4" />
        Month
      </label>
      <input
        type="number"
        min={0}
        max={11}
        placeholder="0 = Jan"
        value={yearlyPattern.month}
        onChange={(e) =>
          setField("yearlyPattern", {
            ...yearlyPattern,
            month: e.target.value,
          })
        }
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
    <div>
      <label className="block font-medium mb-1 text-gray-700">Day</label>
      <input
        type="number"
        min={1}
        max={31}
        placeholder="1–31"
        value={yearlyPattern.day}
        onChange={(e) =>
          setField("yearlyPattern", {
            ...yearlyPattern,
            day: e.target.value,
          })
        }
        className="mt-1 p-2 border rounded w-full"
      />
    </div>
  </div>
);

export default YearlyOptions;
