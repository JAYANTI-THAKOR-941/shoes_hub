import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [] // [id,name,qty]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const exitingItem = state.cart.find((item)=>item.id === action.payload);
            if(exitingItem){
                exitingItem.qty += 1;
            }else{
                state.cart.push({...action.payload,qty : 1});
            }
        },
        incrementQty(state,action){
            const item = state.cart.find((i)=>i.id === state.cart.id)
            if(item){
                state.cart.qty += 1;
            }
        },
        decrementQty(state,action){
            const item = state.cart.find((i)=>i.id === state.cart.id)
            if(item){
                state.cart.qty -= 1;
            }
        },
        clearCart(state){
            state.cart = [];
        }
    }
});

export const {addToCart,incrementQty,decrementQty,clearCart} = cartSlice.actions;
export default cartSlice.reducer;