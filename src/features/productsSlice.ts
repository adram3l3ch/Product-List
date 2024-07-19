import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants";

export const productsSlice = createSlice({
    name: "products",
    initialState: products,
    reducers: {
        getProducts: state => console.log(state),
    },
});

export const { getProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
