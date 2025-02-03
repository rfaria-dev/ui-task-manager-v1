import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

const Tasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://task-manager-api-cvfg.onrender.com/tasks"
      );
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>
      <div className="last-tasks">
        <h3>Last Tasks</h3>
        <div className="task-list">
          {task
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p key={lastTask.id}>{lastTask.description}</p>
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Completed Tasks</h3>
        <div className="task-list">
          {task
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p key={completedTask.id}>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export { Tasks };
