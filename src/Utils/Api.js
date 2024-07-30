import { Toast } from "@chakra-ui/react";
import axios from "axios";

const serverApi = "http://localhost:9000/api";

export const getRoomExists = async (roomId) => {
  if (!roomId) {
    alert("Please Add RoomId")
    return  false
    
  }else{

    const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
    return response.data;
  }
  
};
