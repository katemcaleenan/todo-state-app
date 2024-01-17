// TodoList.tsx

import React, { useContext, useState } from 'react';
import { TodoContext } from './state/TodoContext';
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
} from './state/todo/todoAction';

const TodoList: React.FC = () => {
  // Fetching state and dispatch from the TodoContext using custom hook useTodo
  const { state, dispatch } = useContext(TodoContext);
  // Local state for handling new todo input
  const [newTodo, setNewTodo] = useState('');

  // Handler function for adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodoAction(dispatch, newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* Mapping through todos in state and rendering them */}
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              // Dispatching action to toggle the completion status of a todo
              onChange={() => toggleTodoAction(dispatch, todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            {/* Dispatching action to remove a todo */}
            <button onClick={() => removeTodoAction(dispatch, todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        {/* Input field for entering new todo text */}
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {/* Button to trigger the addition of a new todo */}
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
