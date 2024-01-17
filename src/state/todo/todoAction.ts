import { Dispatch } from 'react';
import { TodoActionTypes, TodoAction } from './todoReducer';

export const addTodoAction = async (
  dispatch: Dispatch<TodoAction>,
  newTodo: string
) => {
  try {
    dispatch({ type: TodoActionTypes.addTodo, text: newTodo });
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.log('error');
  }
};

export const toggleTodoAction = async (
  dispatch: Dispatch<TodoAction>,
  id: number
) => {
  try {
    dispatch({ type: TodoActionTypes.toggleTodo, id: id });
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.log('error');
  }
};

export const removeTodoAction = async (
  dispatch: Dispatch<TodoAction>,
  id: number
) => {
  try {
    dispatch({ type: TodoActionTypes.removeTodo, id: id });
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.log('error');
  }
};
