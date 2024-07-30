import * as wss from "./wss"
import Peer from "simple-peer";
const defaultConstrainst={
    audio:true,
    video:true
}



let LocalStream;
export const getLocalPreviewAndInitRoomConnection=(isRoomHost,identity,roomId=null,showOverlayAction,dispatch)=>{
    navigator.mediaDevices.getUserMedia(defaultConstrainst).then((stream)=>{
     LocalStream=stream
     ShowLocalVideoPrveiw(stream)
     showOverlayAction(false,dispatch)
     isRoomHost?wss.createNewRoom(identity):wss.joinNewRoom(identity,roomId)

    }).catch((error)=>{
        console.log("error from local preview",error.message)
    })

}





const getConfiguration=()=>{
    return{

        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' } // Google's public STUN server
        ]
    };
}
let peer={} 
let streams=[]
export const prepearNewPeerConnection=(connectedUserId,initiator)=>{
    const configuration=getConfiguration()
    peer[connectedUserId]=new Peer({
        initiator:initiator,
        config:configuration,
        stream:LocalStream
    })

    peer[connectedUserId].on("signal",(data)=>{
        const signalData={
            signal:data,
            connectedUserId:connectedUserId
        }
        wss.signalPeerData(signalData)

    })
    peer[connectedUserId].on("stream",(stream)=>{
 console.log("new stream came")
 addStream(stream,connectedUserId)
 streams=[...streams,stream]

    })
}

export const handleSignal=(data)=>{
    console.log(peer,"dekh-------------------------------")
    console.log("chla handleSignal")
peer[data.connectedUserId].signal(data.signal)

}
// other stream
const addStream=(stream,connectedUserId)=>{
   const videosContainaer=document.getElementById("video_Portal")
    
    const videoContainer=document.createElement("div")
    videoContainer.id=connectedUserId
    videoContainer.classList.add("video_track_container")
    const videoElement=document.createElement("video")
    videoElement.autoplay=true
    videoElement.srcObject=stream
    videoElement.id=`${connectedUserId}-video`
    
    videoElement.onloadedmetadata=()=>{
        videoElement.play()
    }
    videoElement.addEventListener("click",()=>{
        if (videoElement.classList.contains("fullScreen")) {
            videoElement.classList.remove("fullScreen")
            
            }else{
                
                videoElement.classList.add("fullScreen")
        }
    })

    videoContainer.appendChild(videoElement)
    videosContainaer.appendChild(videoContainer)

}
// own stream

const ShowLocalVideoPrveiw=(stream)=>{
    const videosContainaer=document.getElementById("video_Portal")
    videosContainaer.classList.add("videos_portal_styles")
    const videoContainer=document.createElement("div")
    videoContainer.classList.add("video_track_container")
    const videoElement=document.createElement("video")
    videoElement.autoplay=true
    videoElement.muted=true
    videoElement.srcObject=stream

    // for firefox we need to run video manually
    videoElement.onloadedmetadata=()=>{
        videoElement.play()
    }

    videoContainer.appendChild(videoElement)
    videosContainaer.appendChild(videoContainer)


}

// Mic Button 
export const micMute=(isMute)=>{
    console.log(isMute,"ism")
    LocalStream.getAudioTracks()[0].enabled=isMute?true:false
}
export const videoMute=(isdisable)=>{
    LocalStream.getVideoTracks()[0].enabled=isdisable?true:false
}

export const removePeerConnection = (data) => {
    const { socketId } = data;
    const videosContainer = document.getElementById(socketId);
    const videoElement = document.getElementById(`${socketId}-video`);

    if (videosContainer && videoElement) {
        // Stop all media tracks
        let tracks = videoElement.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;

        // Remove video element and its container
        videosContainer.removeChild(videoElement);
        videosContainer.parentNode.removeChild(videosContainer);

        // Destroy peer connection if exists
        if (peer[socketId]) {
            console.log(peer[socketId]);

            try {
                peer[socketId].destroy();

            } catch (error) {
                console.error("Error destroying peer connection:", error);
            }

            delete peer[socketId];
        }
    }
};



export const toggleScreenShare = (
    isScreenSharingActive,
    screenSharingStream = null
  ) => {
    if (isScreenSharingActive) {
        wss.sharedScreenLargeSocket(isScreenSharingActive)
      switchVideoTracks(LocalStream);
    } else {
      wss.sharedScreenLargeSocket(isScreenSharingActive)
      switchVideoTracks(screenSharingStream);
    }
  };

const switchVideoTracks = (newStream) => {
    newStream.getTracks().forEach(newTrack => {
      Object.keys(peer).forEach(socketId => {
        const currentPeer = peer[socketId]; // Use the correct peer object
        const oldStream = currentPeer.streams[0];
  
        oldStream.getTracks().forEach(oldTrack => {
          if (oldTrack.kind === newTrack.kind) {
            currentPeer.replaceTrack(oldTrack, newTrack, oldStream);
          }
        });
      });
    });
  };

  export const Sharedscreenlarge=(data)=>{
    const {isScreenSharingActive,sharedBy}=data
    if (!isScreenSharingActive) {
        let video= document.getElementById(`${sharedBy}-video`)
        video.classList.add("sharedScreen")
        
    }else{
        let video= document.getElementById(`${sharedBy}-video`)
        video.classList.remove("sharedScreen")
    }

  }
  
