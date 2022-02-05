import { createSlice } from '@reduxjs/toolkit';

export const reminderSlice = createSlice({
	name: 'reminder',
	initialState: {
		reminders: setLocalStorage('todo', [
			{
				id: '0',
				name: 'reminders',
				icon: 'path/to/icon',
				items: [
					{
						id: '0',
						title: 'take out rubbish',
						date: new Date('2022-02-17T22:22'),
						completed: false,
					},
					{
						id: '1',
						title: 'take out rubbish',
						date: '01-01-2023',
						completed: false,
					},
					{
						id: '2',
						title: 'take out rubbish',
						date: '01-01-2023',
						completed: false,
					},
					{
						id: '3',
						title: 'take out rubbish',
						date: '01-01-2023',
						completed: false,
					},
				],
			},
			{
				id: '1',
				name: 'groceries',
				icon: 'path/to/icon',
				items: [
					{
						id: '0',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: '1',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: '2',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: '3',
						title: 'eggs',
						date: '',
						completed: false,
					},
				],
			},
		]),
		value: 0,
	},
	reducers: {
		test: (state) => {
			state.value += 1;
		},

		addList: (state, action) => {
			state.reminders.push({
				id: state.reminders.length,
				name: action.payload.name,
				icon: action.payload.icon || '',
				items: [],
			});
		},

		addReminderToList: (state, action) => {
			console.log('add reminder to list', action.payload);
			state.reminders.forEach((list) => {
				if (list.id === action.payload.id) {
					list.items.push({
						id: list.items.length,
						title: action.payload.newListItem,
						date: new Date().toString(),
						completed: false,
					});
				}
			});

			addToLocalStorage(state);
		},

		toggleReminderStatus: (state, action) => {
			const { itemId, listId } = action.payload;

			state.reminders.forEach((list) => {
				if (list.id === listId) {
					list.items.forEach((item) => {
						if (itemId === item.id) {
							item.completed = !item.completed;
						}
					});
				}
			});

			addToLocalStorage(state);
		},

		updateItemDateAndTime: (state, action) => {
			console.log('update');

			const { itemId, listId, dateTime } = action.payload;

			state.reminders.forEach((list) => {
				if (list.id === listId) {
					list.items.forEach((item) => {
						if (itemId === item.id) {
							item.date = dateTime;
						}
					});
				}
			});

			addToLocalStorage(state);
		},
	},
});

// Performed on first page load
function setLocalStorage(key, initialValue) {
	try {
		// Get from local storage by key
		const item = window.localStorage.getItem(key);
		// Parse stored json or if none return initialValue
		return item ? JSON.parse(item) : initialValue;
	} catch (error) {
		// If error also return initialValue
		console.log('todo slice line 121', error);
		return initialValue;
	}
}

function addToLocalStorage(state) {
	window.localStorage.setItem('todo', JSON.stringify([...state.reminders]));
}

// Action creators are generated for each case reducer function
export const {
	test,
	addList,
	addReminderToList,
	toggleReminderStatus,
	updateItemDateAndTime,
} = reminderSlice.actions;

export default reminderSlice.reducer;
