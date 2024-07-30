import { createSlice } from '@reduxjs/toolkit'

let initialState={
  identity:"",
  isRoomHost:false,
  connectOnlyWithaudioCheck:false,
  roomid:"",
  showOverlay:true,
  Paricipents:[]
  
}

   export  const JoinReducer=createSlice({
        name:"Register",
        initialState,

      reducers:{
        setRoomHost:(state,action)=>{
          
          state.isRoomHost=action.payload},
        connectOnlyWithAudio:(state,action)=>{
          
          state.connectOnlyWithaudioCheck=action.payload},
        SetIdentity:(state,action)=>{
             console.log(action.payload,"action.payload")
          state.identity=action.payload},
          SetRoomid:(state,action)=>{
          
          state.roomid=action.payload},
          SetShowOverlay:(state,action)=>{
          
          state.showOverlay=action.payload},
          SetParicipents:(state,action)=>{
          
          state.Paricipents=action.payload},
       
          
        
          
     
          

        



       
        
      }

    })


    export const joinRoomReducer=JoinReducer.actions