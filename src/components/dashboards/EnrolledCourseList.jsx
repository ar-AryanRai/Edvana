import React from "react";
import EnrolledCard from "./EnrolledCard";

const EnrolledCourseList = ({ userData, isLoading }) => {
  return (
    <div className="popular-courses my-6 w-[85%] ml-[7.5%]">
      <div className="cards flex items-center flex-wrap justify-center gap-4">
        {isLoading
          ? [...Array(5)].map((_, idx) => {
              return (
                <div className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"></div>
              );
            })
          : null}
        {userData.enrolledCourses.map((ele, i) => {
          return <EnrolledCard key={i} courseData={ele} />;
        })}
      </div>
    </div>
  );
};

export default EnrolledCourseList;
