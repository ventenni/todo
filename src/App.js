import './App.scss';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { test } from './redux/todoSlice';

// Components
import ToDoContainer from './components/ToDoContainer';

const App = () => {
	const reduxLists = useSelector((state) => state.reminder.reminders);
	const dispatch = useDispatch();

	return (
		<div className="todo">
			<ToDoContainer listItems={reduxLists} />

			<button onClick={() => dispatch(test())}> Test </button>
		</div>
	);
};

export default App;

// Error with date being added to the local storage
