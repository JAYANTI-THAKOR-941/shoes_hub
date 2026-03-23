import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice.js'

const store = configureStore({
    reducer:cartSlice
});

export default store;