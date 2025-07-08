import React from "react";
import Form from "../components/signUp/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-[url('./images/login/login-background.png')] bg-cover">
      <div className="glass h-[100%] w-[40%] px-25 flex flex-col gap-10 py-30">
        <div className="heading w-[100%] text-center text-white">
          <h1 className="text-4xl font-bold">Create Account</h1>
          <p className="mt-4 text-sm">Create your account to start learning</p>
        </div>

        <Form />

        <div className="divide text-white">
          <hr />
        </div>

        <div className="newUser text-sm text-center">
          <span className="black mr-4 text-white">Already have an account? </span>
          <span
            className="new text-[#F97316] font-semibold cursor-pointer underline underline-offset-2 activev:scale-90"
            onClick={handleLogInClick}
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
