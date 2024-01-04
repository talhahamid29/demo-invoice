// components/MiniCalendar.js
import React from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";

const MiniCalendar = ({ currentMonth, setCurrentMonth }) => {
  const formattedMonth = format(currentMonth, "MMMM yyyy");

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 shadow-md mb-4">
      <div className="flex justify-between mb-2">
        <button
          className="text-whit px-4 py-2 rounded cursor-pointer"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          {"<"}
        </button>
        <div className="font-bold text-white">{formattedMonth}</div>
        <button
          className="text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          {">"}
        </button>
      </div>
      {/* Mini-calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`day-cell text-center p-2 ${
              isSameMonth(day, currentMonth) ? "" : "text-gray-500"
            } ${isToday(day) ? "bg-blue-200" : ""}`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
