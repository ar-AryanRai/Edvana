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
    <div className="footer bg-[#FAFAFB] px-20 py-2 h-[55vh] pt-15 flex flex-col justify-center items-center">
      <div className="company-name flex items-center text-2xl font-bold">
        <img className="ml-4" src={logo2} alt="" /> ElevateU
      </div>

      <div className="newsletter mt-6">
        <h3 className="text-center mb-1">Subscribe to our newsletter</h3>
        <div className="flex h-[40px] rounded-lg overflow-hidden">
          <div className="mailInp bg-[#F3F4F6] py-2 pl-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="text"
              className="ml-4 border-none outline-none w-[250px]"
              placeholder="Your email address"
            />
          </div>
          <div className="bg-[#E63600] py-2 px-4 h-[100%] text-white">
            Subscribe
          </div>
        </div>
      </div>

      <div className="links flex gap-15 mt-8">
        <div className="product">
          <h3 className="font-bold">Product</h3>
          <p className="text-sm mt-1">Features</p>
          <p className="text-sm mt-1">Pricing</p>
        </div>

        <div className="resources">
          <h3 className="font-bold">Resources</h3>
          <p className="text-sm mt-1">Blog</p>
          <p className="text-sm mt-1">User Guides</p>
          <p className="text-sm mt-1">Webinars</p>
        </div>

        <div className="company">
          <h3 className="font-bold">Company</h3>
          <p className="text-sm mt-1">About us</p>
          <p className="text-sm mt-1">Contact us</p>
        </div>

        <div className="plans">
          <h3 className="font-bold">Plans & Pricing</h3>
          <p className="text-sm mt-1">Personal</p>
          <p className="text-sm mt-1">Start up</p>
          <p className="text-sm mt-1">Organization</p>
        </div>
      </div>

      <div className="copyrights mt-20 text-[13px] flex items-center gap-200 ">
        <div className="lef">
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
  );
};

export default Footer;
