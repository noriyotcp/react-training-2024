import './App.css';
import { TodoItem } from './TodoItem';
import { Counter } from './Counter';
import { AddTodoItem } from './AddTodoItem';
import { ChangeEventHandler, useState } from 'react';

export type TodoItemType = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const id = 'abc';
  const random = Math.floor(Math.random() * 2);
  const flag = !random;

  const initialTodoList = [
    { id: 1, task: "Learning Browser", completed: true },
    { id: 2, task: "Learning JavaScript/TypeScript", completed: true },
    { id: 3, task: "Learning React", completed: false },
    { id: 4, task: "Learning Next.js", completed: false },
  ]

  const [todoList, setTodoList] = useState(initialTodoList);

  const addTodoItem = (text: string) => {
    setTodoList([...todoList, {
      id: todoList.length + 1,
      task: text,
      completed: false,
    }]);
  }

  const updateTodoList = (todo: TodoItemType) => {
    const updatedTodoList = todoList.map((t) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    })
    setTodoList(updatedTodoList);
  }

  const removeTodoFromList = (todo: TodoItemType) => {
    const updatedTodoList = todoList.filter((t) => t.id !== todo.id);
    setTodoList(updatedTodoList);
  }


  // select
  const [selected, setSelected] = useState('');
  const handleChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => setSelected(event.currentTarget.value);
  const optionsOnSelect = [
    { label: '全て', value: 'all'},
    { label: '完了', value: 'completed'},
    { label: '未完了', value: 'uncompleted'},
  ]
  return (
    <>
      <ul>
        {todoList.map(todo => (
          <TodoItem todoItem={todo} key={todo.id} onClickCheckBox={updateTodoList} onClickRemoveButton={removeTodoFromList} />
        ))}
      </ul>
      <AddTodoItem onAddButtonClick={addTodoItem} />

      <div className="card">
        <select value={selected} onChange={handleChangeSelect}>
          {optionsOnSelect.map(o => (
            <option value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <h1>これがワイの React やで</h1>
      <div className="card">
        <Counter />
        <Counter />
        <Counter />
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
