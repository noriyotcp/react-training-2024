import React from "react";
import { type TodoItemType } from "./App";

type Props = {
  todoItem: TodoItemType;
  onClickCheckBox: (todo: any) => void;
};

export function TodoItem(props: Props) {
  const { id, task, completed } = props.todoItem;
  const onClickCheckBox = props.onClickCheckBox;
  const onDeleteButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (_event) => {
    console.log(`Task is deleted!`);
  }

  const handleOnChange = (event: { currentTarget: { checked: any; }; }) => {
    onClickCheckBox({
      id,
      task,
      completed: event.currentTarget.checked,
    })
  }

  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={handleOnChange} />{task}
      <button onClick={onDeleteButton}>削除</button>
    </li>
  )
}
