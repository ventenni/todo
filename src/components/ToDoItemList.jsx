import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = ({ items }) => {
	return (
		<ul>
			{items.map((item, i) => {
				return <ToDoItem item={item} key={i} counter={i} />;
			})}
		</ul>
	);
};

export default ToDoItemList;
