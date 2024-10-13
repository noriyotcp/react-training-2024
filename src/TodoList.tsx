import { SetStateAction, useReducer, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  todoList: TodoItemType[];
}

type Add = {
  type: 'Add';
  task: string;
};

type Action = Add;

const add = (task: string): Action => {
  return { type: 'Add', task };
}

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

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          {todo.task}
          <button>削除</button>
        </li>
      ))}

      {/* Add button and input field */}
      <input type="text" value={inputText} onChange={toggleButtonState} onKeyDown={handleKeyDown}></input>
      <button
        onClick={addNewTodo}
        disabled={IsButtonDisabled}
      >
        追加
      </button>
    </>
  );
}
