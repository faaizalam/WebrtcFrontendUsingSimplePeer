import { configureStore } from '@reduxjs/toolkit';
import reducer, { JoinReducer } from './reducer';

export const store = configureStore({
  reducer:{
    JoinReducer:JoinReducer.reducer
  } 
});



