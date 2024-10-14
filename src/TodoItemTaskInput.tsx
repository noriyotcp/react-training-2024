// TODO: Refactor this component

import { SetStateAction, useRef, useState } from 'react';
import { TodoItemType } from './App';

type Props = {
  addNewTodo: (inputText: TodoItemType['task']) => void;
};

export function TodoItemTaskInput(props: Props) {
  const { addNewTodo } = props;
  const [inputText, setInputText] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleOnSubmit = () => {
    addNewTodo(inputText);
    setInputText('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: { key: string; shiftKey: any }) => {
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
        onChange={toggleButtonState}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleOnSubmit} disabled={isButtonDisabled}>
        追加
      </button>
    </>
  );
}
