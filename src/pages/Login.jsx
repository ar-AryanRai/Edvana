import React from "react";
import Form from "../components/login/Form";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-[url('./images/login/login-background.png')] bg-cover">
      <div className="h-[100%] w-[40%] bg-white/50 px-25 flex flex-col gap-10 py-30">
        <div className="heading w-[100%] text-center">
          <h1 className="text-4xl font-bold">Access Account</h1>
          <p className="mt-4 text-sm">
            Access your account to continue learning
          </p>
        </div>

        <Form />

        <div className="divide mt-1">
          <hr />
        </div>

        <div className="newUser text-sm text-center">
          <span className="black mr-4">Need to create an account? </span>
          <span
            className="new text-[#FF3D00] cursor-pointer underline underline-offset-2 active:scale-90"
            onClick={handleSignUpClick}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
