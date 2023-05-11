import { createSlice } from "@reduxjs/toolkit";


const initialState = { count: 0 }
const artimathicSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.count = state.count + 1
        },
        decreament(state) {
            state.count = state.count - 1
        }
       
    }
})

export const artimathicAction = artimathicSlice.actions
export default artimathicSlice.reducer;
