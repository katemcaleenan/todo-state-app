// Definition of Todo object
export type TodoStateType = {
  id: number;
  text: string;
  completed: boolean;
};

// Definition of Todo state
export type TodoState = {
  todos: TodoStateType[];
};
