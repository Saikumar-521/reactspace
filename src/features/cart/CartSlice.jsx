import { createSlice } from "@reduxjs/toolkit";

let cartdata = JSON.parse(localStorage.getItem('data')) || []


let CartSlice = createSlice({
    name: 'cart',
    initialState: cartdata,

    reducers: {
        ADDCART: (state, action) => {
            let product = action.payload
            let exist = state.find(item => item.id === product.id)
            if (exist) {
                exist.quantity += 1
            } else {
                state.push(product)
                localStorage.setItem("data", JSON.stringify(state))
            }
        },
        INCREMENT: (state, action) => {
            let exist
                = state.find(item => item.id === action.payload.id)
            if (exist) {
                exist.quantity += 1
            }
            localStorage.setItem("data", JSON.stringify(state));
        },
        DECREMENT: (state, action) => {
            let exist = state.find(item => item.id === action.payload.id)
            if (exist
                && exist
                    .quantity > 1) {
                exist
                    .quantity -= 1
            }
            localStorage.setItem("data", JSON.stringify(state));

        },

    }
})
export const { ADDCART, INCREMENT, DECREMENT } = CartSlice.actions;
export default CartSlice.reducer