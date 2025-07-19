import React from "react";
import { Clock } from "lucide-react";

const IntervalInput = ({ interval, setField }) => (
  <div>
    <label className="flex items-center font-medium gap-2 text-gray-700">
      <Clock className="w-4 h-4" />
      Every
    </label>
    <input
      type="number"
      min={1}
      className="mt-1 p-2 border rounded w-full focus:ring focus:ring-teal-200"
      value={interval}
      onChange={(e) => setField("interval", parseInt(e.target.value))}
    />
  </div>
);

export default IntervalInput;
