import React from "react";
import { Repeat } from "lucide-react";

const FrequencySelector = ({ frequency, setField }) => (
  <div>
    <label className="flex items-center font-medium gap-2 text-gray-700">
      <Repeat className="w-4 h-4" />
      Frequency
    </label>
    <select
      className="mt-1 p-2 border rounded w-full focus:ring focus:ring-teal-200"
      value={frequency}
      onChange={(e) => setField("frequency", e.target.value)}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>
);

export default FrequencySelector;
