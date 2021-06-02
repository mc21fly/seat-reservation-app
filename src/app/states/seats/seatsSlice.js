import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSeats = createAsyncThunk('seats/fetchSeats', async () => {
	const { data } = await axios.get('http://localhost:3000/seats');
	return data;
});

const seatsSlice = createSlice({
	name: 'seats',
	initialState: {
		status: 'idle',
		plan: [],
		selected: [],
	},
	reducers: {
		select: (state, action) => {
			const selected = [...current(state).selected];
			const indexOfSeat = selected.indexOf(action.payload);

			if (indexOfSeat < 0) {
				selected.push(action.payload);
			} else {
				selected.splice(indexOfSeat, 1);
			}

			state.selected = selected;
		},
		clear: (state) => {
			state.selected = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeats.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSeats.fulfilled, (state, action) => {
				state.status = 'idle';
				state.plan = action.payload;
			});
	},
});

export const { select, clear } = seatsSlice.actions;

export default seatsSlice.reducer;
