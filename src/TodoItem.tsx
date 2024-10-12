import { type TodoItemType } from "./App";

type Props = {
  todoItem: TodoItemType;
};

export function TodoItem(props: Props) {
  const { id, task, completed } = props.todoItem;

  return (
    <li key={id}><input type="checkbox" checked={completed} readOnly />{task}</li> // Added key prop
  )
}
