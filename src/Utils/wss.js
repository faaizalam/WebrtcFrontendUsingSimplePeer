import io from "socket.io-client"
import { SetParicipentsAction, roomIdAction } from "../store/actions"
import * as webhandler from "./Webrtc"

let socket=null
const Server="http://localhost:9000"
export const socketConnection=(dispatch)=>{
    socket=io(Server)
    socket.on("connect",()=>{
        console.log("user connected")
        console.log(socket.id)
    })
    socket.on("room-id",(data)=>{
        let {roomid}=data
        console.log("room my",data)
        roomIdAction(roomid,dispatch)
        

    })

    socket.on("updated-room",(data)=>{
        let {connectedUsers}=data
        SetParicipentsAction(connectedUsers,dispatch)

    })

    socket.on("conn-pre",(data)=>{
        const {connectedUserId}=data;
        socket.emit("conn-init",{connectedUserId:connectedUserId})
        webhandler.prepearNewPeerConnection(connectedUserId,false)
        console.log("down worked")


    })
    socket.on("conn-signal",(data)=>{
        // const {signal,connectedUserId}=data;
        webhandler.handleSignal(data)


    })
    socket.on("conn-init",(data)=>{
        const {connectedUserId}=data;
        console.log("down woked",connectedUserId)
        webhandler.prepearNewPeerConnection(connectedUserId,true)


    })
    socket.on("user-disconnected",(data)=>{
        webhandler.removePeerConnection(data)

    })
    socket.on("Shared-screen-large",(data)=>{
        webhandler.Sharedscreenlarge(data)
    })
}

export const createNewRoom=(identity)=>{
    let data={
        identity

    }
    socket.emit("create-new-room",data)
    
}
export const joinNewRoom=(identity,roomid)=>{
    let data={
        identity,
        roomid

    }
    socket.emit("join-room",data)

}

export const signalPeerData=(signalData)=>{
    socket.emit("conn-signal",signalData)
  

}


export const sharedScreenLargeSocket=(isScreenSharingActive)=>{
    socket.emit("Shared-screen-large",{isScreenSharingActive:isScreenSharingActive})

}