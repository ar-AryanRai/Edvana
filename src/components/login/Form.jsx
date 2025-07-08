import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getLocalStorage } from "../../util/LoggedInUserData";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userList } = getLocalStorage();

  const { setIsLoggedIn, setUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogInClick = () => {
    const user = userList.find(
      (ele) => ele.email === email && ele.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(user));
      document.querySelector(".login-popup").classList.remove("hidden");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      document.querySelector(".error-popup").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".error-popup").classList.add("hidden");
      }, 1500);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <form
      className="form mt-2 h-[32%] flex flex-col justify-between"
      autoComplete="on"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogInClick();
      }}
    >
      <div className="login-popup text-white bg-green-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 absolute hidden">
        Login Successful
      </div>
      <div className="error-popup text-white bg-red-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 absolute hidden">
        Invalid email or password!!
      </div>
      <div className="mail bg-[#F3F4F6] py-2 px-4 rounded-lg">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="ml-4 border-none outline-none w-[90%]"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
      </div>

      <div className="pswd bg-[#F3F4F6] py-2 px-4 rounded-lg mt-4">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="ml-5 border-none outline-none w-[90%]"
          placeholder="Enter your password"
          autoComplete="current-password"
          minLength={8}
          required
        />
      </div>

      <div className="forgetPswd cursor-pointer text-[#F97316] font-semibold mt-2 text-sm">
        Forget your password?
      </div>

      <button
        type="submit"
        className="login-btn text-center bg-[#FF3D00] hover:bg-[#fb6514] text-white py-2 px-4 mt-2 rounded-lg cursor-pointer active:scale-90"
      >
        Log In
      </button>
    </form>
  );
};

export default Form;
