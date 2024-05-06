import React, { useContext } from "react";
import { StoreContext } from "../main";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 20

  return (
    <form className="place-order md:flex items-start justify-between gap-[50px] mt-[100px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-medium mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
            type="text"
            placeholder="First name"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
            type="text"
            placeholder="City"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
            type="text"
            placeholder="Zip Code"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full mb-4 p-[10px] border border-solid border-[#c5c5c5] rounded outline-[#ff574a]"
          />
        </div>
        <input
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
          <button className="text-white border-none bg-[#ff574a] w-[max(15vw,200px)] px-0 py-[12px] rounded cursor-pointer mt-7">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
