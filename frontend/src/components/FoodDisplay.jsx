import React, { useContext } from "react";
import { StoreContext } from "../main";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return <div className="food-display mt-8" id="food-display">
    <h2 className="text-[max(2vw,24px)] font-semibold">Top dishes near you</h2>
    <div className="food-display-list grid md:grid-cols-displayItems mt-8 gap-7 gap-y-12">
        {
            food_list.map((food, index) => {

                if(category == "All" || category === food.category){

                    return(
                        <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
                    )
                }
            })
        }
    </div>
  </div>;
};

export default FoodDisplay;
