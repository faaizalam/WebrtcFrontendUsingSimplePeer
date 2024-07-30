import { Box } from '@chakra-ui/react'
import React from 'react'

export const RoomLable = ({roomid}) => {
  return (
    <Box className='roomLable'>
        <Box className='roomLableContainer'>{roomid}</Box>
    </Box>
  )
}
