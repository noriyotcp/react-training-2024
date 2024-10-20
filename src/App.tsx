import './App.css';
import { TodoList } from './TodoList';
import { useInitialTodoList } from './useInitialTodoList';

export type TodoItemType = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const {todoList, ref} = useInitialTodoList();

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
