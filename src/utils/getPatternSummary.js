export const getPatternSummary = ({
  frequency,
  interval,
  weekdays,
  monthlyPattern,
  yearlyPattern,
}) => {
  switch (frequency) {
    case "daily":
      return `Every ${interval} day${interval > 1 ? "s" : ""}`;

    case "weekly":
      if (!weekdays || weekdays.length === 0)
        return `Every ${interval} week(s)`;
      return `Every ${interval} week${
        interval > 1 ? "s" : ""
      } on ${weekdays.join(", ")}`;

    case "monthly":
      if (monthlyPattern?.ordinal && monthlyPattern?.weekday) {
        return `The ${monthlyPattern.ordinal} ${
          monthlyPattern.weekday
        } of every ${interval} month${interval > 1 ? "s" : ""}`;
      }
      return `Every ${interval} month${interval > 1 ? "s" : ""}`;

    case "yearly":
      if (yearlyPattern?.month && yearlyPattern?.day) {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const month = parseInt(yearlyPattern.month);
        return `Every year on ${monthNames[month]} ${yearlyPattern.day}`;
      }
      return `Every ${interval} year${interval > 1 ? "s" : ""}`;

    default:
      return "";
  }
};
