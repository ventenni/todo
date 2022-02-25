import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const reminderSlice = createSlice({
	name: 'reminder',
	initialState: {
		reminders: setLocalStorage('todo', [
			{
				id: '8EE6CFC6-3C9D-4A86-81D1-F3073BFD67F7',
				name: 'reminders',
				icon: 'path/to/icon',
				theme: 'default',
				showCompletedTasks: false,
				items: [
					{
						id: '0BE1BBC8-C889-4815-A226-1FEA8305A205',
						title: 'take out rubbish',
						date: '2022-02-17',
						time: '1200',
						completed: false,
						url: '',
					},
					{
						id: '10F39E47-774A-4B36-BCC9-75BA15A4C4D9',
						title: 'take out rubbish',
						date: '01-01-2023',
						time: '1200',
						completed: false,
					},
					{
						id: '0259BF99-C317-4E01-8DBF-5DCA231BE238',
						title: 'take out rubbish',
						date: '01-01-2023',
						time: '1200',
						completed: false,
					},
					{
						id: '169AE334-1D36-445E-AFDF-907D9516D60D',
						title: 'take out rubbish',
						date: '01-01-2023',
						time: '1200',
						completed: false,
					},
				],
			},
			{
				id: '6486EFF4-A32E-4FF3-859E-D390520CDD6B',
				name: 'groceries',
				icon: 'path/to/icon',
				theme: 'default',
				showCompletedTasks: false,
				items: [
					{
						id: 'A6DACCFA-CCB2-4C8C-906B-389B592CD79B',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: '236BDDC1-B5A1-4E43-B7F6-294A2E21039B',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: '863EF9BC-E0B3-45C8-ADDF-C897C450489C',
						title: 'eggs',
						date: '',
						completed: false,
					},
					{
						id: 'A2925CC2-5AE4-493C-97A8-30E75699CB92',
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
				id: uuidv4(),
				name:
					action.payload?.name ||
					`New List ${state.reminders.length}`,
				icon: action.payload?.icon || '',
				items: [],
			});

			addToLocalStorage(state);
		},

		addReminderToList: (state, action) => {
			console.log('add reminder to list', action.payload);
			state.reminders.forEach((list) => {
				if (list.id === action.payload.id) {
					list.items.push({
						id: uuidv4(),
						title: action.payload.newListItem,
						date: new Date().toString(),
						completed: false,
						url: '',
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

		updateItemDate: (state, action) => {
			console.log('update date');

			const { itemId, listId, date } = action.payload;

			state.reminders.forEach((list) => {
				if (list.id === listId) {
					list.items.forEach((item) => {
						console.log(itemId, item.id);
						if (itemId === item.id) {
							item.date = date;
						}
					});
				}
			});

			addToLocalStorage(state);
		},

		updateItemTime: (state, action) => {
			console.log('update');

			const { itemId, listId, time } = action.payload;

			state.reminders.forEach((list) => {
				if (list.id === listId) {
					list.items.forEach((item) => {
						if (itemId === item.id) {
							item.time = time;
						}
					});
				}
			});

			addToLocalStorage(state);
		},

		updateItemTitle: (state, action) => {
			console.log('update');

			const { itemId, listId, title } = action.payload;

			state.reminders.forEach((list) => {
				if (list.id === listId) {
					list.items.forEach((item) => {
						if (itemId === item.id) {
							item.title = title;
						}
					});
				}
			});
		},

		saveStateToLocalStorage: (state) => {
			addToLocalStorage(state);
		},

		updateListThemeInState: (state, action) => {
			state.reminders.forEach((list) => {
				if (list.id === action.payload.id) {
					list.theme = action.payload.theme;
				}
			});

			addToLocalStorage(state);
		},

		updateListShowHideCompletedTasks: (state, action) => {
			console.log('hit it');
			state.reminders.forEach((list) => {
				if (list.id === action.payload.id) {
					console.log('updating');
					list.showCompletedTasks = action.payload.showCompletedTasks;
				}

				addToLocalStorage(state);
			});
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
	updateItemDate,
	updateItemTime,
	updateListThemeInState,
	updateListShowHideCompletedTasks,
} = reminderSlice.actions;

export default reminderSlice.reducer;
