import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../app/UserSlice";
export const store = configureStore({
    reducer:{
        products:userReducer
    }
})