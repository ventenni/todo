import React from 'react';

const ToDoItem = ({ item, counter }) => {
	return (
		<li className="todo__container__list__item">{`${item} ${counter}`}</li>
	);
};

export default ToDoItem;
