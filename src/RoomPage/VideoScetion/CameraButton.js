// import React from 'react'

// export const CameraButton = () => {
//   return (
//     <div>CameraButton</div>
//   )
// }

import React, { useState } from 'react'
import CameraButtonOn from "../../resources/Images/camera.svg"
import CameraButtonOff from "../../resources/Images/cameraOff.svg"
import { Box } from '@chakra-ui/react'
import { videoMute } from '../../Utils/Webrtc'

const CameraButton = () => {
  const [isCameraButtonDisable,setisCameraButtonDisable]=useState(false)

  const handleCameraButtonButton=()=>{
    videoMute(isCameraButtonDisable)
    setisCameraButtonDisable(!isCameraButtonDisable)

  }
  return (
    <Box className='videoButtonConatiner'  onClick={handleCameraButtonButton}>
      <img  className="CameraButtonbutton" src={isCameraButtonDisable?CameraButtonOff:CameraButtonOn} alt='CameraButton' />

    </Box>
  )
}

export default CameraButton