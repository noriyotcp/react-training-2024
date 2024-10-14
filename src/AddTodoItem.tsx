import { useRef, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  addNewTodo: (inputText: TodoItemType['task']) => void;
};

export function AddTodoItem(props: Props) {
  const { addNewTodo } = props;
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleButtonState = () => {
    if (inputRef.current === null) {
      setIsButtonDisabled(true);
    } else {
      console.log(inputRef.current.value);
      if (inputRef.current.value === '') {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    }
  };

  const handleOnSubmit = () => {
    if (inputRef.current !== null) {
      addNewTodo(inputRef.current.value);
      inputRef.current.value = '';
      inputRef.current.focus();
      setIsButtonDisabled(true);
    }
  };

  const handleKeyDown = (event: { key: string; shiftKey: unknown }) => {
    if (event.key === 'Enter' && event.shiftKey) {
      handleOnSubmit();
    }
  };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={toggleButtonState}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleOnSubmit} disabled={isButtonDisabled}>
        追加
      </button>
    </>
  );
}
