import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    kitaps:[],
    AkadasKitap:[],
    search: '',
   
};
 const kitaps = createSlice({
    name:'kitaps',
    initialState,
    reducers:{
        setk:(state,action) =>{
           
            state.kitaps = action.payload


        },
       Appentk: (state,action)=>{
        state.kitaps =[...state.kitaps , action.payload]
       },
       ArkadasSet:(state,action) =>{
           
        state.AkadasKitap = action.payload


    },
   ArkadasSets: (state,action)=>{
    state.AkadasKitap =[...state.AkadasKitap , action.payload]
   },
       Search:(state, action) =>{
        debugger;
        state.search = action.payload;
      },
    

    }
 })

 export const {setk,Appentk, Search,ArkadasSet,ArkadasSets } = kitaps.actions;
 export default kitaps.reducer;