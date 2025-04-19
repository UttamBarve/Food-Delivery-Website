import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        
        AddItem: (state, action) => {
            let exitsItem = state.find((item) => item.id === action.payload.id)
            if (exitsItem) {
               return state.map((item) => item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                state.push(action.payload);
            }

        },
        
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        IncrementQty: (state, action)=>{
            return state.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
        },

        DecrementQty: (state, action)=>{
            
            return state.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)
        },
        ResetItems: (state)=>{
            return state = [];
        }
    }
})

export const { AddItem, RemoveItem, IncrementQty, DecrementQty, ResetItems } = cardSlice.actions;
export default cardSlice.reducer