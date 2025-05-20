import React, { useEffect, useContext, useState } from "react";
import Navbar from "../components/dashboards/Navbar";
import CompletedCourseList from "../components/dashboards/CompletedCourseList";
import EnrolledCourseList from "../components/dashboards/EnrolledCourseList";
import { AuthContext } from "../context/AuthProvider";
import logo from "../images/dashboard1.png";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const isLoggedIn = JSON.parse(localStorage.getItem("userData"));

  const { setIsLoggedIn } = useContext(AuthContext);

  const isLoading = !userData ? true : false;

  // if (isLoading) {
  //   return <div className="text-center mt-20 text-xl">Loading...</div>;
  // }

  if (isLoading) {
    return (
      <div className="max-w-screen min-h-screen animate-pulse ">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <div className="overview h-[43vh] px-[15%] py-[4%]">
          <div className="h-10 w-[30%] mx-auto bg-gray-200 rounded mb-10" />

          <div className="w-[70%] ml-[18%] user-courses flex items-center justify-between mt-20">
            <div className="w-[45%] h-24 bg-gray-200 rounded shadow-md" />
            <div className="w-[45%] h-24 bg-gray-200 rounded shadow-md" />
          </div>
        </div>

        {/* <div className="enrolled-courses px-[15%]">
          <div className="h-10 w-[20%] mx-auto bg-gray-200 rounded mb-6" />
          <EnrolledCourseList userData={{}} isLoading={isLoading} />
          <CompletedCourseList userData={{}} isLoading={isLoading} />
        </div> */}

        <div className="enrolled-courses ">
          <div className="flex items-center justify-center mt-8">
            <h1 className="text-3xl font-bold text-center w-[30%] h-18 bg-gray-200"></h1>
          </div>
          <div className="flex items-center justify-center gap-4 w-[80%] ml-[10%] mt-10">
            {[...Array(5)].map((_, idx) => {
              return (
                <div className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"></div>
              );
            })}
          </div>
        </div>
        {/* {userData.completedCourses.length > 0 ? (
            <CompletedCourseList userData={userData} isLoading={isLoading} />
          ) : (
            ""
          )} */}
        <div className="w-[80%] ml-[10%] flex flex-col gap-4 mb-30 mt-30">
          <div className="flex items-center justify-center mt-8">
            <h1 className="text-3xl font-bold text-center w-[30%] h-18 bg-gray-200"></h1>
          </div>
          {[...Array(5)].map((_, idx) => {
            return (
              <div className="courses flex items-center justify-between w-[100%] px-5 py-1 bg-gray-200 h-18 w-[100%]"></div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="overview h-[43vh] px-[15%] py-[4%]">
        <h1 className="heading text-center text-3xl font-bold">Overview</h1>

        <div className="w-[70%] ml-[18%] user-courses flex items-center justify-between mt-20">
          <div className="enrolled border-gray-100 border-2 shadow-md px-4 py-1">
            <p className="text-[15px]">Total Courses Enrolled</p>
            <h3 className="font-bold text-lg text-center mt-4">
              {!userData.enrolledCourses ? 0 : userData.enrolledCourses.length}
            </h3>
          </div>

          <div className="completed border-gray-100 border-2 shadow-md px-4 py-1">
            <p className="text-[15px]">Total Courses Completed</p>
            <h3 className="font-bold text-lg text-center mt-2">
              {!userData.completedCourses
                ? 0
                : userData.completedCourses.length}
            </h3>
          </div>
        </div>
      </div>

      {userData.enrolledCourses?.length > 0 ||
      userData.completedCourses?.length > 0 ? (
        <>
          <div className="enrolled-courses ">
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-bold text-center w-[10%]">
                Enrolled Courses
              </h1>
            </div>

            <EnrolledCourseList userData={userData} isLoading={isLoading} />
          </div>
          {userData.completedCourses.length > 0 ? (
            <CompletedCourseList userData={userData} isLoading={isLoading} />
          ) : (
            ""
          )}
        </>
      ) : (
        <img className="ml-[30%] w-[40%] h-[44vh] rounded-lg" src={logo} />
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
