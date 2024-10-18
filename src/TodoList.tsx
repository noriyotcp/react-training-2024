// TODO: Refactor this component

import { memo, useReducer } from 'react';
import { TodoItemType } from './App';
import {
  reducer as todoReducer,
  add,
  filterByStatus,
} from './todoReducer';
import { AddTodoItem } from './AddTodoItem';
import { TodoItem } from './TodoItem';
const MemoisedAddTodoItem = memo(AddTodoItem);

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
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}

      {/* Add button and input field */}
      <MemoisedAddTodoItem addNewTodo={addNewTodo} />

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
