import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const id = 'abc';
  const random = Math.floor(Math.random() * 2);
  const flag = !random;
  const undefinedConst = 'undefined';
  const nullConst = 'null';
  const objConst = { hoge: 'hoge', fuga: 1 };
  const funcConst = () => 'This is the return value';
  const arrayConst = [1, 2, 3];

  return (
    <>
      <ul>
        <li>
          <span>undefined</span>:<span>{undefinedConst}</span>
        </li>
        <li>
          <span>null</span>:<span>{nullConst}</span>
        </li>
        <li>
          <span>obj.hoge</span>:<span>{objConst.hoge}</span>
        </li>
        <li>
          <span>obj.fuga</span>:<span>{objConst.fuga}</span>
        </li>
        <li>
          <span>func</span>:<span>{funcConst()}</span>
        </li>
        <li>
          <span>array</span>:<span>{arrayConst}</span>
        </li>
      </ul>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>これがワイの React やで</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div id={id + 'def'}>
        <div>
          {flag ? <span>Foo! {random}</span> : <span>Bar! {random}</span>}
        </div>
      </div>
    </>
  );
}

export default App;
