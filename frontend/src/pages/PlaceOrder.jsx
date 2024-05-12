import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2

  const placeOrder = async(e) =>{
    e.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(url+"/api/order/place",orderData, {headers:{token}})
    if(response.data.success){
      const {session_url} = response.data
      window.location.replace(session_url)
    }else{
      alert("Error s")
    }
    
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate("/cart")
    }else if(getTotalCartAmount() === 0){
      navigate("/cart")
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order md:flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-medium mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
          required
          name="firstName"
          onChange={onChangeHandler}
          value={data.firstName}
            type="text"
            placeholder="First name"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
          required
          name="lastName"
          value={data.lastName}
          onChange={onChangeHandler}
            type="text"
            placeholder="Last name"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <input
        required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
        />
        <input
        required
        name="street"
        onChange={onChangeHandler}
        value={data.street}
          type="text"
          placeholder="Street"
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
          required
          name="city"
          onChange={onChangeHandler}
          value={data.city}
            type="text"
            placeholder="City"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
          required
          name="state"
          onChange={onChangeHandler}
          value={data.state}
            type="text"
            placeholder="State"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
          required
          name="zipcode"
          onChange={onChangeHandler}
          value={data.zipcode}
            type="text"
            placeholder="Zip Code"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
          required
          name="country"
          onChange={onChangeHandler}
          value={data.country}
            type="text"
            placeholder="Country"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <input
        required
        name="phone"
        onChange={onChangeHandler}
        value={data.phone}
          type="text"
          placeholder="Phone"
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>₹{getTotalCartAmount() + deliveryFee}</b>
            </div>
          </div>
          <button type="submit" className="text-white border-none bg-[#ff574a] w-[max(15vw,200px)] px-0 py-[12px] rounded cursor-pointer mt-7">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
