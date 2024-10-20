// src/useTodoList.ts
import { useState, useLayoutEffect, useRef } from 'react';
import { randomId } from './generateKey';
import { TodoItemType } from './App';

// Helper function to generate a random task
const getTasks = () => {
  return [
    'Learning React',
    'Learning TypeScript',
    'Learning JavaScript',
    'Learning Next.js',
    'Learning Node.js',
    'Learning CSS',
    'Learning HTML',
    'Learning Redux',
    'Learning GraphQL',
    'Learning Docker',
    'Learning Kubernetes',
    'Learning AWS',
    'Learning Azure',
    'Learning GCP',
    'Learning Python',
    'Learning Django',
    'Learning Flask',
    'Learning Java',
    'Learning Spring',
    'Learning Hibernate',
    'Learning C#',
    'Learning .NET',
    'Learning Ruby',
    'Learning Rails',
    'Learning PHP',
    'Learning Laravel',
    'Learning Go',
    'Learning Rust',
    'Learning Swift',
    'Learning Kotlin',
    'Learning Android',
    'Learning iOS',
    'Learning Flutter',
    'Learning Dart',
    'Learning Vue.js',
    'Learning Angular',
    'Learning Svelte',
    'Learning Tailwind CSS',
    'Learning Bootstrap',
  ];
};

// Helper function to generate a random completion status
const generateRandomCompleted = () => Math.random() < 0.5;

export function useInitialTodoList() {
  const initialTodoList: TodoItemType[] = getTasks().map((task) => {
    return {
      id: randomId(16),
      task,
      completed: generateRandomCompleted(),
    }
  });

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
