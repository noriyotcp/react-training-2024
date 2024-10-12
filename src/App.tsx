import { useState } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

export type TodoItemType = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const [count, setCount] = useState(0);
  const id = 'abc';
  const random = Math.floor(Math.random() * 2);
  const flag = !random;

  const todoList = [
    { id: 1, task: "Learning Browser", completed: true },
    { id: 2, task: "Learning JavaScript/TypeScript", completed: true },
    { id: 3, task: "Learning React", completed: false },
    { id: 4, task: "Learning Next.js", completed: false },
  ]

  const increment = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }

  return (
    <>
      <ul>
        {todoList.map(todo => (
          <TodoItem todoItem={todo} key={todo.id} />
        ))}
      </ul>
      <h1>これがワイの React やで</h1>
      <div className="card">
        count is {count}
        <button onClick={increment}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div id={id + 'def'}>
        <div>
          {flag ? <span>Foo! {random}</span> : <span>Bar! {random}</span>}
        </div>
      </div>
    </>
  );
}

export default App;
