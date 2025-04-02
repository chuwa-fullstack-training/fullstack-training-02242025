import {configureStore} from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false 
    })
})