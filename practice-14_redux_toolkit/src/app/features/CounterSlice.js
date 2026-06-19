import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },

        reducers: {
            increment: (state) => {
                state.value += 1;
            },

            decrement: (state) => {
                state.value -= 1
            },

            incrementByUser:(state,action)=>{
                 state.value += action.payload
            }
        }
    
})

export const{increment,decrement,incrementByUser} = counterSlice.actions
export default counterSlice.reducer
