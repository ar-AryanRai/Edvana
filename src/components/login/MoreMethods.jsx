import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React from "react";

const MoreMethods = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="other-methods flex flex-col gap-3">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          setIsLoggedIn(true);
          navigate("/home");
          console.log(jwtDecode(credentialResponse.credential));
          console
        }}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
};

export default MoreMethods;
