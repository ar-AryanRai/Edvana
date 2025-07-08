import React, { useContext } from "react";
import Navbar from "../components/coursePlayer/Navbar";
import Footer from "../components/home/Footer";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const CourseOverview = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { courseData, playlistId } = location.state || {};
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { setUserData } = useContext(AuthContext);

  const present =
    userData.enrolledCourses?.find((ele) => ele.playlistId === playlistId) ||
    userData.completedCourses?.find((ele) => ele.playlistId === playlistId);

  return (
    <div className="font-sans text-white ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Course Title */}
      <div className="text-center py-10 mt-7">
        <h1 className="text-2xl font-bold">{courseData?.snippet?.title}</h1>
        <p className="text-sm mb-6 mt-7">
          <strong>Instructor:</strong> {courseData?.snippet?.channelTitle}
        </p>
        <p className="w-[64%] mx-auto text-sm text-gray-600">
          {courseData?.snippet?.description}
        </p>
      </div>

      <div className="w-full flex justify-center pt-2 pb-16">
        <div className="bg-slate-700 text-center px-10 py-16 rounded-md shadow-md w-[90%] md:w-[70%]">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-8">
            Unlock Your Potential
          </h2>
          <p className="text-white mb-6 w-[80%] ml-[10%]">
            Join our expert-led course today and gain the skills you need to
            succeed. Start your journey towards excellence now!
          </p>
          <button
            className="bg-orange-400 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded cursor-pointer active:scale-90"
            onClick={() => {
              const courseName = courseData?.snippet?.title;
              const listId = courseData?.id?.playlistId;
              const channelName = courseData?.snippet?.channelTitle;
              const thumbnail = courseData?.snippet?.thumbnails?.default?.url;
              const present = userData?.enrolledCourses?.find(
                (ele) => ele.playlistId === listId
              );

              const courseDetail = {
                name: courseName,
                playlistId: listId,
                channelName: channelName,
                thumbnail: thumbnail,
              };

              if (!present) {
                if(!userData){
                  navigate("/login");
                  return;
                }

                const updatedUserData = {
                  ...userData,
                  enrolledCourses: [...userData.enrolledCourses, courseDetail],
                };
                setUserData(updatedUserData);
                localStorage.setItem(
                  "userData",
                  JSON.stringify(updatedUserData)
                );
                const userList =
                  JSON.parse(localStorage.getItem("userList")) || [];
                const updatedUserList = userList.map((user) =>
                  user.email === updatedUserData.email ? updatedUserData : user
                );
                localStorage.setItem(
                  "userList",
                  JSON.stringify(updatedUserList)
                );
              }

              navigate("/course-player", { state: { courseDetail } });
            }}
          >
            {present ? "Go to Course" : "Enroll Now"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseOverview;
