import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Features/SearchSlice";
import CollectionSlice from "./Features/CollectionSlice";


export  const OurStore = configureStore({
    reducer : {
       search : SearchSlice,
       collection : CollectionSlice
    }
})