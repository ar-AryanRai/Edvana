import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import data from "../../util/reviewData";

const SliderTestimonials = () => {
  const [i, setI] = useState(0);
  const intervalRef = useRef(null);

  // ✅ Interval function using latest state
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % data.length); // safe state update
    }, 2000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const handleClickLeft = () => {
    setI((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    resetInterval();
  };

  const handleRightClick = () => {
    setI((prev) => (prev + 1) % data.length);
    resetInterval();
  };

  return (
    <div className="review-slider-container">
      <div
        className="review-slider relative px-10 py-4 gap-10 w-[80%] ml-[10%] mt-5 h-[35vh] border-1 border-gray-300 rounded-lg mb-10 flex"
        key={i}
      >
        <div
          className="left w-[25%] h-[100%] rounded-lg bg-cover bg-no-repeat bg-top-center"
          style={{ backgroundImage: `url(${data[i].profilePic})` }}
        ></div>

        <div className="right h-[100%] px-2 py-4 w-[80%]">
          <div className="stars mb-4">
            {[...Array(5)].map((_, idx) => (
              <FontAwesomeIcon
                key={idx}
                icon={faStar}
                style={{ color: "#FFD43B", fontSize: "20px" }}
              />
            ))}
          </div>

          <div className="review mb-4">{data[i].review}</div>
          <div className="name font-bold">{data[i].name}</div>
          <div className="text-sm">{data[i].courseName}</div>

          <div className="navigation flex absolute bottom-10 right-10">
            <div
              className="left-move cursor-pointer active:scale-90"
              onClick={handleClickLeft}
            >
              <FontAwesomeIcon icon={faCircleLeft} />
            </div>
            <div className="circles flex items-center gap-1 mx-1">
              {[...Array(data.length)].map((_, x) => (
                <div
                  key={x}
                  className={`w-[12px] h-[12px] rounded-full ${
                    i === x ? "bg-[#E63600]" : "bg-black"
                  }`}
                ></div>
              ))}
            </div>
            <div
              className="right-move cursor-pointer active:scale-90"
              onClick={handleRightClick}
            >
              <FontAwesomeIcon icon={faCircleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTestimonials;
