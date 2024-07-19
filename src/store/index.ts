import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, productsReducer } from "../features";
import { useSelector as useStateSelector } from "react-redux";

const store = configureStore({
    reducer: combineReducers({
        products: productsReducer,
        cart: cartReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export function useSelector<T extends RootState[keyof RootState]>(cb: (state: RootState) => T): T {
    return useStateSelector(cb);
}

export default store;
