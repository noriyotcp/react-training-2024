import { TodoItemType } from './App';

// Action types
type Add = {
  type: 'Add';
  task: TodoItemType['task'];
};

type Remove = {
  type: 'Remove';
  id: TodoItemType['id'];
};

type ToggleItemState = {
  type: 'ToggleItemState';
  id: TodoItemType['id'];
  completed: TodoItemType['completed'];
};

type FilterByStatus = {
  type: 'FilterByStatus';
  status: 'all' | 'completed' | 'incompleted';
};

export type Action = Add | Remove | ToggleItemState | FilterByStatus;

// Action creators
export const add = (task: TodoItemType['task']): Add => {
  return { type: 'Add', task };
};

export const remove = (id: TodoItemType['id']): Remove => {
  return { type: 'Remove', id };
};

export const toggleItemState = (id: TodoItemType['id'], completed: TodoItemType['completed']): ToggleItemState => {
  return { type: 'ToggleItemState', id, completed };
};

export const filterByStatus = (status: 'all' | 'completed' | 'incompleted'): FilterByStatus => {
  return { type: 'FilterByStatus', status };
};

// Reducer function
export const reducer = (
  state: { todoList: TodoItemType[]; initialTodoList: TodoItemType[] },
  action: Action
) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + 1,
            task: action.task,
            completed: false,
          },
        ],
        initialTodoList: [
          ...state.initialTodoList,
          {
            id: state.initialTodoList.length + 1,
            task: action.task,
            completed: false,
          },
        ],
      };
    case 'Remove':
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
        initialTodoList: state.initialTodoList.filter(
          (t) => t.id !== action.id
        ),
      };
    case 'ToggleItemState':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: action.completed };
          } else {
            return todo;
          }
        }),
        initialTodoList: state.initialTodoList.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: action.completed };
          } else {
            return todo;
          }
        }),
      };
    case 'FilterByStatus':
      switch (action.status) {
        case 'completed':
          return {
            ...state,
            todoList: state.initialTodoList.filter((t) => t.completed === true),
          };
        case 'incompleted':
          return {
            ...state,
            todoList: state.initialTodoList.filter(
              (t) => t.completed === false
            ),
          };
        case 'all':
          return {
            ...state,
            todoList: state.initialTodoList,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
