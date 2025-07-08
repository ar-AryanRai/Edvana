import React from "react";
import { useNavigate } from "react-router-dom";

const CompletedCourseList = ({ userData, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center px-30 my-15">
      <div className="w-[100%]">
        <h2 className="text-3xl text-white text-center font-bold mb-6">
          Completed Courses
        </h2>
        <ul className="space-y-3 bg-slate-700 text-blue-100 rounded">
          {userData.completedCourses.map((ele, index) => (
            <div
              key={index}
              className={`courses flex items-center justify-between w-[100%] px-5 py-1 ${
                index % 2 == 0 ? "" : "bg-gray-200"
              }`}
            >
              <li>{ele.name}</li>
              <button
                className="px-4 py-2 border-2 border-orange-400 text-orange-400 rounded-md hover:bg-orange-400 hover:text-white transition cursor-pointer active:scale-90"
                onClick={() => {
                  const courseDetail = ele;
                  navigate("/course-player", { state: { courseDetail } });
                }}
              >
                Revisit Course
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompletedCourseList;
