import React from "react";
import { type TodoItemType } from "./App";

type Props = {
  todoItem: TodoItemType;
};

export function TodoItem(props: Props) {
  const { id, task, completed } = props.todoItem;
  const onDeleteButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (_event) => {
    console.log(`Task is deleted!`);
  }

  return (
    <li key={id}>
      <input type="checkbox" checked={completed} readOnly />{task}
      <button onClick={onDeleteButton}>削除</button>
    </li>
  )
}
