import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import CoursePlayer from "./pages/CoursePlayer";
import CourseOverview from "./pages/CourseOverview";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    userList,
    setUserList,
  } = useContext(AuthContext);

  const [userId, setUserId] = useState(2);

  useEffect(() => {
    const isLoggedInStr = localStorage.getItem("isLoggedIn");
    const isLoggedInValue = isLoggedInStr ? JSON.parse(isLoggedInStr) : false;
    setIsLoggedIn(isLoggedInValue);
  }, [isLoggedIn]);

  // ap key 1 => AIzaSyCEttPIiBlYlaAIfHrRzl5zpHivH4UAqY8  ----
  // ap key 2 => AIzaSyDaxEFaQrLgg7wo02ewTIsVYoZMRBgTVYE  ----
  // ap key 3 => AIzaSyAWtm5ijJWrGXTor43HiIbl2idQ9hDfxGo  ----
  // ap key 4 => AIzaSyAWA-92T5mqDbHwDd2u4ghLVqEly1tgXP4  ----
  // ap key 5 => AIzaSyBwsteUck3etKTvqOtQeGeL2DUZiHcxNvY  ----
  // ap key 6 => AIzaSyB4C_eSZL7B-n2TpgJVMkSOsMCYCp6pp1w  ----

  const apiKey = "AIzaSyCEttPIiBlYlaAIfHrRzl5zpHivH4UAqY8";

  return (
    <>
      <div className="small-screen max-w-[100vw] h-[100vh] flex justify-center items-center pt-[25%] bg-gradient-to-br from-[#FFE7E2] to-[#F5EBFF] lg:hidden sm:visible md:visible">
        <div className="bg-gray-300 px-6 rounded-lg py-4 mx-10 text-center bg-gradient-to-br from-[#FE3000] to-[#BC80FD] text-white font-bold text-xl">
          Please Use laptop or Next hub max to run this site
        </div>
      </div>
      {/* Routes contains all the routing between pages or components */}

      <div className="large-screen lg:visible sm:hidden md:hidden">
        <Routes>
          {/* below to routes are for home page */}
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                apiKey={apiKey}
              />
            }
          />

          <Route path="/home" element={<Navigate to="/" />} />

          {/* this route is for login page */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* this route is for signup page */}
          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          />

          {/* this route is for courses page */}
          <Route
            path="/courses"
            element={
              <Courses
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                apiKey={apiKey}
              />
            }
          />

          {/* this route is for course-overview page */}
          <Route
            path="/course-overview"
            element={
              <CourseOverview
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />

          {/* this route is for course-player page */}
          <Route
            path="/course-player"
            element={
              !isLoggedIn ? (
                <Navigate to="/login" />
              ) : (
                <CoursePlayer
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  apiKey={apiKey}
                />
              )
            }
          />

          {/* this route is for dashboard page */}
          <Route
            path="/dashboard"
            element={
              !isLoggedIn ? (
                <Navigate to="/login" />
              ) : (
                <Dashboard
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  userId={userId}
                />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
