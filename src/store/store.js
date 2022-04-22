import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/itemSlice";

const store = configureStore({
    reducer: {
        items: itemReducer

    }   

})
export default store