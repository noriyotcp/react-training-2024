import { useLayoutEffect, useRef } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { useInitialTodoList } from './useInitialTodoList';

export type TodoItemType = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const {todoList} = useInitialTodoList();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <ul>
        <TodoList todoList={todoList} />
      </ul>

      <h1 ref={ref}>これがワイの React やで</h1>
    </>
  );
}

export default App;
