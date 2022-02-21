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
								class="bi bi-info-circle"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
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
