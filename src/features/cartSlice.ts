import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps, ProductType } from "../components";

const initialState = {
    totalPrice: 0,
    products: [] as CartItemProps["product"][],
    totalItems: 0,
};

const findPriceAndQuantity = (products: (typeof initialState)["products"]) => {
    const totalPrice = products.reduce((acc, p) => acc + p.quantity * p.price, 0);
    const totalItems = products.reduce((acc, p) => acc + p.quantity, 0);
    return { totalPrice, totalItems };
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<ProductType>) => {
            state.products.push({ ...action.payload, quantity: 1 });
            const { totalItems, totalPrice } = findPriceAndQuantity(state.products);
            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
        },
        removeProductFromCart: (state, action: PayloadAction<{ id: string | number }>) => {
            state.products = state.products.filter(p => p.id !== action.payload.id);
            const { totalItems, totalPrice } = findPriceAndQuantity(state.products);
            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
        },
        modifyProductQuantity: (state, action: PayloadAction<{ id: string | number; by: 1 | -1 }>) => {
            const { by, id } = action.payload;
            state.products = state.products
                .map(p => {
                    if (p.id !== id) return p;
                    return { ...p, quantity: p.quantity + by };
                })
                .filter(p => !!p.quantity);
            const { totalItems, totalPrice } = findPriceAndQuantity(state.products);
            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
        },
        emptyCart: () => initialState,
    },
});

export const { addProductToCart, removeProductFromCart, modifyProductQuantity, emptyCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
