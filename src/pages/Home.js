import React from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignUp] = useState(true);
  const [cookies, removeCookie] = useCookies(["user"]);
  const authToken = cookies.AuthToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie("UserId", cookies.UserId);
      removeCookie("AuthToken", cookies.AuthToken);
      window.location.reload();
      return;
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h2 className="primary-title">Find your platonic soulmate.</h2>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignup} />
        )}
      </div>
    </div>
  );
};

export default Home;
