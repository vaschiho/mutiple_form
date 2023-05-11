import { createSlice } from "@reduxjs/toolkit";


const displaySlice = createSlice({
    name: "toggle",
    initialState: { display: false},
    reducers: {
        onTogglePeriod(state) {
            state.display = !state.display
        },
        onTogglePeriodtoOrignalState(state){
            state.display = false;
        },
        
     
    }
})

export const displayAction = displaySlice.actions

export default displaySlice.reducer

