import { createSlice } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		seatsToChoose: 1,
		sideBySide: false,
	},
	reducers: {
		setSeatsToChoose: (state, action) => {
			state.seatsToChoose = action.payload;
		},
		setSideBySide: (state, action) => {
			state.sideBySide = action.payload;
		},
	},
});

export const { setSeatsToChoose, setSideBySide } = optionsSlice.actions;

export default optionsSlice.reducer;
