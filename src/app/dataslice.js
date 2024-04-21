import { combineReducers, createSlice } from "@reduxjs/toolkit";
const initialState={
    data :null ,
    user:null,

}
export const dataslice =createSlice({
    name : 'data',
    initialState,
    reducers:{
        setdata:(state,action)=>{
            state.data=action.payload

        }
        
    }
    }

)
export const postslice =createSlice({
    name : 'data',
    initialState,
    reducers:{
       

    setuser:(state,action)=>{
        state.user=action.payload

    }
    }
    }

)
export const {setdata}= dataslice.actions;
export const {setuser}=postslice.actions
const rootReducers=combineReducers({
    data:dataslice.reducer,
    user:postslice.reducer
})
export default rootReducers;