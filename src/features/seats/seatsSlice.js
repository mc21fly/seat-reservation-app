import { createSlice } from '@reduxjs/toolkit';

export const seatsSlice = createSlice({
	name: 'seats',
	initialState: {
		numberOfSeatsToChoose: 1,
		sideBySide: false,
		selectedSeats: [],
	},
	reducers: {
		setSeatsToChoose: (state, action) => {
			state.numberOfSeatsToChoose = action.payload;
		},
		setSideBySide: (state, action) => {
			state.sideBySide = action.payload;
		},
		selectSeats: (state, action) => {
			state.selectedSeats = action.payload;
		},
	},
});

export const { setSeatsToChoose, setSideBySide, selectSeats } =
	seatsSlice.actions;

export default seatsSlice.reducer;
