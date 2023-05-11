import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
      
    },
    reducers: {
    
        addItem(state, actions) {
            const newItem = actions.payload
            const existingItem = state.item.find((item) => item.id === newItem.id)
            
            if (!existingItem) {
                state.item.push({
                    id: newItem.id,
                    period:newItem.period,
                    price: newItem.price,
                    name: newItem.name, 
                },
                )
             
            } else {
                return
            }
        },
    
        removeItem(state, actions) {
            const id = actions.payload;
            state.item = state.item.filter(item => item.id !== id);
          
         
        },
        clearItem(state) {
            state.item = [];
         
        }
    

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer