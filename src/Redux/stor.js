import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./Basket.Slice";

const store = configureStore({
    reducer: {
        basket: BasketSlice

    }

})
export default store