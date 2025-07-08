import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  if (!data || !data.snippet) return null;

  return (
    <div className="min-w-[208.71px] w-[19%] relative rounded-lg bg-slate-700 p-1 text-white hover:scale-[1.02] transition-scale transition-shadow duration-300 ease-in-out">
      <div
        className="image w-full rounded-md h-[22vh] bg-center bg-cover"
        style={{
          backgroundImage: `url(${data.snippet.thumbnails.medium.url})`,
        }}
      ></div>
      <div className="details px-1 mb-10">
        <h2 className="title font-bold mt-1.5 overflow-hidden line-clamp-2 h-12">
          {data.snippet.title}
        </h2>
        <p className="text-[12px] mt-1">{data.snippet.channelTitle}</p>
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
          const playlistId = data.id.playlistId;
          // const url = `https://www.youtube.com/playlist?list=${listId}`;
          // { data, playlistId }
          navigate("/course-overview", {
            state: {
              courseData: data,
              playlistId: playlistId,
            },
          });
          // window.open(url, "_blank");
        }}
      >
        Enroll Now
      </div>
    </div>
  );
};

export default CourseCard;
