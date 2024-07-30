import { joinRoomReducer} from "./reducer"

export const JoinRoomAction=(host,dispatch)=>{
    dispatch(joinRoomReducer.setRoomHost(host))


}
export const ConnectOnlywithaudioAction=(host,dispatch)=>{
    dispatch(joinRoomReducer.connectOnlyWithAudio(host))


}

export const roomIdAction=(roomid,dispatch)=>{
    console.log(roomid)
    dispatch(joinRoomReducer.SetRoomid(roomid))


}

export const identityAction=(identity,dispatch)=>{
    console.log(identity)
    dispatch(joinRoomReducer.SetIdentity(identity))


}
export const showOverlayAction=(overlay,dispatch)=>{

    dispatch(joinRoomReducer.SetShowOverlay(overlay))


}
export const SetParicipentsAction=(overlay,dispatch)=>{

    dispatch(joinRoomReducer.SetParicipents(overlay))


}