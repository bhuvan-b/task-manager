import React from "react";
import { useState } from "react";

const Addtask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Add Text");
      return;
    }

    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label> Day </label>
          <input
            type="text"
            placeholder="Add Date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
      </form>
    </div>
  );
};

export default Addtask;
