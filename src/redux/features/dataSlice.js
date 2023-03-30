import { createSlice } from "@reduxjs/toolkit";
export const dataSlice=createSlice({
    name:"data",
    initialState:{user:null},
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        }
    }

})
export const {setData}=dataSlice.actions