import './App.scss';
import React, { useState, useEffect } from 'react';

// Components
import ToDoContainer from './components/ToDoContainer';

// Hooks
import useLocalStorage from './hooks/useLocalStore';

const App = () => {
	const [listItems, setListItems] = useLocalStorage('test', {});
	const [newListItem, setNewListItem] = useState('');

	useEffect(() => {
		setListItems({
			items: [
				'list item',
				'list item',
				'list item',
				'list item',
				'list item',
			],
		});
	}, []);

	const addItemToList = (e) => {
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
