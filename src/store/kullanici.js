import { createSlice } from "@reduxjs/toolkit"
import { Search } from "./kitaps";

const initialState = {
    kullanici:[],
    arkadasProfil:{},
    arananKullanicilar:[],
    searchs: '',
  
   
   
};
 const kullanici = createSlice({
    name:'kullanici',
    initialState,
    reducers:{
        set:(state,action) =>{
           
            state.kullanici = action.payload
          


        },
        Arama:(state,action) =>{
           
            state.arananKullanicilar = action.payload
          


        },
        Aramas:(state,action) =>{
           
            state.arananKullanicilar = [...state.arananKullanicilar, action.payload]
          


        },
        Arkadas:(state,action) =>{
           
            state.arkadasProfil = action.payload[0];
          


        },
        Arkadass:(state,action) =>{
           
            state.arkadasProfil = [...state.arkadasProfil, action.payload]
          


        },
       Appent: (state,action)=>{
        state.kullanici =[...state.kullanici , action.payload]
       },
       Searchs:(state, action) =>{
            state.searchs = action.payload
      },
      
    

    }
 })

 export const {set,Appent,Searchs , Arama ,Aramas ,Arkadas,Arkadass} = kullanici.actions;
 export default kullanici.reducer;