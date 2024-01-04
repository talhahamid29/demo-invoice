// components/Calendar.js
import React, { useState } from "react";
import MiniCalendar from "./MiniCalendar";
import Drawer from "./Drawer";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay, // Add this import statement
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    description: "",
    color: "bg-blue-500", // Default color
  });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderDays = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start, end });

    return days.map((day) => (
      <div
        key={day}
        className={`day-cell border border-gray-300 p-2 ${
          isSameMonth(day, currentMonth) ? "" : "text-gray-500"
        }`}
      >
        <div className="day-number text-lg  font-bold" style={{ padding: 40 }}>
          {format(day, "d")}
        </div>
        <span
          className="rounded"
          style={{
            color: "white",
            backgroundColor: "#e6f7ff",
            textAlign: "center",
            fontSize: 12,
          }}
        >
          <b>{renderEvents(day)} </b>
        </span>
      </div>
    ));
  };

  const renderEvents = (day) => {
    const dayEvents = events.filter(
      (event) =>
        isSameMonth(new Date(event.date), currentMonth) &&
        isSameDay(new Date(event.date), day)
    );

    return (
      <div>
        {dayEvents.map((event) => (
          <div key={event.id} className={`event ${event.color}`}>
            <span className="event-title">{event.title}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.date || !newEvent.title) {
      // Validate that date and title are filled before adding the event
      alert("Date and Title are required.");
      return;
    }

    if (newEvent.id) {
      // If an ID is present, it's an edit operation
      const updatedEvents = events.map((event) =>
        event.id === newEvent.id ? newEvent : event
      );
      setEvents(updatedEvents);
    } else {
      // If no ID is present, it's an add operation
      const newEventWithId = { ...newEvent, id: events.length + 1 };
      setEvents((prevEvents) => [...prevEvents, newEventWithId]);

      // Set the current month to the month of the new event
      setCurrentMonth(new Date(newEvent.date));
    }

    setNewEvent({
      date: "",
      title: "",
      description: "",
      color: "bg-blue-500",
    });
    toggleDrawer();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {/* Mini Calendar on the left */}
      <div className="md:col-span-1 p-4">
        <button
          type="submit"
          onClick={toggleDrawer}
          className="bg-gray-900 text-white px-14 py-2 rounded cursor-pointer"
        >
          Add Event
        </button>
        <br />
        <br />

        <MiniCalendar
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
      </div>

      {/* Large Calendar on the right */}
      <div className="md:col-span-3 flex flex-col mt-16">
        {/* Calendar Header */}
        <div className="bg-white grid grid-cols-7 mt-4 rounded shadow p-4">
          {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold py-2">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>

        {/* Event Section */}
        <div className="flex flex-wrap mt-4 ">{renderEvents(currentMonth)}</div>

        {/* Drawer */}
        {isDrawerOpen && (
          <Drawer onClose={toggleDrawer}>
            <div className="p-4">
              <form onSubmit={handleAddEvent} className="space-y-4">
                {/* Form fields for adding/editing an event */}
                <label>Date:</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, date: e.target.value })
                  }
                  required
                />
                <br />
                <label>Title:</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
                <br />
                <label>Description:</label>
                <input
                  type="text"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      description: e.target.value,
                    })
                  }
                />
                <br />
                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                  {newEvent.id ? "Edit Event" : "Add Event"}
                </button>
              </form>
            </div>
          </Drawer>
        )}
      </div>
    </div>
  );
};

export default Calendar;
