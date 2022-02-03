import './App.scss';
import React, { useState, useEffect } from 'react';

function App() {
	const [listItems, setListItems] = useState([
		'list item',
		'list item',
		'list item',
		'list item',
		'list item',
	]);

	const [newListItem, setNewListItem] = useState('');

	const addItemToList = (e) => {
		e.preventDefault();
		setListItems([...listItems, newListItem]);

		setNewListItem('');
	};

	return (
		<div className="todo">
			<div className="todo__container">
				<div className="todo__container__list">
					<ul>
						{listItems.map((item, i) => {
							return (
								<li
									className="todo__container__list__item"
									key={i}
								>
									{`${item} ${i}`}
								</li>
							);
						})}
					</ul>

					<input
						type="text"
						placeholder="Add item..."
						value={newListItem}
						onChange={(e) => setNewListItem(e.target.value)}
					/>
					<button onClick={(e) => addItemToList(e)}>Save</button>
				</div>
			</div>
		</div>
	);
}

export default App;
