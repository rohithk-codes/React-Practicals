import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import {persistReducer,persistStore} from "redux-persist";
import themeReducer from './ThemeSlice'


// const counterPersistConfig={
//     key:"counter",
//      storage,
// }

// const thmePersistConfig={
//     key:"theme",
//     storage

// }

// const rootReducer = combineReducers(
//     counter:persi
// )

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        theme:themeReducer

    }
})