// store.js
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import detailsReducer from './slices/detailsSlice';


export const store = configureStore({
reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
    
},

});
