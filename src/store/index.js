import { configureStore } from "@reduxjs/toolkit";
import kitaps from "./kitaps";
import auht from "./auht";
import kullanici from "./kullanici";


const store = configureStore({
    reducer:{
    kitaps,
    auht,
   
    kullanici
    
    }
})
export default store ;