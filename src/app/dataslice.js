import { combineReducers, createSlice } from "@reduxjs/toolkit";
const initialState={
    data :null ,
    post:null,

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
       

    setpost:(state,action)=>{
        state.post=action.payload

    }
    }
    }

)
export const {setdata}= dataslice.actions;
export const {setpost}=postslice.actions
const rootReducers=combineReducers({
    data:dataslice.reducer,
    post:postslice.reducer
})
export default rootReducers;