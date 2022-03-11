import React from 'react';
import ToDoItem from './ToDoItem';

// Redux
import {
	toggleReminderStatus,
	updateItemDate,
	updateItemTime,
} from './../redux/todoSlice';
import { useDispatch } from 'react-redux';

const ToDoItemList = ({ listId, items, showCompletedTasks, theme }) => {
	const dispatch = useDispatch();

	const toggleReminder = (itemId, completed) => {
		const timeout = completed ? 500 : 2000;

		setTimeout(() => {
			dispatch(toggleReminderStatus({ itemId, listId }));
		}, timeout);
	};

	const updateDate = (itemId, date) => {
		dispatch(updateItemDate({ itemId, listId, date }));
	};

	const updateTime = (itemId, time) => {
		dispatch(updateItemTime({ itemId, listId, time }));
	};

	const incompletedItems = items.filter((item) => !item.completed);
	const completedItems = items.filter((item) => item.completed);

	return (
		<ul className="todo-item-list">
			{incompletedItems.map((item) => {
				return (
					<ToDoItem
						item={item}
						key={item.id}
						toggleReminder={toggleReminder}
						updateItemDate={updateDate}
						updateItemTime={updateTime}
						theme={theme}
					/>
				);
			})}

			{showCompletedTasks &&
				completedItems.map((item) => {
					return (
						<ToDoItem
							item={item}
							key={item.id}
							toggleReminder={toggleReminder}
							updateItemDate={updateDate}
							updateItemTime={updateTime}
							theme={theme}
						/>
					);
				})}
		</ul>
	);
};

export default ToDoItemList;
