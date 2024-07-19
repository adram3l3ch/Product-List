import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, productsReducer } from "../features";

const store = configureStore({
    reducer: combineReducers({
        products: productsReducer,
        cart: cartReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
