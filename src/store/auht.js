import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: false,
   
    users:[]
};
 const auht = createSlice({
    name:'auht',
    initialState,
    reducers:{
        loginol:(state,action) =>{
           
            state.user = action.payload


        },
        logoutol:state => {
            
            state.user =false
        },
       
          Dizi:(state,action) =>{
           
            state.users = action.payload


        },
       Diziler: (state,action)=>{
        state.users =[...state.users , action.payload]
       },

    }
 })

 export const {loginol,logoutol, Dizi , Diziler} = auht.actions;
 export default auht.reducer;