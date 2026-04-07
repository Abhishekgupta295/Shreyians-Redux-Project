import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Features/SearchSlice";


export  const OurStore = configureStore({
    reducer : {
       search : SearchSlice,
    }
})