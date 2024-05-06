import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className="login-popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg animate-fadeIn-Anim transition-[0.5s]">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="text-xl">{currState}</h2>
          <img
            className="cursor-pointer w-4"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="p-2 border-none rounded text-white bg-[#ff574a] text-sm cursor-pointer">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition flex items-start gap-2 -mt-3">
          <input className=" mt-[5px]" type="checkbox" required />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className=" cursor-pointer text-[#ff574a] font-bold"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-[#ff574a] font-bold"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
