import React from "react";
import { useNavigate } from "react-router-dom";

const CompletedCourseList = ({ userData, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center px-30 mt-30 mb-30">
      <div className="w-[100%]">
        <h2 className="text-3xl font-bold mb-6">Completed Courses</h2>
        <ul className="space-y-3 text-gray-800 shadow">
          {userData.completedCourses.map((ele, index) => (
            <div
              key={index}
              className={`courses flex items-center justify-between w-[100%] px-5 py-1 ${
                index % 2 == 0 ? "" : "bg-gray-200"
              }`}
            >
              <li>{ele.name}</li>
              <button
                className="px-4 py-2 border-2 border-[#E63600] text-[#E63600] rounded-md hover:bg-[#E63600] hover:text-white transition cursor-pointer active:scale-90"
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
