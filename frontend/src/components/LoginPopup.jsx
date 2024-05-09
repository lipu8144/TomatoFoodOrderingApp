import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(e) =>{
      e.preventDefault()
      let newUrl = url;
      if(currState === "Login"){
        newUrl += "/api/user/login"
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data)
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false);
      }else{
        alert(response.data.message);
      }
    }


    // useEffect(()=>{
    //   console.log(data)
    // },[data])

  return (
    <div className="login-popup absolute z-20 w-full h-full bg-[#00000090] grid">
      <form onSubmit={onLogin} className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg animate-fadeIn-Anim transition-[0.5s]">
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
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            onChange={onChangeHandler}
            value={data.email}
            name="email"
            className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
            type="email"
            placeholder="Your email"
            required
          />
          <input
          onChange={onChangeHandler}
          value={data.password}
          name="password"
            className="border-2 border-solid border-[#c9c9c9] outline-none p-2 rounded"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="p-2 border-none rounded text-white bg-[#ff574a] text-sm cursor-pointer">{currState === "Sign Up" ? "Create account" : "Login"}</button>
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
