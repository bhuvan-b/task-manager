import React from "react";
import Task from "./task";

const Tasks = ({ tasks, deletetask, remChange }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deletetask}
          remChange={remChange}
        />
      ))}
    </>
  );
};

export default Tasks;
