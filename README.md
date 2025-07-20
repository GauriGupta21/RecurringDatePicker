# 📅 Recurring Date Picker

A beautiful and dynamic **Recurring Date Picker** built with **React**, **TailwindCSS**, and **Framer Motion** that allows users to schedule repeated events with flexible patterns (Daily, Weekly, Monthly, Yearly). Perfect for calendar-based apps or reminders.

---

##  Features

-  **Recurring Patterns** — Daily / Weekly / Monthly / Yearly
-  **Start & End Date Selection**
-  **Interval Support** (e.g., every 2 weeks)
-  **Smooth UI Animations** using `framer-motion`
-  Styled with `tailwindcss`
-  Unit & Integration Tested
-  Live Preview of Recurring Dates

---

##  Tech Stack

-  React
-  Tailwind CSS
-  Framer Motion
-  Jest + React Testing Library
-  Vite

---

##  Demo & Links

-  **Live Preview (CodeSandbox):** [Click to Open](https://codesandbox.io/p/devbox/recurringdatepicker-3glqk5)
-  **GitHub Repository:** [RecurringDatePicker](https://github.com/GauriGupta21/RecurringDatePicker)

---

##  Testing Summary

###  Unit Tests
- `generateRecurringDates` function tested with multiple frequencies and intervals.

###  Integration Tests
- Full component testing for:
  - Selecting frequency
  - Date input
  - Live preview generation

 Test Files:
 src/test/generateRecurringDates.test.js
 src/components/RecurringDatePicker.test.jsx

## 🔧 Getting Started

```bash
# Clone the repo
git clone https://github.com/GauriGupta21/RecurringDatePicker.git

# Go into project directory
cd RecurringDatePicker

# Install dependencies
npm install

# Start development server
npm run dev


src/
├── components/
│   ├── RecurringDatePicker.jsx
│   ├── DateRangePicker.jsx
│   ├── FrequencySelector.jsx
│   ├── WeeklyOptions.jsx
│   ├── MonthlyOptions.jsx
│   └── YearlyOptions.jsx
├── store/
│   └── useRecurringStore.js
├── utils/
│   ├── generateRecurringDates.js
│   └── getPatternSummary.js
└── test/
    ├── generateRecurringDates.test.js
    └── recurringStore.test.js

```

### Author:
Gauri Gupta
GitHub: @GauriGupta21

### License
This project is licensed under the MIT License.

Additional references:
* [Getting started with Vite](https://vitejs.dev/guide/)
* [Tailwind documentation](https://tailwindcss.com/docs/installation)

