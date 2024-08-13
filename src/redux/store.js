import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/dashSlice'


export const store = configureStore({
    reducer:{
        userReducer: userSlice
    }
})