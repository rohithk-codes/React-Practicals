import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './CounterSlic'
import theme from './ThemeSlice'


 export const store = configureStore({
    reducer:{
        counter:counterSlice,
         theme:theme
    }
})

