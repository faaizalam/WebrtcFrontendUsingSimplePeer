import React, { useState } from 'react'
import JoinRoomInputs from './JoinRoomInputs'
import { Box } from '@chakra-ui/react'
import ErrorMessage from './ErrorMessage'
import JoinRoomButtons from './JoinRoomButtons'
import { getRoomExists } from '../Utils/Api'
import { useNavigate } from 'react-router-dom'
import { identityAction, roomIdAction } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const JoinRoomContent = ({isRoomHost}) => {
  const navigate=useNavigate()
    const [roomidvalue,setroomidvalue]=useState("")
    const [nameValue,setNameValue]=useState("")
    const [onlyAudio, setOnlyAudio] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
   
    const dispatch = useDispatch();
    const handleJoinRoom=async()=>{
      identityAction(nameValue,dispatch)
      if (isRoomHost) {

        createRoom()
        
      }else{
       await  JoinRoom()
      }
     
  }

  const JoinRoom=async()=>{
    const responseMessage=await getRoomExists(roomidvalue)
    if (responseMessage) {
     const { roomExists, full } = responseMessage;
    
     if (roomExists) {
       if (full) {
         seterrorMessage("Meeting is full. Please try again later.");
        } else {
          
          roomIdAction(roomidvalue,dispatch)
        navigate("/room");
      }
    } else {
      seterrorMessage("Meeting not found. Check your meeting id.");
    }
  
  }
}
  const createRoom=()=>{
    navigate("/room")
  }
  return (
    <Box>

      <JoinRoomInputs
      setroomidvalue={setroomidvalue}
      setNameValue={setNameValue}
      roomidvalue={roomidvalue}
      nameValue={nameValue}
      isRoomHost={isRoomHost}
      
      />
      <ErrorMessage   errorMessage={errorMessage}/>
            <Box>
                <JoinRoomButtons
                handleJoinRoom={handleJoinRoom}
                isRoomHost={isRoomHost}
                
                />
            </Box>
    </Box>
   
  )
}

export default JoinRoomContent