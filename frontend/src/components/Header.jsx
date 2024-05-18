import React from "react";
// import img from "../assets/frontend_assets/header_img.png";
import "./Header.css"

const Header = () => {
  return (
    <div
      className={`header h-[34vw] my-[30px] mx-auto bg-no-repeat bg-contain relative`}
    >
      <div className="header-contents absolute flex flex-col gap-[1.5vw] md:max-w-[50%] max-w-[65%] bottom-[10%] left-[6vw] items-start animate-fadeIn-Anim ">
        <h2 className="text-white font-medium text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] md:block hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary experties. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-medium md:py-[1vw] py-[2vw] md:px-[2.3vw] px-[4vw] bg-white text-[max(1vw,13px)] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
