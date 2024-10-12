import { SetStateAction, useState } from "react";

type Props = {
  onAddButtonClick: (text: string) => void;
}

export function AddTodoItem(props: Props) {
  const { onAddButtonClick } = props;
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [inputText, setInputText] = useState('');

  const toggleButtonState = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setInputText(event.currentTarget.value);

    if (event.currentTarget.value === '') {
      setButtonIsDisabled(true);
    } else {
      setButtonIsDisabled(false);
    }
  }

  const handleOnSubmit = () => {
    onAddButtonClick(inputText);
    setInputText('');
  }

  const handleOnKeyDown = (event: { key: string; shiftKey: any; }) => {
    if (event.key === 'Enter' && event.shiftKey) {
      handleOnSubmit();
    }
  }

  return (
    <>
      <input type="text" value={inputText} onChange={toggleButtonState} onKeyDown={handleOnKeyDown}></input>
      <button onClick={handleOnSubmit} disabled={buttonIsDisabled}>追加</button>
    </>
  )
}
