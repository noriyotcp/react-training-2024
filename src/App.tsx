import './App.css';
import { useLayoutEffect, useRef, useState } from 'react';
import { TodoList } from './TodoList';
import { randomId } from './generateKey';

export type TodoItemType = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const initialTodoList = [
    { id: randomId(16), task: 'Learning Browser', completed: true },
    {
      id: randomId(16),
      task: 'Learning JavaScript/TypeScript',
      completed: true,
    },
    { id: randomId(16), task: 'Learning React', completed: false },
    { id: randomId(16), task: 'Learning Next.js', completed: false },
  ];

  const [todoList] = useState(initialTodoList);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ref.current?.scrollIntoView();
  }, []);

  return (
    <>
      <ul>
        <TodoList todoList={todoList} />
      </ul>

      <h1>これがワイの React やで</h1>
    </>
  );
}

export default App;
