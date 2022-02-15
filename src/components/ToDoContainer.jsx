import React from 'react';

// Components
import ToDoSection from './ToDoSection';

const ToDoContainer = ({ listItems }) => {
	return (
		<div className="todo-container">
			{listItems.map((item, i) => {
				return <ToDoSection item={item} id={item.id} key={i} />;
			})}
		</div>
	);
};

export default ToDoContainer;
