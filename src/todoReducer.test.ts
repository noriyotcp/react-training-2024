import { describe, it, expect } from 'vitest';
import { add, remove, toggleItemState, filterByStatus, reducer } from './todoReducer';

describe('todoReducer', () => {
  const initialState = {
    todoList: [],
    initialTodoList: []
  };

  it('should handle Add action', () => {
    const task = 'New Task';
    const action = add(task);
    const newState = reducer(initialState, action);

    expect(newState.todoList.length).toBe(1);
    expect(newState.todoList[0].task).toBe(task);
    expect(newState.todoList[0].completed).toBe(false);
    expect(newState.initialTodoList[0].task).toBe(task);
    expect(newState.initialTodoList[0].completed).toBe(false);
  });

  it('should handle Remove action', () => {
    const stateWithItem = {
      todoList: [{ id: '1', task: 'Task 1', completed: false }],
      initialTodoList: [{ id: '1', task: 'Task 1', completed: false }]
    };
    const action = remove('1');
    const newState = reducer(stateWithItem, action);

    expect(newState.todoList.length).toBe(0);
    expect(newState.initialTodoList.length).toBe(0);
  });

  it('should handle ToggleItemState action', () => {
    const stateWithItem = {
      todoList: [{ id: '1', task: 'Task 1', completed: false }],
      initialTodoList: [{ id: '1', task: 'Task 1', completed: false }]
    };
    const action = toggleItemState('1', true);
    const newState = reducer(stateWithItem, action);

    expect(newState.todoList[0].completed).toBe(true);
    expect(newState.initialTodoList[0].completed).toBe(true);
  });

  it('should handle FilterByStatus action for completed', () => {
    const stateWithItems = {
      todoList: [],
      initialTodoList: [
        { id: '1', task: 'Task 1', completed: true },
        { id: '2', task: 'Task 2', completed: false }
      ]
    };
    const action = filterByStatus('completed');
    const newState = reducer(stateWithItems, action);

    expect(newState.todoList.length).toBe(1);
    expect(newState.todoList[0].id).toBe('1');
  });

  it('should handle FilterByStatus action for incompleted', () => {
    const stateWithItems = {
      todoList: [],
      initialTodoList: [
        { id: '1', task: 'Task 1', completed: true },
        { id: '2', task: 'Task 2', completed: false }
      ]
    };
    const action = filterByStatus('incompleted');
    const newState = reducer(stateWithItems, action);

    expect(newState.todoList.length).toBe(1);
    expect(newState.todoList[0].id).toBe('2');
  });

  it('should handle FilterByStatus action for all', () => {
    const stateWithItems = {
      todoList: [],
      initialTodoList: [
        { id: '1', task: 'Task 1', completed: true },
        { id: '2', task: 'Task 2', completed: false }
      ]
    };
    const action = filterByStatus('all');
    const newState = reducer(stateWithItems, action);

    expect(newState.todoList.length).toBe(2);
  });
});
