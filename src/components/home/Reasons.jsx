import React from "react";
import small1 from "../../images/small1.jpg";
import small2 from "../../images/small2.jpg";
import small3 from "../../images/small3.jpg";

const Reasons = () => {
  return (
    <div className="reasons-to-chose w-[80%] ml-[10%] bg-[#1E293B] rounded-lg py-8 mt-30">
      <h1 className="text-center text-3xl font-bold text-[#F1F5F9]">
        Reasons To Choose Us
      </h1>

      <div className="reasons mt-8 flex w-[100%]">
        <div className="reason1 w-1/3 flex flex-col items-center justify-center gap-4">
          <img
            className="w-[80px] h-[80px] drop-shadow-[0_0_6px_rgba(99,102,241,0.5)] rounded"
            src={small1}
            alt=""
          />
          <h3 className="font-bold text-xl text-center w-[40%] text-[#F1F5F9]">
            Low Cost Ventures
          </h3>
          <p className="text-center w-[80%] text-[#CBD5E1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>

        <div className="reason2 w-1/3 flex flex-col items-center gap-4">
          <img className="w-[80px] h-[80px] drop-shadow-[0_0_6px_rgba(99,102,241,0.5)] rounded" src={small2} alt="" />
          <h3 className="font-bold text-xl text-center w-[40%] text-[#F1F5F9]">
            Large User Base
          </h3>
          <p className="text-center w-[80%] text-[#CBD5E1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>

        <div className="reason3 w-1/3 flex flex-col items-center justify-center gap-4">
          <img className="w-[80px] h-[80px] drop-shadow-[0_0_6px_rgba(99,102,241,0.5)] rounded" src={small3} alt="" />
          <h3 className="font-bold text-xl text-center w-[30%] text-[#F1F5F9]">
            Trusted Platform
          </h3>
          <p className="text-center w-[80%] text-[#CBD5E1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
