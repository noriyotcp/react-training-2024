import { useReducer } from 'react';

const INITIAL_COUNT = 0;

// Action types
type Inc = {
  type: 'Inc';
  step: number;
}

type Dec = {
  type: 'Dec';
  step: number;
}

type Reset = {
  type: 'Reset';
  value: number;
}

type Action = Inc | Dec | Reset;

// Action creators
const inc: (step?: number) => Inc = (step = 1) => ({ type: 'Inc', step });
const dec: (step?: number) => Dec = (step = 1) => ({ type: 'Dec', step });
const reset: (value?: number) => Reset = (value = INITIAL_COUNT) => ({ type: 'Reset', value });

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'Inc':
      return state + action.step;
    case 'Dec':
      return state - action.step;
    case 'Reset':
      return action.value;
  }
}

export function Counter() {
  const [count, dispatch] = useReducer(reducer, INITIAL_COUNT);

  return (
    <>
      count is {count}
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
      <button onClick={() => dispatch(reset(INITIAL_COUNT))}>Reset</button>
    </>
  )
}
