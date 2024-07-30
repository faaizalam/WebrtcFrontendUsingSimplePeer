import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { JoinRoomAction } from  "../store/actions"
import JoinRoomTitle from './JoinRoomTitle'
import { Box } from '@chakra-ui/react'


const Room = () => {
  
const param=useLocation().search
const dispatch=useDispatch()
  useEffect(() => {

    const query=new URLSearchParams(param).get("host")
    if (query) {
      console.log(query)
      JoinRoomAction(true,dispatch)
    }else{
      console.log(query)
      JoinRoomAction(false,dispatch)

    }
    
  
   
  }, [dispatch, param])
  
  return (
    <Box>
      <JoinRoomTitle/>

    </Box>
  )
}

export default Room