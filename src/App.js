import './App.scss';
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	addList,
	addReminderToList,
	completeReminder,
	test,
} from './redux/todoSlice';

// Components
import ToDoContainer from './components/ToDoContainer';

// Hooks
import useLocalStorage from './hooks/useLocalStore';

const App = () => {
	const reduxLists = useSelector((state) => state.reminder.reminders);
	const dispatch = useDispatch();

	const [listItems, setListItems] = useLocalStorage('todo', [...reduxLists]);
	// const [newListItem, setNewListItem] = useState('');

	// const addItemToList = (e, selectedList) => {
	// 	e.preventDefault();

	// 	if (newListItem.length === 0) return;

	// 	setListItems(
	// 		listItems.map((item) =>
	// 			item.name === selectedList.name
	// 				? {
	// 						name: item.name,
	// 						items: [
	// 							...item.items,
	// 							{
	// 								title: newListItem,
	// 								date: '',
	// 								completed: false,
	// 							},
	// 						],
	// 						icon: item.icon,
	// 				  }
	// 				: {
	// 						...item,
	// 				  }
	// 		)
	// 	);

	// 	console.log(listItems);

	// 	setNewListItem('');
	// };

	console.log(reduxLists);

	return (
		<div className="todo">
			<ToDoContainer
				addItemToList={() => dispatch(addReminderToList())}
				listItems={reduxLists}
				setListItems={setListItems}
				// newListItem={newListItem}
				// setNewListItem={setNewListItem}
			/>

			<button onClick={() => dispatch(test())}> Test </button>
		</div>
	);
};

export default App;

// To do - new list items not displaying updated list
// Look at using redux to better control reminder updates
