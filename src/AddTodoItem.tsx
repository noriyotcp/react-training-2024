import { useState } from "react";

export function AddTodoItem(props) {
  const { onAddButtonClick } = props;
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [inputText, setInputText] = useState('');
  
  const toggleButtonState = (event) => {
    setInputText(event.currentTarget.value);

    if (event.currentTarget.value === '') {
      setButtonIsDisabled(true);
    } else {
      setButtonIsDisabled(false);
    }
  }

  const handleOnClick = () => {
    onAddButtonClick(inputText);
    setInputText('');
  }

  return (
    <>
      <input type="text" value={inputText} onChange={toggleButtonState}></input>
      <button onClick={handleOnClick} disabled={buttonIsDisabled}>追加</button>
    </>
  )
}
