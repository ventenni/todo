import './App.scss';
import React from 'react';

import { useSelector } from 'react-redux';

// Components
import ToDoContainer from './components/ToDoContainer';

const App = () => {
	const reduxLists = useSelector((state) => state.reminder.reminders);

	return (
		<div className="todo">
			<ToDoContainer listItems={reduxLists} />
		</div>
	);
};

export default App;
