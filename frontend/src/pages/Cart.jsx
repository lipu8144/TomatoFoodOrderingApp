import React, { useContext } from "react";
import { StoreContext } from "../main";
import { useNavigate } from "react-router-dom";

export const Cart = () => {


  const {cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 20

  return (
    <div className="cart mt-[100px]">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] mx-0 my-[10px] text-black">
                  <img src={url+"/images/"+item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p
                    className="cross cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className="h-[1px] bg-[e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-20 flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]">
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
          <button
            onClick={() => navigate("/order")}
            className="text-white border-none bg-[#ff574a] w-[max(15vw,200px)] px-0 py-[12px] rounded cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode flex-1 justify-start">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                type="text"
                placeholder="promo code"
                className="border-none bg-transparent outline-none pl-2"
              />
              <button className="w-[max(10vw,150px)] px-[5px] py-[12px] bg-black border-none text-white rounded">
                Sumbit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
