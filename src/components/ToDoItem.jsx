import React, { useState } from 'react';

// Reactstrap
import {
	Container,
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	Input,
} from 'reactstrap';

const ToDoItem = ({ item, toggleReminder, updateItemDate, updateItemTime }) => {
	const { id, completed, title, date, time, url } = item;

	const [itemTitle, setItemTitle] = useState(title);
	const [itemUrl, setItemUrl] = useState(url || '');

	const [modalOpen, setModalOpen] = useState(false);

	const toggleShow = (e) => {
		e.preventDefault();
		// setShow(!show);

		setModalOpen(!modalOpen);
	};

	const isPastTimeDate = () => {
		const dateToday = new Date();
		const timeNow = dateToday.getTime();

		const dueDate = new Date(date).getTime() + time;

		// if (time > 0) {
		// 	console.log('date up', timeNow < dueDate, {
		// 		today: new Date(),
		// 		time,
		// 		timeNow,
		// 		dueDate,
		// 	});
		// }

		return timeNow > dueDate;
	};

	const overdue = {
		backgroundColor: isPastTimeDate() ? 'hsl(0, 71%, 86%)' : '',
	};

	return (
		<li className={`todo-list-item`} style={overdue}>
			<Container>
				<Row>
					<Col>
						<Input
							type="checkbox"
							className={`todo-list-item__check`}
							defaultChecked={completed}
							onChange={() => toggleReminder(id)}
						/>

						<label>{`${title}`}</label>

						<button
							onClick={(e) => toggleShow(e)}
							className="todo-list-item__toggle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-caret-down-fill"
								viewBox="0 0 16 16"
							>
								<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
							</svg>
						</button>
					</Col>
				</Row>
			</Container>

			<Modal isOpen={modalOpen}>
				<ModalHeader
					toggle={(e) => toggleShow(e)}
					backdropTransition={150}
					modalTransition={150}
				>
					Header
				</ModalHeader>
				<ModalBody>
					<div className="modal-section">
						<Input
							placeholder="Title"
							type="text"
							value={itemTitle}
							onChange={(e) => setItemTitle(e.target.value)}
						/>

						<Input
							placeholder="Url"
							type="text"
							value={itemUrl}
							onChange={(e) => setItemUrl(e.target.value)}
						/>
					</div>

					<div className="modal-section">
						<div>
							<Input
								type="date"
								defaultValue={date}
								onChange={(e) =>
									updateItemDate(id, e.target.value)
								}
							/>
						</div>
						<div>
							<Input
								type="time"
								defaultValue={time}
								onChange={(e) =>
									updateItemTime(
										id,
										e.target.valueAsDate.getTime()
									)
								}
							/>
						</div>
					</div>

					<div className="modal-section"></div>
					<div className="modal-section"></div>
				</ModalBody>
			</Modal>
		</li>
	);
};

export default ToDoItem;
