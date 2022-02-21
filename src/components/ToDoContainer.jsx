import React from 'react';
import { Button } from 'reactstrap';

// Components
import ToDoSection from './ToDoSection';

// Redux
import { addList } from './../redux/todoSlice';
import { useDispatch } from 'react-redux';

const ToDoContainer = ({ listItems }) => {
	const dispatch = useDispatch();

	return (
		<div className="todo-container">
			{listItems.map((item, i) => {
				return <ToDoSection item={item} id={item.id} key={i} />;
			})}

			<div>
				<Button color="primary" onClick={() => dispatch(addList())}>
					Add New List
				</Button>
			</div>
		</div>
	);
};

export default ToDoContainer;
