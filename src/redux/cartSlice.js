import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [] 
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const existingItem = state.cart.find((item)=>item.id === action.payload.id);
            if(existingItem){
                existingItem.qty += 1;
            }else{
                state.cart.push({...action.payload,qty : 1});
            }
        },
        incrementQty(state,action){
            const item = state.cart.find((i)=>i.id === action.payload)
            if(item){
                item.qty += 1;
            }
        },
        decrementQty(state,action){
            const item = state.cart.find((i)=>i.id === action.payload)
            if(item){
                if(item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.cart = state.cart.filter((i)=>i.id !== action.payload);
                }
            }
        },
        removeFromCart(state,action){
            state.cart = state.cart.filter((i)=>i.id !== action.payload);
        },
        clearCart(state){
            state.cart = [];
        }
    }
});

export const {addToCart,incrementQty,decrementQty,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;