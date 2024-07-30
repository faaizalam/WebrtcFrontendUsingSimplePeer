import { Box } from '@chakra-ui/react'
import React from 'react'
import MicButton from './MicButton'

import LeaveRoomButton from './LeaveRoomButton'
import ScreenSharebutton from './ScreenSharebutton'
import CameraButton from './CameraButton'

const VideoButton = () => {
  return (
    <Box className='videoButtons' display="flex" justifyContent="space-evenly" w="100%" h="20%">
        <MicButton/>
        <CameraButton/>
        <LeaveRoomButton/>
        <ScreenSharebutton/>

    </Box>
  )
}

export default VideoButton