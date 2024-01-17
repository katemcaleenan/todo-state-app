// App.tsx
import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './state/TodoContext';

const App: React.FC = () => {
	return (
		<TodoProvider>
			<TodoList />
		</TodoProvider>
	);
};

export default App;
