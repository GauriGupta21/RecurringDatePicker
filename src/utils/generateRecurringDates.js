import { RRule } from "rrule";

const weekdayMap = {
  Sunday: RRule.SU,
  Monday: RRule.MO,
  Tuesday: RRule.TU,
  Wednesday: RRule.WE,
  Thursday: RRule.TH,
  Friday: RRule.FR,
  Saturday: RRule.SA,
};

const ordinalMap = {
  First: 1,
  Second: 2,
  Third: 3,
  Fourth: 4,
  Last: -1,
};

export const generateRecurringDates = ({
  frequency,
  interval,
  weekdays,
  startDate,
  endDate,
  monthlyPattern,
  yearlyPattern,
}) => {
  if (!startDate) return [];

  const start = new Date(startDate);
  const until = endDate ? new Date(endDate) : null;

  let ruleOptions = {
    freq: RRule.DAILY,
    dtstart: start,
    interval: interval || 1,
    ...(until ? { until } : { count: 30 }),
  };

  switch (frequency) {
    case "daily":
      ruleOptions.freq = RRule.DAILY;
      break;

    case "weekly":
      ruleOptions.freq = RRule.WEEKLY;
      ruleOptions.byweekday = weekdays.map((d) => weekdayMap[d]);
      break;

    case "monthly":
      ruleOptions.freq = RRule.MONTHLY;
      const week = ordinalMap[monthlyPattern.ordinal];
      const day = weekdayMap[monthlyPattern.weekday];
      if (week && day) {
        ruleOptions.byweekday = [day.nth(week)];
      }
      break;

    case "yearly":
      ruleOptions.freq = RRule.YEARLY;
      const month = parseInt(yearlyPattern.month);
      const dayOfMonth = parseInt(yearlyPattern.day);
      if (!isNaN(month) && !isNaN(dayOfMonth)) {
        ruleOptions.bymonth = [month + 1];
        ruleOptions.bymonthday = [dayOfMonth];
      }
      break;
  }

  const rule = new RRule(ruleOptions);
  return rule.all();
};
