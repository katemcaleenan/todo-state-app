import { TodoState } from './todoState';

// Union type for Todo actions
export enum TodoActionTypes {
  addTodo = 'ADD_TODO',
  toggleTodo = 'TOGGLE_TODO',
  removeTodo = 'REMOVE_TODO',
}

export type TodoAction =
  | { type: TodoActionTypes.addTodo; text: string }
  | { type: TodoActionTypes.toggleTodo; id: number }
  | { type: TodoActionTypes.removeTodo; id: number };

// Reducer function for handling Todo actions and updating state
export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.text,
            completed: false,
          },
        ],
      };
    case TodoActionTypes.toggleTodo:
      return {
        todos: state.todos.map((todo: any) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case TodoActionTypes.removeTodo:
      return {
        todos: state.todos.filter((todo: any) => todo.id !== action.id),
      };
    default:
      return state;
  }
};
