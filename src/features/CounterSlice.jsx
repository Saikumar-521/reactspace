import { createSlice } from "@reduxjs/toolkit";

let CounterSlice=createSlice({
    name:'Count',
    initialState:0,
    reducers:{
        INCR:(state,action)=>state+1,
        DEC:(state,action)=>state-1
    }
})
export const {INCR,DEC}=CounterSlice.actions
export default CounterSlice.reducer