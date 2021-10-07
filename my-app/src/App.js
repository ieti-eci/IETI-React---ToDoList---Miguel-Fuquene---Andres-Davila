import { TaskItem } from "./TaskItem";
import { userState } from "react";

function App() {
  const [tasks,setTasks] = userState([
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
  const handleTaskChange =(index) => () => {
    console.log("changed!"+ index);
    const arr = [...tasks];
    arr[index].isCompleted=!arr[index].isCompleted;
    setTasks(arr);
  };
  return (
  <main>
    <form>
      <input type="text" placeholder="Task Name"/>
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
