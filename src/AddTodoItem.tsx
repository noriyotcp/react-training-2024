import { useEffect, useRef, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  addNewTodo: (inputText: TodoItemType['task']) => void;
};

export function AddTodoItem(props: Props) {
  const { addNewTodo } = props;
  const [inputText, setInputText] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled = inputText === '';
    }
  }, [inputText]);

  const handleOnSubmit = () => {
    if (inputRef.current !== null) {
      addNewTodo(inputRef.current.value);
      setInputText('');
      inputRef.current.focus();
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
        value={inputText}
        ref={inputRef}
        onChange={() => setInputText(inputRef.current?.value ?? '')}
        onKeyDown={handleKeyDown}
      ></input>
      <button ref={buttonRef} onClick={handleOnSubmit}>
        追加
      </button>
    </>
  );
}
