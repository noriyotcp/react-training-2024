import './App.css';
import { Counter } from './Counter';
import { useState } from 'react';
import { TodoList } from './TodoList';

export type TodoItemType = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const id = 'abc';
  const random = Math.floor(Math.random() * 2);
  const flag = !random;

  const initialTodoList = [
    { id: 1, task: 'Learning Browser', completed: true },
    { id: 2, task: 'Learning JavaScript/TypeScript', completed: true },
    { id: 3, task: 'Learning React', completed: false },
    { id: 4, task: 'Learning Next.js', completed: false },
  ]

  const [todoList] = useState(initialTodoList);

  return (
    <>
      <ul>
        <TodoList todoList={todoList} />
      </ul>

      <h1>これがワイの React やで</h1>
      <div className="card">
        <Counter />
        <Counter />
        <Counter />
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
