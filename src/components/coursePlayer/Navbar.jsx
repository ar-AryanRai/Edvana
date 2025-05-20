import React, { useContext, useEffect } from "react";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {

  const {userData, isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

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
    const right = document.querySelector(".right2");
    right.addEventListener("mouseover", () => {
      document.querySelector(".hover-part").classList.remove("hidden");
    });
    right.addEventListener("mouseout", () => {
      document.querySelector(".hover-part").classList.add("hidden");
    });
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <div className="h-[8vh] flex items-center justify-between px-10 ">
      <div className="left flex h-[100%] pb-1">
        <div className="logo flex items-center gap-2">
          <img className="h-[45px]" src={logo} alt="logo of company" />
          <h1 className="text-2xl font-bold">ElevateU</h1>
        </div>

        <div className="navs flex items-center text-sm gap-2 ml-10 h-[100%]">
          <div
            className="home flex items-center justify-center w-[80px] text-[#565E6C] h-[100%] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Home
          </div>
          <div
            className="courses flex items-center justify-center w-[80px] h-[100%] text-[#565E6C] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Courses
          </div>
          <div
            className="dashboard flex items-center justify-center w-[80px] h-[100%] ml-2 text-[#565E6C] cursor-pointer"
            onClick={(e) => handleNavigation(e)}
          >
            Dashboard
          </div>
        </div>
      </div>

      {isLoggedIn ? (
        <div className="right2 relative">
          <div
            className="profile py-2 rounded-lg cursor-pointer active:scale-90"
            onClick={(e) => handleNavigation(e)}
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-[28px] text-[#E63600]"
            />
          </div>

          <div className="hover-part absolute top-10 -right-8 px-3 py-1 rounded-lg text-sm text-[#E63600] border-2 border-[#E63600] w-[8vw] hidden cursor-default active:scale-90 text-center z-100">
            <div>{userData.name}</div>
            <div
              className="logout bg-orange-100 px-2 py-1 mt-2 cursor-pointer"
              onClick={handleLogout}
            >
              Log out
            </div>
          </div>
        </div>
      ) : (
        <div className="right2">
          <div
            className="login-btn text-white bg-[#E63600] px-4 py-1 flex gap-1 items-center rounded-lg cursor-pointer active:scale-90"
            onClick={(e) => handleNavigation(e)}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-1" />{" "}
            Log In
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
