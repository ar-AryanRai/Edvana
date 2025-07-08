import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo2 from "../../images/logo2.png";

const Footer = () => {
  return (
    <div className="footer bg-[#0F172A] px-20 py-2 pt-15 mt-24 flex justify-center bg-slate-800">
      <div className="w-[80%] flex flex-col justify-center items-center text-[#CBD5E1]">
        <div className="company-name flex items-center text-2xl font-bold justify-center w-[100%] gap-4">
          <img className="rounded" src={logo2} alt="" /> ElevateU
        </div>

        <div className="newsletter mt-6">
          <h3 className="text-center mb-1">Subscribe to our newsletter</h3>
          <div className="flex h-[40px] rounded-lg overflow-hidden">
            <div className="mailInp py-2 pl-4  bg-slate-600">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                className="ml-4 border-none outline-none w-[250px]"
                placeholder="Your email address"
              />
            </div>
            <div className="bg-[#E63600] py-2 px-4 h-[100%] text-white cursor-pointer">
              Subscribe
            </div>
          </div>
        </div>

        <div className="links flex gap-15 mt-8">
          <div className="product">
            <h3 className="font-bold">Product</h3>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Features
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Pricing
            </p>
          </div>

          <div className="resources">
            <h3 className="font-bold">Resources</h3>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Blog
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              User Guides
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Webinars
            </p>
          </div>

          <div className="company">
            <h3 className="font-bold">Company</h3>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              About us
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Contact us
            </p>
          </div>

          <div className="plans">
            <h3 className="font-bold">Plans & Pricing</h3>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Personal
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Start up
            </p>
            <p className="text-sm mt-1 hover:text-[#818CF8] cursor-pointer">
              Organization
            </p>
          </div>
        </div>

        <div className="copyrights mt-20 text-[13px] w-[100%] flex items-center justify-between">
          <div className="lef ">
            &copy 2024 Brand, Inc.{" "}
            <span className="ml-5"> • Privacy • Terms • SiteMap</span>
          </div>
          <div className="social-handles text-lg flex gap-4">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC" }} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0a6ab2" }} />
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
