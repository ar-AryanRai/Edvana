import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../util/LoggedInUserData";

const form = () => {
  const navigate = useNavigate();

  let userList = JSON.parse(localStorage.getItem("userList"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoggedIn, setIsLoggedIn, userData, setUserData, setUserList } =
    useContext(AuthContext);

  const handleSignUpClick = () => {
    const mail = userList.find((ele) => ele.email === email);
    if (mail) {
      document.querySelector(".error-popup").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".error-popup").classList.add("hidden");
      }, 1500);
    } else if (password === confirmPassword) {
      setIsLoggedIn(true);
      const data = {
        name: name,
        email: email,
        password: password,
        completedCourse: [],
        enrolledCourse: [],
        notes: [],
      };
      setUserData(data);
      userList.push(data);
      setUserList(userList);
      localStorage.setItem("userList", JSON.stringify(userList));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(data));
      document.querySelector(".signup-popup").classList.remove("hidden");
      setTimeout(() => navigate("/home"), 1500);
    } else {
      document.querySelector(".error2-popup").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".error2-popup").classList.add("hidden");
      }, 1500);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form
      className="form mt-2 flex flex-col gap-2"
      autoComplete="on"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUpClick();
      }}
    >
      <div className="signup-popup text-white bg-green-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 absolute hidden">
        Sign Up Successful
      </div>

      <div className="error-popup text-white bg-red-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 absolute hidden">
        This Email Id is already linked to an account!!
      </div>

      <div className="error2-popup text-white bg-red-500 w-[20%] left-[40%] top-[0] mt-6 text-center font-semibold rounded-lg py-2 absolute hidden">
        Password and Confirm Password do not match!!
      </div>

      <div className="name bg-[#F3F4F6] py-2 px-4 rounded-lg">
        <FontAwesomeIcon icon={faUser} />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="ml-4 border-none outline-none"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="mail bg-[#F3F4F6] py-2 px-4 rounded-lg">
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="ml-4 border-none outline-none w-[90%]"
          placeholder="Your email address"
          required
        />
      </div>

      <div className="pswd bg-[#F3F4F6] py-2 px-4 rounded-lg">
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          className="ml-5 border-none outline-none w-[90%]"
          placeholder="Create your password"
          required
        />
      </div>

      <div
        className={`pswd py-2 px-4 rounded-lg flex items-center bg-[#F3F4F6] border-2 ${
          confirmPassword && confirmPassword !== password
            ? "border-red-500"
            : confirmPassword
            ? "border-green-500"
            : "border-none"
        }`}
      >
        <FontAwesomeIcon icon={faLock} />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={8}
          required
          className="ml-5 outline-none w-[90%]"
          placeholder="Confirm your password"
        />
      </div>

      <button
        type="submit"
        className="login-btn text-center bg-[#FF3D00] text-white py-2 px-4 rounded-lg cursor-pointer active:scale-90"
      >
        Sign Up
      </button>
    </form>
  );
};

export default form;
