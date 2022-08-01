import { useState } from "react";
import axios from "axios";

export default function Events() {
  const [eventName, setEventName] = useState("");
  const [eventBody, setEventBody] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const submitEvent = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        eventName: eventName,
        eventBody: eventBody,
        eventDate: eventDate,
        eventTime: eventTime,
      })
      .then(() => {
        alert("successful insert");
      });
  };

  return (
    <div className="section">
      <h1 className="section-header">Events</h1>
      <form>
        <label className="event-name">Event Title</label>
        <input
          type="text"
          name="event-name"
          onChange={(e) => {
            setEventName(e.target.value);
          }}
        ></input>
        <label className="event-body">Event Body</label>
        <textarea
          type="text"
          name="event-body"
          onChange={(e) => {
            setEventBody(e.target.value);
          }}
        ></textarea>
        <label className="event-date">Event Date</label>
        <input
          type="text"
          name="event-date"
          onChange={(e) => {
            setEventDate(e.target.value);
          }}
        ></input>
        <label className="event-time">Event Time</label>
        <input
          type="text"
          name="event-time"
          onChange={(e) => {
            setEventTime(e.target.value);
          }}
        ></input>
        <button onClick={submitEvent}>Submit</button>
      </form>
    </div>
  );
}
