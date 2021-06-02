import { createSlice } from '@reduxjs/toolkit';

export const stageSlice = createSlice({
	name: 'stage',
	initialState: {
		value: 'HOME',
	},
	reducers: {
		home: (state) => {
			state.value = 'HOME';
		},
		choose: (state) => {
			state.value = 'CHOOSE';
		},
		confirm: (state) => {
			state.value = 'CONFIRM';
		},
	},
});

export const { home, choose, confirm } = stageSlice.actions;

export default stageSlice.reducer;
