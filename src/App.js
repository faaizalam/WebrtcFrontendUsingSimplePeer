import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import useUser from "./Store/useUser";
// import Navigation from "./Navigation/Navigation";
// import SignIn from "./Screens/Auth/SignIn";
// import SignUp from "./Screens/Auth/Signup";
import Introduction from "./Introduction/Introduction";

import Room from "./JoinRoomPage/Room";
import RoomPage from "./RoomPage/RoomPage";
import { socketConnection } from "./Utils/wss";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    socketConnection(dispatch)
  }, [])
  
  // const { user } = useUser();



  // if (user === "loading") {
  //   return (
  //     <div className="flex w-full h-[100vh] justify-center items-center">
  //       loading...
  //     </div>
  //   );
  // }

  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/join-room" element={<Room />} />
          <Route path="/room" element={<RoomPage />} />
          
          
        </Routes>
 
    </Router>
  );
}

export default App;
