import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-3xl">Explore our menu</h1>
      <p className="explore-menu-text max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-8 my-5 mx-0 overflow-x-scroll">
        {
            menu_list.map((item, index)=>(
                <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index} className="text-center">
                    <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s] ${category === item.menu_name? "x-active": ""}`} />
                    <p className="mt-2 text-[#747474] cursor-pointer text-[max(1.4vw,16px)]">{item.menu_name}</p>
                </div>
            ))
        }
      </div>
      <hr className=" my-3 mx-0 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
