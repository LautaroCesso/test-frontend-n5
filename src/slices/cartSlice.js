import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      console.log("payload: ", payload);
      state.products.push(payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;