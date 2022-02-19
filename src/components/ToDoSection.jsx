import React, { useState } from 'react';

import ToDoItemList from './ToDoItemList';

// Reactstrap
import { Collapse } from 'reactstrap';

// Redux
import { useDispatch } from 'react-redux';
import { addReminderToList } from './../redux/todoSlice';

const ToDoSection = ({ item, id }) => {
	const [newListItem, setNewListItem] = useState('');
	const [isOpen, setIsOpen] = useState(false);
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
			<div
				className="todo-section__title"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div>
					<p>{item.name}</p>
				</div>

				<div className="todo-section__title__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-caret-down-fill"
						viewBox="0 0 16 16"
					>
						<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
					</svg>
				</div>
			</div>

			<Collapse isOpen={isOpen}>
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
			</Collapse>
		</div>
	);
};

export default ToDoSection;
