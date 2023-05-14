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
      title: "New Year's Day",
      date: new Date(currentDate.getFullYear(), 0, 1),
    },
    {
      title: "Fishing Tourney",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14), // Example date, modify as needed
    },
    {
      title: "Bug-Off",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 21), // Example date, modify as needed
    },
    {
      title: "Flea Market",
      date: new Date(currentDate.getFullYear(), 1, 1), // First Sunday of February
    },
    {
      title: "Valentine's Day",
      date: new Date(currentDate.getFullYear(), 1, 14),
    },
    {
      title: "Festivale",
      date: new Date(currentDate.getFullYear(), 1, 28), // Example date, modify as needed
    },
    {
      title: "Shamrock Day",
      date: new Date(currentDate.getFullYear(), 2, 17),
    },
    {
      title: "Bunny Day",
      date: new Date(currentDate.getFullYear(), 3, 12), // Example date, modify as needed
    },
    {
      title: "Nature Day",
      date: new Date(currentDate.getFullYear(), 3, 22),
    },
    {
      title: "Weeding Day",
      date: new Date(currentDate.getFullYear(), 3, 29),
    },
    {
      title: "May Day",
      date: new Date(currentDate.getFullYear(), 4, 1),
    },
    {
      title: "Mother's Day",
      date: new Date(currentDate.getFullYear(), 4, 9), // Second Sunday of May
    },
    {
      title: "International Museum Day",
      date: new Date(currentDate.getFullYear(), 4, 18),
    },
    {
      title: "Father's Day",
      date: new Date(currentDate.getFullYear(), 5, 16), // Third Sunday of June
    },
    {
      title: "Summer Solstice",
      date: new Date(currentDate.getFullYear(), 5, 21), // Example date, modify as needed
    },
    {
      title: "Fireworks Show",
      date: new Date(currentDate.getFullYear(), 7, 1), // Example date, modify as needed
    },
    {
      title: "Halloween",
      date: new Date(currentDate.getFullYear(), 9, 31),
    },
    {
      title: "Harvest Festival",
      date: new Date(currentDate.getFullYear(), 10, 25), // Fourth Thursday of November
    },
    {
      title: "Toy Day",
      date: new Date(currentDate.getFullYear(), 11, 24),
    },
    {
      title: "Winter Solstice",
      date: new Date(currentDate.getFullYear(), 11, 21), // Example date, modify as needed
    },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const placeholderDays = new Array(monthStart.getDay()).fill(null);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">
        In-Game Events for the Month Of:
      </h3>
      <h4 className="text-xl font-medium mb-4">
        {format(currentDate, "MMMM yyyy")}
      </h4>
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-medium text-sm mb-2">
            {day}
          </div>
        ))}
        {placeholderDays.map((_, index) => (
          <div key={index} className="p-2"></div>
        ))}
        {daysOfMonth.map((day, index) => (
          <div
            key={index}
            className={`${
              !isSameMonth(day, currentDate) ? "text-gray-400" : "text-black"
            } ${isToday(day) ? "bg-green-200" : ""} p-2 rounded-lg text-center`}
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
