import { renderHook } from '@testing-library/react';
import { useInitialTodoList } from './useInitialTodoList';
import { TodoItemType } from './App';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the randomId function
vi.mock('./generateKey', () => ({
  randomId: vi.fn(() => 'mocked-random-id'),
}));

describe('useInitialTodoList', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('should initialize todoList with tasks', () => {
    const { result } = renderHook(() => useInitialTodoList());
    const { todoList } = result.current;

    expect(todoList).toBeInstanceOf(Array);
    expect(todoList.length).toBe(39);
    todoList.forEach((item: TodoItemType) => {
      expect(item).toHaveProperty('id', 'mocked-random-id');
      expect(item).toHaveProperty('task');
      expect(item).toHaveProperty('completed');
    });
  });
});
