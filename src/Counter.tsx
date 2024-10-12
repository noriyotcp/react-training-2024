import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  // const increment = () => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 2000);
  // }

  return (
    <>
      count is {count}
      <button onClick={increment}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
