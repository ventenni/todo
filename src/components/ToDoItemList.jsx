import React from 'react';
import ToDoItem from './ToDoItem';

// Redux
import {
	toggleReminderStatus,
	updateItemDate,
	updateItemTime,
} from './../redux/todoSlice';
import { useDispatch } from 'react-redux';

const ToDoItemList = ({ listId, items }) => {
	const dispatch = useDispatch();

	const toggleReminder = (itemId) => {
		dispatch(toggleReminderStatus({ itemId, listId }));
	};

	const updateDate = (itemId, date) => {
		dispatch(updateItemDate({ itemId, listId, date }));
	};

	const updateTime = (itemId, time) => {
		dispatch(updateItemTime({ itemId, listId, time }));
	};

	return (
		<ul className="todo-item-list">
			{items.map((item, i) => {
				return (
					<ToDoItem
						item={item}
						key={i}
						toggleReminder={toggleReminder}
						updateItemDate={updateDate}
						updateItemTime={updateTime}
					/>
				);
			})}
		</ul>
	);
};

export default ToDoItemList;
