import { createSlice } from "@reduxjs/toolkit";
import { myData } from "../../../data/myData";
const initialState = {
    cart:[],
    items: myData,
    totalQuantity:0,
    totalPrice: 0,  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart : (state,action) => {
      state.cart.push(action.payload);
    }
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;