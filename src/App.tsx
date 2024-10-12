import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

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

  return (
    <>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}><input type="checkbox" checked={todo.completed} readOnly />{todo.task}</li> // Added key prop
        ))}
      </ul>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>これがワイの React やで</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
