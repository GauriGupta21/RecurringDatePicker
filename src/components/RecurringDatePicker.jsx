import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRecurringStore } from "../store/useRecurringStore";
import { generateRecurringDates } from "../utils/generateRecurringDates";
import { format } from "date-fns";
import { CalendarCheck2, CalendarX2 } from "lucide-react";
import { getPatternSummary } from "../utils/getPatternSummary";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import FrequencySelector from "./FrequencySelector";
import IntervalInput from "./IntervalInput";
import WeeklyOptions from "./WeeklyOptions";
import MonthlyOptions from "./MonthlyOptions";
import YearlyOptions from "./YearlyOptions";
import DateRangePicker from "./DateRangePicker";

const RecurringDatePicker = () => {
  const {
    frequency,
    interval,
    weekdays,
    startDate,
    endDate,
    monthlyPattern,
    yearlyPattern,
    setField,
  } = useRecurringStore();

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const result = generateRecurringDates({
      frequency,
      interval,
      weekdays,
      startDate,
      endDate,
      monthlyPattern,
      yearlyPattern,
    });
    setDates(result);
  }, [
    frequency,
    interval,
    weekdays,
    startDate,
    endDate,
    monthlyPattern,
    yearlyPattern,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-md bg-white/60 max-w-5xl mx-auto p-8 space-y-10 shadow-xl rounded-3xl border border-gray-200"
    >
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CalendarCheck2 className="text-teal-600 w-7 h-7" />
          <h1 className="text-3xl font-bold text-gray-800">
            Recurring Date Picker
          </h1>
        </div>
        <p className="text-sm text-gray-500">
          Select frequency, interval, and date range
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FrequencySelector frequency={frequency} setField={setField} />
        <IntervalInput interval={interval} setField={setField} />

        {frequency === "weekly" && (
          <div className="md:col-span-2">
            <WeeklyOptions weekdays={weekdays} setField={setField} />
          </div>
        )}

        {frequency === "monthly" && (
          <div className="md:col-span-2">
            <MonthlyOptions
              monthlyPattern={monthlyPattern}
              setField={setField}
            />
          </div>
        )}

        {frequency === "yearly" && (
          <div className="md:col-span-2">
            <YearlyOptions yearlyPattern={yearlyPattern} setField={setField} />
          </div>
        )}

        <div className="md:col-span-2">
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            setField={setField}
          />
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <CalendarCheck2 className="text-teal-600 w-5 h-5" />
          <h2 className="text-xl font-semibold text-gray-700">Preview Dates</h2>
        </div>
        <p className="text-sm text-gray-500 italic ml-8">
          {getPatternSummary({
            frequency,
            interval,
            weekdays,
            monthlyPattern,
            yearlyPattern,
          })}
        </p>

        <div className="flex justify-center">
          <Calendar
            tileClassName={({ date }) =>
              dates.some(
                (d) => format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
              )
                ? "bg-teal-500 text-white rounded-full transition-all scale-105"
                : "hover:scale-105 transition-all duration-200"
            }
            className="rounded-xl p-4 border border-gray-200 shadow-md w-full max-w-lg"
          />
        </div>

        {dates.length === 0 ? (
          <div className="flex items-center text-sm text-gray-500 gap-2 ml-8">
            <CalendarX2 className="w-4 h-4" />
            No dates selected.
          </div>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2">
            {dates.map((date, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                className="bg-teal-50 hover:bg-teal-100 text-teal-800 font-medium px-4 py-2 rounded-xl text-sm text-center border border-teal-200 shadow transition-all"
              >
                {format(date, "eee, MMM dd yyyy")}
              </motion.li>
            ))}
          </ul>
        )}
      </section>
    </motion.div>
  );
};

export default RecurringDatePicker;
