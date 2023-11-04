import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './components/DisplaySlice'

const store = configureStore({
    reducer:{
    data: dataReducer
    },
})
export default store;