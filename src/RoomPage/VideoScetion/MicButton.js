import React, { useState } from 'react'
import mic from "../../resources/Images/mic.svg"
import micmute from "../../resources/Images/micOff.svg"
import { Box } from '@chakra-ui/react'
import { micMute } from '../../Utils/Webrtc'

const MicButton = () => {
  const [isMicmutted,setisMicmutted]=useState(false)

  const handlemicButton=()=>{
    micMute(isMicmutted)
    setisMicmutted(!isMicmutted)

  }
  return (
    <Box className='videoButtonConatiner'  onClick={handlemicButton}>
      <img  className="micbutton" src={isMicmutted?micmute:mic} alt='mic' />

    </Box>
  )
}

export default MicButton