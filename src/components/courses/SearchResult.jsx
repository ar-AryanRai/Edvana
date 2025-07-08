import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";

const SearchResult = ({ data, searchValue }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="popular-courses pb-10 w-[85%] ml-[7.5%]  mt-15 min-h-screen">
      <h1 className="text-center font-bold text-2xl mb-8">
        {searchValue} Results...
      </h1>
      <div className="cards flex items-center flex-wrap justify-center mb-15 gap-4">
        {loading
          ? [...Array(50)].map((_, idx) => {
              return (
                <div
                  className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                  key={idx}
                ></div>
              );
            })
          : null}
        {data.map((ele, idx) => {
          return <CourseCard data={ele} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
