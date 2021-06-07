import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	seatsToChoose: 1,
	sideBySide: false,
};

const optionsSlice = createSlice({
	name: 'options',
	initialState: initialState,
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
