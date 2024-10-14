// TODO: Refactor this component

import { SetStateAction, useRef, useState } from 'react';

type Props = {
  // onAddButtonClick: () => void;
};

export function TodoItemTaskInput(props: Props) {
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
    onAddButtonClick();
    setInputText('');
  };

  const handleKeyDown = (event: { key: string; shiftKey: any }) => {
    if (event.key === 'Enter' && event.shiftKey) {
      handleOnSubmit();
    }
  };

  const addNewTodo = () => {
    // dispatch(add(inputText));
    setInputText('placeholder');
    console.log(inputRef.current);
    inputRef.current?.focus();
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
      <button onClick={addNewTodo} disabled={isButtonDisabled}>
        追加
      </button>
    </>
  );
}
