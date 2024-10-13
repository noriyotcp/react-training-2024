import { TodoItemType } from './App';

type Props = {
  todoList: TodoItemType[];
}

export function TodoList(props: Props) {
  const { todoList } = props;

  return (
    todoList.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" checked={todo.completed} />{todo.task}
        <button>削除</button>
      </li>
    ))
  )
}
