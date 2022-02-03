import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoContainer = ({
	listItems,
	newListItem,
	setNewListItem,
	addItemToList,
}) => {
	return (
		<div className="todo__container">
			<div className="todo__container__list">
				<ul>
					{listItems?.items &&
						listItems.items.map((item, i) => {
							return <ToDoItem item={item} key={i} counter={i} />;
						})}
				</ul>

				<input
					type="text"
					placeholder="Add item..."
					value={newListItem}
					onChange={(e) => {
						setNewListItem(e.target.value);
					}}
				/>
				<button onClick={(e) => addItemToList(e)}>Save</button>
			</div>
		</div>
	);
};

export default ToDoContainer;
