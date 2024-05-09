import { createContext, useEffect, useState } from "react";
import axios from "axios";

// import { food_list } from "../assets/frontend_assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState({})
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] - 1}))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let iteminfo = food_list.find((product)=> product._id === item);
                totalAmount += iteminfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

        const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    // console.log(food_list);

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));     
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;