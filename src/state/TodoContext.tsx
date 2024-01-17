import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';
import { todoReducer, TodoAction } from './todo/todoReducer';
import { TodoState } from './todo/todoState';

// Initial state for Todo
export const initialState: TodoState = {
  todos: [],
};

// Creation of context for Todo state and dispatch
const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// TodoProvider component to provide TodoContext to the application
const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Without using Localstorage or DB - The state in your application is held in-memory and gets reset when the page is reloaded.
  // To persist the state across page reloads, you can make use of browser storage like localStorage.
  // Retrieving stored state from localStorage or using initial state
  const storedState = localStorage.getItem('todos');

  const [state, dispatch] = useReducer(
    todoReducer,
    storedState ? JSON.parse(storedState) : initialState
  );

  // Effect to persist state changes to localStorage so list isnt cleared
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

// Exporting TodoProvider and TodoContext for use in the application
export { TodoContext, TodoProvider };
