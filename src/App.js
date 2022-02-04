import './App.scss';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	// addList,
	// addReminderToList,
	// completeReminder,
	test,
} from './redux/todoSlice';

// Components
import ToDoContainer from './components/ToDoContainer';

// Hooks
import useLocalStorage from './hooks/useLocalStore';

const App = () => {
	const reduxLists = useSelector((state) => state.reminder.reminders);
	const dispatch = useDispatch();

	const [listItems, setListItems] = useLocalStorage('todo', reduxLists);

	return (
		<div className="todo">
			<ToDoContainer listItems={reduxLists} />

			<button onClick={() => dispatch(test())}> Test </button>
		</div>
	);
};

export default App;

// To do - new list items not displaying updated list
// Look at using redux to better control reminder updates
