import { configureStore } from '@reduxjs/toolkit' 
import rootReducers from './dataslice'
export const Store = configureStore({
    reducer:rootReducers,

})