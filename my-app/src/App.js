import { TaskItem } from "./TaskItem";

function App() {
  return <main>
    <form>
      <input type="text" placeholder="Task Name"/>
      <button>Create task</button>
    </form>
    <ul>
      <TaskItem isChecked={true} taskName="Learn React"/>
      <TaskItem isChecked={false} taskName="Learn Hooks"/>
      <TaskItem isChecked={true} taskName="Keep on Keeping on"/>
    </ul>
  </main>
}

export default App;
