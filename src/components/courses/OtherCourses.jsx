import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const OtherCourses = ({ fetchData }) => {
  const [webDev, setWebDev] = useState([]);
  const [loadingWd, setLoadingWd] = useState(true);
  const [ai, setAI] = useState([]);
  const [loadingAi, setLoadingAi] = useState(true);
  const [seo, setSEO] = useState([]);
  const [loadingSeo, setLoadingSeo] = useState(true);
  const [marketing, setMarketing] = useState([]);
  const [loadingMarketing, setLoadingMarketing] = useState(true);
  const [design, setDesign] = useState([]);
  const [loadingDesign, setLoadingDesign] = useState(true);

  useEffect(() => {
    fetchData("web development").then((data) => {
      setWebDev(data);
      setLoadingWd(false);
    });
    fetchData("artificial intelligence").then((data) => {
      setAI(data);
      setLoadingAi(false);
    });
    fetchData("SEO").then((data) => {
      setSEO(data);
      setLoadingSeo(false);
    });
    fetchData("digital marketing").then((data) => {
      setMarketing(data);
      setLoadingMarketing(false);
    });
    fetchData("graphic designing").then((data) => {
      setDesign(data);
      setLoadingDesign(false);
    });
  }, []);
  return (
    <div className="course-by-subject">
      <h2 className="text-center font-bold text-3xl mt-10">
        Courses by Subject
      </h2>

      <div className="popular-courses mb-10 w-[85%] ml-[7.5%] mt-8">
        <h1 className="text-center font-bold text-2xl mb-8">Web Development</h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4">
          {loadingWd
            ? [...Array(5)].map((_, idx) => {
                return (
                  <div
                    className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                    key={idx}
                  ></div>
                );
              })
            : null}
          {webDev.map((ele, idx) => {
            return <CourseCard data={ele} key={idx} />;
          })}
        </div>
      </div>

      <div className="popular-courses mb-10 w-[85%] ml-[7.5%] ">
        <h1 className="text-center font-bold text-2xl mb-8">
          Artificial Intelligence
        </h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4">
          {loadingAi
            ? [...Array(5)].map((_, idx) => {
                return (
                  <div
                    className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                    key={idx}
                  ></div>
                );
              })
            : null}
          {ai.map((ele, idx) => {
            return <CourseCard data={ele} key={idx} />;
          })}
        </div>
      </div>

      <div className="popular-courses  mb-10 w-[85%] ml-[7.5%]">
        <h1 className="text-center font-bold text-2xl mb-8">
          Digital Marketing
        </h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4">
          {loadingMarketing
            ? [...Array(5)].map((_, idx) => {
                return (
                  <div
                    className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                    key={idx}
                  ></div>
                );
              })
            : null}
          {marketing.map((ele, idx) => {
            return <CourseCard data={ele} key={idx} />;
          })}
        </div>
      </div>

      <div className="popular-courses mb-10 w-[85%] ml-[7.5%]">
        <h1 className="text-center font-bold text-2xl mb-8">SEO</h1>
        <div className="cards flex items-center justify-center  flex-wrap gap-4">
          {loadingSeo
            ? [...Array(5)].map((_, idx) => {
                return (
                  <div
                    className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                    key={idx}
                  ></div>
                );
              })
            : null}
          {seo.map((ele, idx) => {
            return <CourseCard data={ele} key={idx} />;
          })}
        </div>
      </div>

      <div className="popular-courses pb-10 w-[85%] flex-wrap ml-[7.5%]">
        <h1 className="text-center font-bold text-2xl mb-8">
          Graphic Designing
        </h1>
        <div className="cards flex flex-wrap items-center justify-center gap-4">
          {loadingDesign
            ? [...Array(5)].map((_, idx) => {
                return (
                  <div
                    className="skeletal inset-0 animate-pulse bg-gray-200 w-[19%] h-[37vh] bg-gray-200 relative rounded-lg shadow-md shadow-gray-300"
                    key={idx}
                  ></div>
                );
              })
            : null}
          {design.map((ele, idx) => {
            return <CourseCard data={ele} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherCourses;
