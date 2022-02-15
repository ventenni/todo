import React, { useState } from 'react';

import ToDoItemList from './ToDoItemList';

// Redux
import { useDispatch } from 'react-redux';
import { addReminderToList } from './../redux/todoSlice';

const ToDoSection = ({ item, id }) => {
	const [newListItem, setNewListItem] = useState('');
	const dispatch = useDispatch();

	const addNewReminder = (e, id) => {
		e.preventDefault();
		if (newListItem.length > 0) {
			dispatch(addReminderToList({ newListItem, id }));
		}
		setNewListItem('');
	};

	return (
		<div className="todo-section">
			<div className="todo-section__title">
				<div>{item.name}</div>
			</div>

			<div className="todo-section__items">
				{item?.items && (
					<ToDoItemList listId={item.id} items={item.items} />
				)}
			</div>

			<input
				type="text"
				placeholder="Add item..."
				value={newListItem}
				onChange={(e) => {
					setNewListItem(e.target.value);
				}}
			/>

			<button onClick={(e) => addNewReminder(e, id)}>Save</button>
		</div>
	);
};

export default ToDoSection;
