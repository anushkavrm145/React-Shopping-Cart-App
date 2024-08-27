//import createSlice method
//initialize the initial state
//creating slice using createslice, give a name, slice->name, mentoin the inital state, creating all the actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log(action)
      state.push(action.payload);
    },
    removeFromCart(state,action){
        return state.filter(item=>item.id!==action.payload)
    }
  },
});
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;
