import React, { useState } from 'react';
import ToDoItemList from './ToDoItemList';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
	addList,
	addReminderToList,
	completeReminder,
} from './../redux/todoSlice';

const ToDoContainer = ({ listItems, addItemToList }) => {
	const [selectedList, setSelectedList] = useState(listItems[0]);
	const [newListItem, setNewListItem] = useState('');

	const dispatch = useDispatch();

	const changeList = (name) => {
		setSelectedList(...listItems.filter((list) => list.name === name));
	};

	const addNewReminder = (e) => {
		e.preventDefault();

		dispatch(addReminderToList({ newListItem, selectedList }));
	};

	return (
		<div className="todo__container">
			<div className="todo__container__lists">
				{listItems.map((item, i) => {
					return (
						<div key={i} onClick={() => changeList(item.name)}>
							{item.name}
						</div>
					);
				})}
			</div>
			<div className="todo__container__items">
				<ul>
					{selectedList?.items && (
						<ToDoItemList items={selectedList.items} />
					)}
				</ul>

				<input
					type="text"
					placeholder="Add item..."
					value={newListItem}
					onChange={(e) => {
						setNewListItem(e.target.value);
					}}
				/>
				<button onClick={(e) => addItemToList(e, selectedList)}>
					Save
				</button>

				<button onClick={(e) => addNewReminder(e)}>Save Redux</button>
			</div>
		</div>
	);
};

export default ToDoContainer;
