import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatDisplay from "./ChatDisplay";
import FriendsDisplay from "./FriendsDisplay";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        {/* <button className="option" onClick={() => setClickedUser(null)}>
          Friends
        </button> */}
        <IconButton className="option" onClick={() => setClickedUser(null)}>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
        {/* <button className="option" disabled={!clickedUser}>
          Chat
        </button> */}
        <IconButton className="option" disabled={!clickedUser}>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </div>

      {!clickedUser && (
        <FriendsDisplay
          friends={user.friends}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
