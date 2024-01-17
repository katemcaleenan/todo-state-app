// TodoList.tsx

import React, { useContext, useState } from 'react';
import { TodoContext } from './state/TodoContext';
import {
	addTodoAction,
	removeTodoAction,
	toggleTodoAction,
} from './state/todo/todoAction';

const TodoList: React.FC = () => {
	const { state, dispatch } = useContext(TodoContext);
	const [newTodo, setNewTodo] = useState('');

	const handleAddTodo = () => {
		if (newTodo.trim() !== '') {
			addTodoAction(dispatch, newTodo);
			setNewTodo('');
		}
	};

	return (
		<div style={{ maxWidth: '400px', margin: 'auto' }}>
			<h2 style={{ textAlign: 'center', color: '#333' }}>Todo List</h2>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				{state.todos.map((todo) => (
					<li
						key={todo.id}
						style={{
							marginBottom: '8px',
							padding: '8px',
							background: '#f0f0f0',
							borderRadius: '4px',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodoAction(dispatch, todo.id)}
							style={{ marginRight: '8px' }}
						/>
						<span
							style={{
								textDecoration: todo.completed ? 'line-through' : 'none',
								flex: '1',
							}}
						>
							{todo.text}
						</span>
						<button
							onClick={() => removeTodoAction(dispatch, todo.id)}
							style={{
								marginLeft: '8px',
								padding: '4px 8px',
								background: '#ff6666',
								color: '#fff',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
			<div style={{ marginTop: '16px', textAlign: 'center' }}>
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					style={{ padding: '8px', marginRight: '8px', borderRadius: '4px' }}
				/>
				<button
					onClick={handleAddTodo}
					style={{
						padding: '8px',
						background: '#66cc66',
						color: '#fff',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Add Todo
				</button>
			</div>
		</div>
	);
};

export default TodoList;
