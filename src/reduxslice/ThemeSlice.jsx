import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        mode:"light"
    },
    reducers:{
        toggletheme:(state)=>{
            state.mode = state.mode==="light"?"dark":"light"
        }
    }
})


export default ThemeSlice.reducer
export const {toggletheme} = ThemeSlice.actions