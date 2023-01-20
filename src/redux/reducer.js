import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state,action) => {
      state.cart = [...state.cart, action.payload]
    },
    deleteItem: (state, action) => {
      const data = state.cart.filter((ele)=> ele.id !== action.payload);
      state.cart = data
    }
  }
});

export const { addToCart, deleteItem } = counterSlice.actions;

export default counterSlice.reducer;
