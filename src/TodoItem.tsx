import React from 'react';
import { TodoItemType } from './App';
import { remove, toggleItemState, Action } from './todoReducer';

type Props = {
  todo: TodoItemType;
  dispatch: React.Dispatch<Action>;
};

export function TodoItem({ todo, dispatch }: Props) {
  const handleToggle = () => {
    dispatch(toggleItemState(todo.id, !todo.completed));
  };

  const handleRemove = () => {
    dispatch(remove(todo.id));
  };

  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.task}
      <button onClick={handleRemove}>削除</button>
    </li>
  );
}
