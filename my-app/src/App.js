import { TaskItem } from "./TaskItem";

function App() {
  return <main>
    <form>
      <input type="text" placeholder="Task Name"/>
      <button>Create task</button>
    </form>
    <ul>
      <li>
        <input checked="true" type="checkbox"/>
        <span>Learn React</span>
      </li>
      <li>
        <input type="checkbox"/>
        <span>Learn Hooks</span>
      </li>
      <li>
        <input type="checkbox"/>
        <span>Learn Components</span>
      </li>
    </ul>
  </main>
}

export default App;
