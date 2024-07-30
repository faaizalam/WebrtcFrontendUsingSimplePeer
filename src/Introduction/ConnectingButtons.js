import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom";


const ConnectingButtons = () => {
  const navigate = useNavigate();

  const pushToJoinRoomPage = () => {
    navigate("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    navigate("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
        className="connecting_button" // Apply the CSS class
      />
      <ConnectingButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
        className="connecting_button" // Apply the CSS class
      />
    </div>
  );
};

export default ConnectingButtons;
