import { SetStateAction, useReducer, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  todoList: TodoItemType[];
};

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
};

type FilterByStatus = {
  type: 'FilterByStatus';
  status: 'all' | 'completed' | 'incompleted';
};

type Action = Add | Remove | ToggleItemState | FilterByStatus;

const add = (task: TodoItemType['task']): Action => {
  return { type: 'Add', task };
};

const remove = (id: TodoItemType['id']): Action => {
  return { type: 'Remove', id };
};

const toggleItemState = (
  id: TodoItemType['id'],
  completed: TodoItemType['completed']
): Action => {
  return { type: 'ToggleItemState', id, completed };
};

const filterByStatus = (
  status: 'all' | 'completed' | 'incompleted'
): Action => {
  return { type: 'FilterByStatus', status };
};

const reducer = (
  state: { todoList: TodoItemType[]; initialTodoList: TodoItemType[] },
  action: Action
) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            task: action.task,
            completed: false,
          },
        ],
        initialTodoList: [
          ...state.initialTodoList,
          {
            id: state.initialTodoList.length + 1,
            task: action.task,
            completed: false,
          },
        ],
      };
    case 'Remove':
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
        initialTodoList: state.initialTodoList.filter(
          (t) => t.id !== action.id
        ),
      };
    case 'ToggleItemState':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: action.completed };
          } else {
            return todo;
          }
        }),
        initialTodoList: state.initialTodoList.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: action.completed };
          } else {
            return todo;
          }
        }),
      };
    case 'FilterByStatus':
      switch (action.status) {
        case 'completed':
          return {
            ...state,
            todoList: state.initialTodoList.filter((t) => t.completed === true),
          };
        case 'incompleted':
          return {
            ...state,
            todoList: state.initialTodoList.filter(
              (t) => t.completed === false
            ),
          };
        case 'all':
          return {
            ...state,
            todoList: state.initialTodoList,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export function TodoList(props: Props) {
  const { todoList } = props;
  const [state, dispatch] = useReducer(reducer, {
    todoList,
    initialTodoList: todoList,
  });
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
  };

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
