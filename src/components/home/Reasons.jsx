import React from "react";
import small1 from "../../images/small1.jpg";
import small2 from "../../images/small2.jpg";
import small3 from "../../images/small3.jpg";

const Reasons = () => {
  return (
    <div className="reasons-to-chose w-[80%] ml-[10%]">
      <h1 className="mt-15 text-center text-3xl font-bold">
        Reasons To Choose Us
      </h1>

      <div className="reasons mt-8 flex w-[100%]">
        <div className="reason1 w-1/3 flex flex-col items-center justify-center gap-4">
          <img className="w-[80px] h-[80px] border-2" src={small1} alt="" />
          <h3 className="font-bold text-xl text-center w-[40%]">
            Low Cost Ventures
          </h3>
          <p className="text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>

        <div className="reason2 w-1/3 flex flex-col items-center gap-4">
          <img className="w-[80px] h-[80px] border-2" src={small2} alt="" />
          <h3 className="font-bold text-xl text-center w-[40%]">
            Large User Base
          </h3>
          <p className="text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>

        <div className="reason3 w-1/3 flex flex-col items-center justify-center gap-4">
          <img className="w-[80px] h-[80px] border-2" src={small3} alt="" />
          <h3 className="font-bold text-xl text-center w-[30%]">
            Trusted Platform
          </h3>
          <p className="text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
