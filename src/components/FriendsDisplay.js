import axios from "./Axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const FriendsDisplay = ({ friends, setClickedUser }) => {
  const [friendedProfiles, setFriendedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const friendedUserIds = friends.map(({ user_id }) => user_id);
  const userId = cookies.UserId;

  const getFriends = async () => {
    try {
      const response = await axios.get("/users", {
        params: { userIds: JSON.stringify(friendedUserIds) },
      });
      setFriendedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, [friends]);

  const filteredFriendedProfiles = friendedProfiles?.filter(
    (friendedProfile) =>
      friendedProfile.friends.filter((profile) => profile.user_id === userId)
        .length > 0
  );

  return (
    <div className="friends-display">
      {filteredFriendedProfiles?.map((friend, _index) => (
        <div
          key={_index}
          className="friend-card"
          onClick={() => setClickedUser(friend)}
        >
          <div className="img-container">
            <img src={friend?.url} alt={friend?.first_name + " profile"} />
          </div>
          <h3>{friend?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendsDisplay;
