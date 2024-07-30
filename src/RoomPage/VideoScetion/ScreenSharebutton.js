
import React, { useState } from 'react'
import shareButton from "../../resources/Images/switchToScreenSharing.svg"
import { Box } from '@chakra-ui/react'
import LocalScreenSharing from './LocalScreenSharing'
import * as Webrtc from "../../Utils/Webrtc"

const ScreenSharebutton = () => {
  const [isSharebuttonActive,setisSharebuttonActive]=useState(false)
  const [ScreenSharing,setScreenSharing]=useState(null)

  const handleshareButtonButton=async()=>{
    if(!isSharebuttonActive){
      let stream=null
      try {
        stream=await navigator.mediaDevices.getDisplayMedia({video:true,audio:false})
        
        
      } catch (error) {
        console.log(error,"localstream")
      }
      if (stream) {
        setScreenSharing(stream)
        Webrtc.toggleScreenShare(false,stream)
        setisSharebuttonActive(true)
        
        }
        
        }else{

          Webrtc.toggleScreenShare(true)
          ScreenSharing.getTracks().forEach(el =>el.stop())
          setisSharebuttonActive(false)
          setScreenSharing(null)
        }


    setisSharebuttonActive(!isSharebuttonActive)

  }
  return (
    <Box>
    <Box className='videoButtonConatiner'  onClick={handleshareButtonButton}>
      <img  className="shareButton" src={shareButton} alt='shareButton' />

    </Box>
{ScreenSharing&&(
  <LocalScreenSharing stream={ScreenSharing}/>
)}
    </Box>
  )
}

export default ScreenSharebutton