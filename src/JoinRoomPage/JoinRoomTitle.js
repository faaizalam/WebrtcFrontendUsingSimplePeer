import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import JoinRoomContent from './JoinRoomContent'

const JoinRoomTitle = () => {
    const  {isRoomHost}= useSelector((state)=>state.JoinReducer)
    
  return (
 <Box>
  <Heading>{isRoomHost?"Host a meeting":"Join a meeting"}</Heading>
  <JoinRoomContent isRoomHost={isRoomHost} />
 </Box>
  )
}

export default JoinRoomTitle