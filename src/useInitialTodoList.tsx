// src/useTodoList.ts
import { useState, useLayoutEffect, useRef } from 'react';
import { randomId } from './generateKey';
import { TodoItemType } from './App';

export function useInitialTodoList() {
  const initialTodoList: TodoItemType[] = [
    { id: randomId(16), task: 'Learning Browser', completed: true },
    {
      id: randomId(16),
      task: 'Learning JavaScript/TypeScript',
      completed: true,
    },
    { id: randomId(16), task: 'Learning React', completed: false },
    { id: randomId(16), task: 'Learning Next.js', completed: false },
  ];

  const [todoList] = useState(initialTodoList);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: 'smooth',
      });
    }
  }, []);

  return { todoList, ref };
}
