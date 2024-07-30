import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeaveRoomButton = () => {
  const navigate=useNavigate()
  const handlRemove = () => {
    const siteUrl = window.location.origin;
    window.location.href = siteUrl;
  };
  return (
    <Box>
      <Button className='LeaveButton' style={{backgroundColor:"red", width:"100px",height:"100px", borderRadius:"10px"}} onClick={handlRemove}> Leave Room</Button>

    </Box>
  )
}

export default LeaveRoomButton