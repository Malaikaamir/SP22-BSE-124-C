
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
name: 'categories',
initialState: {
    categories: [],
    loading: false, 
    error: null,
},
reducers: {
    setCategories: (state, action) => {
    state.categories = action.payload;
    },
    setLoading: (state, action) => {
    state.loading = action.payload;
    },
    setError: (state, action) => {
    state.error = action.payload;
    },
},

});







export const { setCategories, setLoading, setError } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;

