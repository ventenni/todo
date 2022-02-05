import React from 'react';
import ToDoItem from './ToDoItem';

// Redux
import {
	toggleReminderStatus,
	updateItemDateAndTime,
} from './../redux/todoSlice';
import { useDispatch } from 'react-redux';

const ToDoItemList = ({ listId, items }) => {
	const dispatch = useDispatch();

	const toggleReminder = (itemId) => {
		dispatch(toggleReminderStatus({ itemId, listId }));
	};

	const updateItemDateTime = (itemId, dateTime) => {
		dispatch(updateItemDateAndTime({ itemId, listId, dateTime }));
	};

	return (
		<ul>
			{items.map((item, i) => {
				return (
					<ToDoItem
						item={item}
						key={i}
						toggleReminder={toggleReminder}
						updateItemDateTime={updateItemDateTime}
					/>
				);
			})}
		</ul>
	);
};

export default ToDoItemList;
