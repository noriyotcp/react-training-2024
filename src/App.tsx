import './App.css';
import { useLayoutEffect, useRef, useState } from 'react';
import { TodoList } from './TodoList';

export type TodoItemType = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const initialTodoList = [
    { id: 1, task: 'Learning Browser', completed: true },
    { id: 2, task: 'Learning JavaScript/TypeScript', completed: true },
    { id: 3, task: 'Learning React', completed: false },
    { id: 4, task: 'Learning Next.js', completed: false },
  ]

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
