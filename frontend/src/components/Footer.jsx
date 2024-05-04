import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {

  return (
    <div
      className="footer mt-[100px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20"
      id="footer"
    >
      <div className="footer-content w-full grid md:grid-cols-[2fr_1fr_1fr] md:gap-20 gap-7">
        <div className="footer-content-left flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            debitis vero tempore tempora, repudiandae eos! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quidem ducimus dolor ab
            laudantium repellat veniam!
          </p>
          <div className="footer-social-icons flex gap-4">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
          <h2 className="text-2xl font-medium text-white">COMPANY</h2>
          <ul className=" cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
          <h2 className="text-2xl font-medium text-white">GET IN TOUCH</h2>
          <ul>
            <li>+1-212-654-9958</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 border-none bg-gray-300" />
      <p className="footer-copyright text-center">
        Copyright {new Date().getFullYear()} ©️ Tomato.com - All Right
        Reserverd.{" "}
      </p>
    </div>
  );
};

export default Footer;
