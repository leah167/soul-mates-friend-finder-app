import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import colorLogo from "../images/color-logo.png";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    // window.location.reload();
    navigate("/");
  };
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={"photo of " + user.first_name} />
        </div>
        <h3>Hi {user.first_name}!</h3>
      </div>
      {/* <PersonIcon />
      <ForumIcon /> */}
      <Link to="/">
        <img src={colorLogo} alt="colorLogo" className="logo" />
      </Link>
      <i className="log-out-icon" onClick={logout}>
        ⇦
      </i>
    </div>
  );
};

export default ChatHeader;
