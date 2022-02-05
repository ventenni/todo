import React, { useState } from 'react';

// Chakra
import { Collapse } from 'reactstrap';

const ToDoItem = ({ item, toggleReminder, updateItemDateTime }) => {
	const { id, completed, title, date } = item;
	const [show, setShow] = useState(false);
	const [itemDate, setItemDate] = useState(date);

	const toggleShow = (e) => {
		e.preventDefault();
		setShow(!show);
	};

	const itemStatus = completed ? 'completed' : '';
	return (
		<li
			className={`todo__container__list__item ${itemStatus}`}
			onClick={() => toggleReminder(id)}
		>
			{`${title}`}

			<button onClick={(e) => toggleShow(e)}>Toggle</button>

			<Collapse isOpen={show}>
				<input
					type="datetime-local"
					defaultValue={itemDate}
					onChange={(e) => setItemDate(e.target.value)}
				/>

				<button onClick={() => updateItemDateTime(id, itemDate)}>
					Save Date
				</button>
			</Collapse>
		</li>
	);
};

export default ToDoItem;
