import React, { useEffect, useState } from "react";
import Navbar from "../components/coursePlayer/Navbar";
import Notes from "../components/coursePlayer/Notes";
import VideoList from "../components/coursePlayer/VideoList";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const CoursePlayer = ({ apiKey }) => {
  const [currentVideoData, setCurrentVideoData] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const [videoPlayerData, setVideoPlayerData] = useState(null);
  const [playListData, setPlayListData] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const courseDetail = location.state.courseDetail || {};

  const { isLoggedIn, setIsLoggedIn, setUserData, setUserList } =
    useContext(AuthContext);

  const fetchData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${courseDetail.playlistId}&maxResults=50&key=${apiKey}&pageToken=${pageToken}`
    );
    const data = await res.json();
    const updatedList = [...playListData, ...data.items];
    setIsLoading(false);
    // setVideoPlayerData(data);
    setPageToken(data.nextPageToken || null);
    setPlayListData(updatedList);
  };

  const loadData = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData(); // fetch on mount
  }, []);

  useEffect(() => {
    if (playListData.length > 0 && playListData[currentVideoIndex]) {
      setCurrentVideoData(playListData[currentVideoIndex].snippet);
    }
  }, [playListData, currentVideoIndex]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  // if (currentVideoData === null && videoPlayerData === null) {
  //   return <div className="text-center mt-10 text-xl">Loading...</div>;
  // }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userList = JSON.parse(localStorage.getItem("userList"));

  const updatedUserList = userList.filter(
    (ele) => ele.email !== userData.email
  );

  const alreadyCompleted = userData.completedCourses.find(
    (ele) => ele.playlistId === courseDetail.playlistId
  );

  const handleMarkCourseAsCompleted = () => {
    const updatedUserData = { ...userData };
    updatedUserData.enrolledCourses = updatedUserData.enrolledCourses.filter(
      (ele) => ele.playlistId !== courseDetail.playlistId
    );
    updatedUserData.completedCourses.push(courseDetail);
    setUserData(updatedUserData);
    updatedUserList.push(updatedUserData);
    setUserList(updatedUserList);
    localStorage.setItem("userList", JSON.stringify(updatedUserList));
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  return (
    <>
      <div className="">
        {isLoading ? (
          <div className="max-w-[100vw] min-h-[100vh] animate-pulse">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedIn} />

            <div className="flex items-center justify-between px-[10%] mt-10 mb-10 gap-20">
              <h1 className="w-[70%] rounded-lg h-16 bg-gray-200"></h1>
              <button className="h-16 w-[20%] rounded-lg bg-gray-200"></button>
            </div>

            <div className="video-frame w-[80%] h-[70vh] ml-[10%]">
              <div className="w-[100%] h-[90%] bg-gray-200 rounded-lg"></div>

              <p className="w-[70%] bg-gray-200 mt-2 h-10 rounded-lg"></p>
            </div>

            <div className="flex gap-8">
              <div className="w-[40%] h-[30vh] ml-[10%] mt-20">
                <h2 className="h-12 w-60 px-5 bg-gray-200 rounded-lg"></h2>
                <div className="text-area mt-3 h-[70%] w-[100%] bg-gray-200 rounded-lg"></div>
                <div className="btns flex gap-8 px-4 mt-4">
                  <div className="save-notes rounded-lg h-10 w-24 bg-gray-200"></div>

                  <div className="edit px-4 rounded-lg h-10 w-24 bg-gray-200"></div>
                </div>
              </div>

              <div className="w-[38%] ml-10 mb-20 pt-8">
                <h2 className="h-12 w-60 mb-4 mt-10 bg-gray-200 rounded-lg"></h2>
                <div className="bg-gray-200 rounded-lg px-4 py-2 h-[100vh] overflow-auto"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedIn} />

            <div className="flex items-center justify-between px-[10%] gap-20">
              <h1 className="text-center font-bold text-4xl mt-10 mb-10 underline underline-offset-4">
                {courseDetail.name}
              </h1>
              <button
                className="bg-green-600 text-white text-sm w-[20%] font-semibold py-1 px-4 rounded-lg cursor-pointer active:scale-90"
                onClick={handleMarkCourseAsCompleted}
              >
                {alreadyCompleted ? "Completed" : "Mark Course as Completed"}
              </button>
            </div>

            <div className="video-frame w-[80%] h-[70vh] ml-[10%]">
              <iframe
                width="100%"
                height="100%"
                className="border-4 rounded-lg border-slate-700"
                src={`https://www.youtube.com/embed/${currentVideoData?.resourceId?.videoId}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              <p className="font-bold mt-2 pl-4 text-[18px]">
                {currentVideoIndex + 1 + ") " + currentVideoData?.title}
              </p>
            </div>

            <div className="flex gap-8">
              <Notes videoId={currentVideoData?.resourceId?.videoId} />

              <VideoList
                playlistData={playListData}
                nextPageToken={pageToken}
                handleVideoChange={handleVideoChange}
                loadData={loadData}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoursePlayer;
