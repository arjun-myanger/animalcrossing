// components/EventCalendar.tsx
import React from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameMonth,
  isToday,
} from "date-fns";

const EventCalendar: React.FC = () => {
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysOfMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const inGameEvents = [
    {
      title: "Event 1",
      date: new Date(),
    },
    {
      title: "Event 2",
      date: new Date(),
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">
        In-Game Events for the Month Of:
      </h3>
      <h4 className="text-xl font-medium mb-4">
        {format(currentDate, "MMMM yyyy")}
      </h4>
      <div className="grid grid-cols-7 gap-4">
        {daysOfMonth.map((day, index) => (
          <div
            key={index}
            className={`${
              !isSameMonth(day, currentDate) ? "text-gray-400" : "text-black"
            } ${isToday(day) ? "bg-green-200" : ""} p-2 rounded-lg`}
          >
            <div className="font-bold">{format(day, "d")}</div>
            {inGameEvents
              .filter(
                (event) =>
                  format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
              )
              .map((event, eventIndex) => (
                <div key={eventIndex} className="text-sm">
                  {event.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
