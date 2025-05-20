import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const PopularCourses = ({ fetchData }) => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData("popular courses").then((data) => {
      setPopularCourses(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="popular-courses mb-10 w-[85%] ml-[7.5%]  mt-15">
      <h1 className="text-center font-bold text-2xl mb-8">Popular Courses</h1>
      <div className="cards flex items-center justify-center flex-wrap gap-4">
        {loading
          ? [...Array(5)].map((_, idx) => {
              return (
                <div className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"></div>
              );
            })
          : null}
        {popularCourses.map((ele, idx) => {
          return <CourseCard data={ele} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default PopularCourses;
