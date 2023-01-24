import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state,action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cart[itemIndex].qnty +=1;
      }else {
        state.cart = [...state.cart, action.payload]
      }

      // state.cart = [...state.cart, action.payload]
    },
    deleteItem: (state, action) => {
      const data = state.cart.filter((ele)=> ele.id !== action.payload);
      state.cart = data
    },
    decrement: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      state.cart[itemIndex].qnty -= 1
    }
  }
});

export const { addToCart, deleteItem, decrement } = counterSlice.actions;

export default counterSlice.reducer;
