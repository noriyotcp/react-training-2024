import { SetStateAction, useReducer, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  todoList: TodoItemType[];
}

type Add = {
  type: 'Add';
  task: TodoItemType['task'];
};

type Remove = {
  type: 'Remove';
  id: TodoItemType['id'];
};

type ToggleItemState = {
  type: 'ToggleItemState';
  id: TodoItemType['id'];
  completed: TodoItemType['completed'];
}

type Action = Add | Remove | ToggleItemState;

const add = (task: TodoItemType['task']): Action => {
  return { type: 'Add', task };
};

const remove = (id: TodoItemType['id']): Action => {
  return { type: 'Remove', id };
};

const toggleItemState = (id: TodoItemType['id'], completed: TodoItemType['completed']): Action => {
  return { type: 'ToggleItemState', id, completed };
};

const reducer = (todoList: TodoItemType[], action: Action) => {
  switch (action.type) {
    case 'Add':
      return [
        ...todoList,
        {
          id: todoList.length + 1,
          task: action.task,
          completed: false,
        },
      ];
    case 'Remove':
      return todoList.filter((t) => t.id !== action.id);
    case 'ToggleItemState':
      return todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: action.completed };
        } else {
          return todo;
        }
      });
    default:
      return todoList;
  }
}

export function TodoList(props: Props) {
  const { todoList } = props;
  const [todos, dispatch] = useReducer<React.Reducer<TodoItemType[], Action>>(reducer, todoList);
  const [inputText, setInputText] = useState('');
  const [IsButtonDisabled, setIsButtonDisabled] = useState(true);

  const toggleButtonState = (event: {
    currentTarget: { value: SetStateAction<string> };
  }) => {
    setInputText(event.currentTarget.value);

    if (event.currentTarget.value === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const handleKeyDown = (event: { key: string; shiftKey: unknown }) => {
    if (event.key === 'Enter' && event.shiftKey) {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    dispatch(add(inputText));
    setInputText('');
  }

  const optionsOnSelect = [
    { label: '全て', value: 'all' },
    { label: '完了', value: 'completed' },
    { label: '未完了', value: 'incompleted' },
  ];

  return (
    <>
      {todos.map((todo) => (
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
      <input
        type="text"
        value={inputText}
        onChange={toggleButtonState}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={addNewTodo} disabled={IsButtonDisabled}>
        追加
      </button>

      <div className="card">
        <select>
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
