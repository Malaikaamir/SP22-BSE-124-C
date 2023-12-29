
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
try {
    const response = await axios.get('https://emojihub-api-url/categories');
    return response.data;
} catch (error) {
    throw error.response ? error.response.data : error.message;
}
});


export const fetchDetails = createAsyncThunk('details/fetchDetails', async (categoryId) => {
try {
    const response = await axios.get(`https://emojihub-api-url/details/${categoryId}`);
    return response.data;
} catch (error) {
    throw error.response ? error.response.data : error.message;
}
});
