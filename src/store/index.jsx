import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from "./slice/Userslice";


const store = cofiguration({

    reducer:{
        users :userSlice.reducer,
    }
})
export default store;
