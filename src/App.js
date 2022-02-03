import './App.scss';
import React, { useState, useEffect } from 'react';

// Components
import ToDoContainer from './components/ToDoContainer';

// Hooks
import useLocalStorage from './hooks/useLocalStore';

const App = () => {
	const [listItems, setListItems] = useLocalStorage('todo', [
		{
			name: 'reminders',
			items: [
				{
					title: 'list item',
					date: '01-01-2023',
					completed: false,
				},
				{
					title: 'list item',
					date: '01-01-2023',
					completed: false,
				},
				{
					title: 'list item',
					date: '01-01-2023',
					completed: false,
				},
				{
					title: 'list item',
					date: '01-01-2023',
					completed: false,
				},
			],
		},
		{
			name: 'groceries',
			items: [
				{
					title: 'eggs',
					date: '',
					completed: false,
				},
				{
					title: 'eggs',
					date: '',
					completed: false,
				},
				{
					title: 'eggs',
					date: '',
					completed: false,
				},
				{
					title: 'eggs',
					date: '',
					completed: false,
				},
			],
		},
	]);
	const [newListItem, setNewListItem] = useState('');

	const addItemToList = (e, selectedList) => {
		e.preventDefault();

		if (newListItem.length === 0) return;

		setListItems(
			listItems.map((item) =>
				item.name === selectedList.name
					? {
							name: item.name,
							items: [
								...item.items,
								{
									title: newListItem,
									date: '',
									completed: false,
								},
							],
							icon: item.icon,
					  }
					: {
							...item,
					  }
			)
		);

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
