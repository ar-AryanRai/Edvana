import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Slider1 = ({ apiKey }) => {
  const [topCourses, setTopCourses] = useState([]);
  const [i, setI] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setI((prev) => (prev + 1 >= topCourses?.length ? 0 : prev + 1));
    }, 2000);
  };

  const handleLeftClick = () => {
    setI((prev) => (prev - 1 < 0 ? topCourses.length - 1 : prev - 1));
    startInterval();
  };

  const handleRightClick = () => {
    setI((prev) => (prev + 1 >= topCourses.length ? 0 : prev + 1));
    startInterval();
  };

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const search = "top courses";
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${search}&type=playlist&part=snippet`
        );
        const data = await response.json();
        setTopCourses(data.items);
      } catch (error) {
        alert("Error fetching top courses:", error);
      }
    };
    fetchTopCourses();

    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  startInterval();

  const handleOpenPlaylist = () => {
    navigate("/course-overview", { state: topCourses[i] });
  };

  if (!topCourses?.length || !topCourses[i]?.snippet) {
    return (
      <div className="relative">
        <div className="skeletal inset-0 animate-pulse bg-gray-200 rounded-lg z-0 mt-6 w-[60%] ml-[20%] h-[65vh] rounded-lg"></div>
        <PacmanLoader
          color="#D1D5DB"
          className="absolute -top-[280px] left-[50%] translate-x-[-50%]"
        />
      </div>
    );
  }

  return (
    <div className="slider mt-6 w-[60%] ml-[20%] h-[65vh] rounded-lg flex justify-center relative">
      <div
        className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer"
        style={{
          backgroundImage: `url(${topCourses[i].snippet.thumbnails.high.url})`,
        }}
        onClick={handleOpenPlaylist}
      ></div>
      <div className="left flex items-center justify-center w-[4%] h-[100%] absolute -left-15 top-0 z-[100]">
        <div
          className="h-[40px] w-[40px] bg-[#E63600] text-3xl rounded-[50%] flex items-center bg-transparent justify-center cursor-pointer"
          onClick={handleLeftClick}
        >
          <FontAwesomeIcon
            icon={faCircleLeft}
            className="text-orange-500 hover:text-orange-400"
          />
        </div>
      </div>

      <div className="content text-black px-4 py-1 w-[50%] bg-white/40 absolute bottom-10">
        <p className="text-center">{topCourses[i].snippet.title}</p>
      </div>

      <div className="right flex items-center justify-center w-[4%] h-[100%] absolute -right-15 top-0 z-[100]">
        <div
          className="h-[40px] w-[40px]  text-3xl rounded-[50%] flex items-center bg-transparent z-[100] justify-center cursor-pointer"
          onClick={handleRightClick}
        >
          <FontAwesomeIcon
            icon={faCircleRight}
            className="text-orange-500 hover:text-orange-400"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.2)] z-[1]"></div>
    </div>
  );
};

export default Slider1;
