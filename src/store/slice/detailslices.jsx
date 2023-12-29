
import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
name: 'details',
initialState: {
    details: {},
    loading: false,
    error: null,

},
reducers: {
    setDetails: (state, action) => {
state.details = action.payload;
    },
    setLoading: (state, action) => {
state.loading = action.payload;
    },
    setError: (state, action) => {
state.error = action.payload; 
    },
},
});

export const { setDetails, setLoading, setError } = detailsSlice.actions;
export const selectDetails = (state) => state.details;
export default detailsSlice.reducer;

