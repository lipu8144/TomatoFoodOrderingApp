import React, { useContext, useState } from "react";
import {assets} from "../assets/frontend_assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../main";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const[hover, setHover] = useState(false)

  const { getTotalCartAmount, token,setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleProfile = () =>{
    setHover(true)
  }

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="navbar px-0 py-5 flex justify-between items-center sticky top-0 z-10 bg-white ">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo md:w-36 w-28" />
      </Link>
      <ul className="navbar-menu md:flex hidden list-none gap-5 text-[#49557e] md:text-xl text-base capitalize font-outfit cursor-pointer">
        <Link
          to="/"
          onClick={(e) => setMenu("home")}
          className={menu === "home" ? "n-active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={(e) => setMenu("menu")}
          className={menu === "menu" ? "n-active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={(e) => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "n-active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={(e) => setMenu("contact-us")}
          className={menu === "contact-us" ? "n-active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right flex items-center md:gap-10 gap-5">
        <img src={assets.search_icon} alt="" className="w-[20px]" />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="w-[20px]" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-2 min-h-2 rounded -top-2 -right-2 bg-[#FF574A]"
            }
          ></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="md:text-xl text-base bg-transparent text-[#49557e] border border-solid border-[#FF574A] md:py-[10px] py-[7px] md:px-[30px] px-[20px] rounded-3xl cursor-pointer transition-[.3s] hover:bg-[#fff4f2]"
          >
            sign in
          </button>
        ) : (
          <div
            className="navbar-profile relative cursor-pointer"
            onClick={handleProfile}
          >
            <img src={assets.profile_icon} alt="" />
            <ul
              className={`nav-profile-dropdown absolute  right-0 z-10 ${
                hover
                  ? "flex flex-col gap-2 bg-slate-50 px-[25px] py-[12px] rounded border border-solid border-[#ff574a] outline"
                  : "hidden"
              } `}
            >
              <li className="flex items-center gap-2 cursor-pointer hover:text-[#ff574a]">
                <img className="w-[20px]" src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout} className="flex items-center gap-2 cursor-pointer hover:text-[#ff574a]">
                <img className="w-[20px]" src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
