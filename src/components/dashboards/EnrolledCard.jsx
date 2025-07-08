import React from "react";
import { useNavigate } from "react-router-dom";

const EnrolledCard = ({ courseData }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[19%] relative rounded-lg bg-slate-700 p-1 text-white hover:scale-[1.02] transition-scale transition-shadow duration-300 ease-in-out">
      <div
        className="image w-[100%] rounded-md h-[22vh] bg-center bg-cover"
        style={{
          background: `url(${courseData.thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="details px-1 mb-10">
        <h2 className="title font-bold mt-1.5 line-clamp-2 h-12">
          {courseData.name}
        </h2>
        <p className="text-[12px] mt-1">{courseData.channelName}</p>
        <p className="rating text-[12px] mt-1">Rating: 4.8/5</p>
      </div>
      <div
        className="enroll w-[97%] rounded-md text-center absolute bottom-1 py-1 border-2 border-orange-400 text-orange-400 cursor-pointer active:scale-90 transition-background duration-300 ease-in-out"
        onMouseOver={(e) => {
          e.currentTarget.classList.add("bg-orange-400", "text-white");
        }}
        onMouseOut={(e) => {
          e.currentTarget.classList.remove("bg-orange-400", "text-white");
        }}
        onClick={() => {
          const courseDetail = courseData;
          navigate("/course-player", { state: { courseDetail } });
        }}
      >
        Go to course
      </div>
    </div>
  );
};

export default EnrolledCard;
