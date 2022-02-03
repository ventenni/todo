import './App.scss';
import React, { useState, useEffect } from 'react';

// Components
import ToDoContainer from './components/ToDoContainer';

// Hooks
import useLocalStorage from './hooks/useLocalStore';

const App = () => {
	const [listItems, setListItems] = useLocalStorage('test', {
		items: [
			'list item',
			'list item',
			'list item',
			'list item',
			'list item',
		],
	});
	const [newListItem, setNewListItem] = useState('');

	const addItemToList = (e) => {
		console.log('add item to list');

		e.preventDefault();
		setListItems({ items: [...listItems.items, newListItem] });

		setNewListItem('');
	};

	return (
		<div className="todo">
			<ToDoContainer
				addItemToList={addItemToList}
				listItems={listItems}
				setListItems={setListItems}
				newListItem={newListItem}
				setNewListItem={setNewListItem}
			/>
		</div>
	);
};

export default App;
