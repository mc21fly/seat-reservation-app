import { configureStore } from '@reduxjs/toolkit';

import seatsReducer from '../app/states/seats/seatsSlice';
import optionsReducer from '../app/states/options/optionsSlice';

export const store = configureStore({
	reducer: {
		options: optionsReducer,
		seats: seatsReducer,
	},
});
