import { TaskItem } from "./TaskItem";
import { useState } from "react";

function App() {
  const [tasks,setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Hooks",
    },
    {
      isCompleted: true,
      name: "Keep on Keeping on",
    }
  ]);
  const [textValue,setTextValue]= useState("");

  const handleTaskChange =(index) => () => {
    console.log("changed!"+ index);
    const arr = [...tasks];
    arr[index].isCompleted=!arr[index].isCompleted;
    setTasks(arr);
  };

  const newTask = (name) =>{
    const newTask = {
      isCompleted:false,
      name: name,
    };
    setTasks([...tasks, newTask]);
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    console.log(textValue);
    newTask(textValue);
  };

  const handleTextChange = (event) =>{
    const value= event.target.value;
    setTextValue(value);
  }

  return (
  <main>
    <form onSubmit={handleSubmit}>
      <input 
        value={textValue} 
        onChange={handleTextChange} 
        type="text" 
        placeholder="Task Name"
      />
      <button>Create task</button>
    </form>
    <ul>
      {tasks.map((task,index) => {
        return (
          <TaskItem 
            isChecked={task.isCompleted} 
            taskName={task.name}
            onTaskChange={handleTaskChange(index)}
          />
        );
      })}
    </ul>
  </main>
  );
}

export default App;
