import React, { useContext, useEffect } from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../../pages/Home";
import Courses from "../../pages/Courses";
import Login from "../../pages/Login";
import { useNavigate, Route } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const className = e.target.classList[0];

    switch (className) {
      case "home":
        navigate("/");
        break;
      case "courses":
        navigate("/courses");
        break;
      case "dashboard":
        navigate("/dashboard");
        break;
      case "svg-inline--fa":
        navigate("/dashboard");
        break;
      case "profile":
        navigate("/dashboard");
        break;
      case "login-btn":
        navigate("/login");
        break;
      default:
        alert("Unknown navigation target");
    }
  };

  useEffect(() => {
    const right = document.querySelector(".right");

    const handleMouseOver = () => {
      const hoverPart = document.querySelector(".hover-part");
      if (hoverPart) hoverPart.classList.remove("hidden");
    };

    const handleMouseOut = () => {
      const hoverPart = document.querySelector(".hover-part");
      if (hoverPart) hoverPart.classList.add("hidden");
    };

    if (right) {
      right.addEventListener("mouseover", handleMouseOver);
      right.addEventListener("mouseout", handleMouseOut);
    }

    // Cleanup
    return () => {
      if (right) {
        right.removeEventListener("mouseover", handleMouseOver);
        right.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [isLoggedIn]); // re-run only when login status changes

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  const { userData } = useContext(AuthContext);

  return (
    <div className="h-[8vh] flex items-center justify-between px-10 bg-[#0F172A] text-white">
      <div className="left flex pb-1 h-[100%]">
        <div className="logo flex items-center gap-2">
          <img className="h-[45px] rounded" src={logo} alt="logo of company" />
          <h1 className="text-2xl font-bold text-[#F1F5F9]">ElevateU</h1>
        </div>

        <div className="navs flex items-center text-sm gap-2 ml-10 h-[100%]">
          <div
            className="home flex items-center justify-center w-[80px] text-[#6366F1] hover:text-[#818CF8] font-semibold border-b-3 h-[100%] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Home
          </div>
          <div
            className="courses flex items-center justify-center w-[80px] h-[100%] text-[#CBD5E1] hover:text-[#818CF8] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Courses
          </div>
          <div
            className="dashboard flex items-center justify-center w-[80px] h-[100%] ml-2 text-[#CBD5E1] hover:text-[#818CF8] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Dashboard
          </div>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="right relative">
          <div
            className="profile py-2 rounded-lg cursor-pointer active:scale-90"
            onClick={(e) => handleNavigation(e)}
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-[28px] text-orange-400"
            />
          </div>

          <div className="hover-part absolute top-10 -right-8 px-3 py-1 rounded-lg text-sm text-white bg-slate-600 w-[8vw] hidden cursor-default active:scale-90 text-center z-100">
            <div>{userData.name}</div>
            <div
              className="logout bg-orange-400 hover:bg-orange-500 px-2 py-1 mt-2 cursor-pointer rounded"
              onClick={handleLogout}
            >
              ⏻ Log out
            </div>
          </div>
        </div>
      ) : (
        <div className="right">
          <div
            className="login-btn text-white bg-[#F97316] hover:bg-[#FB923C] text-[#F1F5F9] px-4 py-1 flex gap-1 items-center rounded-lg cursor-pointer active:scale-90"
            onClick={(e) => {
              handleNavigation(e);
            }}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-1" />{" "}
            Log In
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
