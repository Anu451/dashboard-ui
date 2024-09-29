import { createSlice } from '@reduxjs/toolkit';

const INITIALSTATE = {
	currentPage: 'Dashboard',
};
const navSlice = createSlice({
	name: 'nav',
	initialState: INITIALSTATE,
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export const { setPage } = navSlice.actions;

export default navSlice.reducer;
