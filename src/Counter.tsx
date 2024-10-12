import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((currentValue) => currentValue + 1);
  // }

  const increment = () => {
    setTimeout(() => {
      setCount((currentValue) => currentValue + 1);
    }, 2000);
  }

  const decrement = () => {
    setCount((currentValue) => currentValue - 1);
  }

  return (
    <>
      count is {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
