import { createSlice } from "@reduxjs/toolkit"


const initialState= {
 mode:"light"
}

const themeSlice = createSlice({
    name:"themes",
    initialState,
    reducers:{
        toggleThem:(state)=>{
       state.mode = state.mode === "light"?"dark":"light"
        }
    }
})

export const {toggleThem} = themeSlice.actions
export default themeSlice.reducer