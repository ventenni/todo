import { createSlice } from '@reduxjs/toolkit';

export const reminderSlice = createSlice({
	name: 'reminder',
	initialState: {
		reminders: [
			{
				id: '0',
				name: 'reminders',
				icon: 'path/to/icon',
				items: [
					{
						id: '0',
						title: 'take out rubbish',
						date: '01-01-2023',
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
		],
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
			state.reminders.map((list) => {
				if (list.id === action.payload.selectedList.id) {
					return list.items.push({
						id: list.items.length,
						title: action.payload.newListItem,
						date: new Date() + 1,
						completed: false,
					});
				}
			});
		},

		completeReminder: (state, action) => {
			state.reminders.map((list) => {
				return list.map((item) => {
					if (action.payload.id === item.id) {
						item.completed = true;
					}
					return [];
				});
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { test, addList, addReminderToList, completeReminder } =
	reminderSlice.actions;

export default reminderSlice.reducer;
