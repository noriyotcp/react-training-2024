// TODO: Refactor this component

import { useReducer } from 'react';
import { TodoItemType } from './App';
import { TodoItemTaskInput } from './TodoItemTaskInput';
import {
  reducer as todoReducer,
  add,
  remove,
  toggleItemState,
  filterByStatus,
} from './todoReducer';

type Props = {
  todoList: TodoItemType[];
};

export function TodoList(props: Props) {
  const { todoList } = props;
  const [state, dispatch] = useReducer(todoReducer, {
    todoList,
    initialTodoList: todoList,
  });

  const optionsOnSelect = [
    { label: '全て', value: 'all' },
    { label: '完了', value: 'completed' },
    { label: '未完了', value: 'incompleted' },
  ];

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      filterByStatus(
        event.currentTarget.value as 'all' | 'completed' | 'incompleted'
      )
    );
  };

  const addNewTodo = (inputText: string) => {
    dispatch(add(inputText));
  };

  return (
    <>
      {state.todoList.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleItemState(todo.id, !todo.completed))}
          />
          {todo.task}
          <button onClick={() => dispatch(remove(todo.id))}>削除</button>
        </li>
      ))}

      {/* Add button and input field */}
      <TodoItemTaskInput addNewTodo={addNewTodo} />

      <div className="card">
        <select onChange={handleChangeSelect}>
          {optionsOnSelect.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
