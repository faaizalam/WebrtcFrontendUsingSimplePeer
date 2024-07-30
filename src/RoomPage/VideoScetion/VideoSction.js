import { Box } from '@chakra-ui/react'
import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveRoomButton from './LeaveRoomButton'
import VideoButton from './VideoButton'

const VideoSction = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" >

      <Box height="80%" className='VideoSection'>
      <div id="video_Portal"></div>
      </Box>
      <br/>
      <br/>
      <Box marginTop="20px">

      <VideoButton/>
      </Box>
    </Box>
    
  )
}

export default VideoSction