import { useRef } from 'react';
import { TodoItemType } from './App';

type Props = {
  addNewTodo: (inputText: TodoItemType['task']) => void;
};

export function AddTodoItem(props: Props) {
  const { addNewTodo } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const addTodoItem = () => {
    if (inputRef.current !== null) {
      addNewTodo(inputRef.current.value);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  const handleChange = () => {
    if (inputRef.current !== null && buttonRef.current !== null) {
      buttonRef.current.disabled = inputRef.current.value === '';
    }
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem();
    handleChange();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          defaultValue=""
          ref={inputRef}
          onChange={handleChange}
        ></input>
        <button ref={buttonRef} disabled>
          追加
        </button>
      </form>
    </>
  );
}
