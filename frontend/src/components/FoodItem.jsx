import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({id, name, price, description, image}) => {

    // const [itemCount, setItemCount] = useState(0)

    const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);
 

  return <div className="food-item w-full m-auto rounded-2xl shadow-lg transition-[0.3s] animate-fadeIn-Anim">
    <div className="food-item-img-container relative">
        <img className="food-item-image w-full rounded-t-2xl " src={url+"/images/"+image} alt="" />
        {
            !cartItems[id] ? <img className="add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-counter absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-[50px] bg-white">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
    </div>
    <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between items-center mb-3">
            <p className="font-medium text-xl">{name}</p>
            <img className=" w-16" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-sm">{description}</p>
        <p className="food-item-price text-[#ff574a] text-2xl font-medium my-2 mx-0">₹{price}</p>
    </div>
  </div>;
};

export default FoodItem;
