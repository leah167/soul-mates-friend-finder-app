import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatDisplay from "./ChatDisplay";
import FriendsDisplay from "./FriendsDisplay";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option" onClick={() => setClickedUser(null)}>
          Friends
        </button>
        <button className="option" disabled={!clickedUser}>
          Chat
        </button>
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
