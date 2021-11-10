import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleAdd = () => {
    setshowAddTask(!showAddTask);
  };

  const addTask = (e) => {
    console.log(e);
    const id = Math.round(Math.random() * 1000) + 1;
    const newtask = { id, ...e };

    setTasks([...tasks, newtask]);
  };

  const deleteTask = (id) => {
    console.log("delete", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remChange = (id) => {
    // console.log("change", id);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, rem: "false", reminder: !task.reminder }
          : task
      )
    );
  };

  return (
    <div className="container">
      <Header toggleAdd={toggleAdd} showAdd={showAddTask} />
      {showAddTask && <Addtask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deletetask={deleteTask} remChange={remChange} />
      ) : (
        "You do not have any pending tasks"
      )}

      <Footer />
    </div>
  );
};

export default App;
