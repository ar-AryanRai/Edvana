import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-7">Account Management</h2>
      <div className="flex gap-5">
        <button className="px-4 py-2 rounded-md text-[#E63600] bg-[#FFEDE8] hover:bg-[#ffdcd1] transition cursor-pointer">
          Edit Profile
        </button>
        <button className="px-4 py-2 rounded-md text-[#E63600] bg-[#FFEDE8] hover:bg-[#ffdcd1] transition cursor-pointer">
          Account Settings
        </button>
      </div>
    </div>
  );
};

export default Footer;
