import React from 'react';

const ToDoItem = ({ item }) => {
	return <li className="todo__container__list__item">{`${item.title}`}</li>;
};

export default ToDoItem;
