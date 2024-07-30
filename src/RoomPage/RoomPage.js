import React, { useEffect } from "react";
import ParticipentsSection from "./participentsSection.js/ParticipentsSection";
import VideoSction from "./VideoScetion/VideoSction";
import { ChatSection } from "./ChatSection/ChatSection";
import { Box } from "@chakra-ui/react";
import "./RoomPage.css"
import { RoomLable } from "./RoomLable/RoomLable";
import { useDispatch, useSelector } from "react-redux";
import * as webRtcHanlder from "../Utils/Webrtc"
import { Overlay } from "./Overlay";
import { showOverlayAction } from "../store/actions";

const RoomPage = () => {
  const { isRoomHost,roomid,identity,showOverlay} = useSelector((state) => state.JoinReducer);
  console.log(roomid,"roomid")
  const dispatch = useDispatch();
  useEffect(()=>{
   
      webRtcHanlder.getLocalPreviewAndInitRoomConnection(isRoomHost,identity,roomid,showOverlayAction,dispatch)
    

  },[])
  return (
<>
    {showOverlay&&<Overlay/>}
      <RoomLable  roomid={roomid}/>
    <Box className="roomContainer">
      <ParticipentsSection/>
      <VideoSction/>
      <ChatSection/>
    </Box>
</>
  )
};

export default RoomPage;
