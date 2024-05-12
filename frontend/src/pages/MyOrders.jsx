import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../main";
import axios from "axios";
import { assets } from "../assets/frontend_assets/assets";

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([])

    const fetchOrders = async() =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])
    

  return <div className="my-orders my-12 mx-0">
    <h2>MyOrders</h2>
    <div className="container flex flex-col gap-5 mt-7">
        {data.map((order,index)=>{
            return(
                <div key={index} className="my-orders-order grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center md:text-lg px-5 py-2 text-[#454545] border border-solid border-[#ff574a] text-xs">
                    <img src={assets.parcel_icon} alt="" className="w-[50px]" />
                    <p >{order.items.map((item,index)=>{
                        if(index === order.items.length - 1){
                            return item.name+" x "+item.quantity
                        }else{
                            return item.name+" x "+item.quantity+", "

                        }
                    })}</p>
                    <p>₹{order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span className="text-[#ff574a]">&#x25cf;</span><b className="font-medium text-[#454545]">{order.status}</b></p>
                    <button onClick={fetchOrders} className="md:py-3 px-0 text-[10px] md:text-[14px] rounded bg-[#ffe1e1] border-none cursor-pointer text-[#454545]">Track Order</button>
                </div>
            )
        })}
    </div>
    </div>;
};

export default MyOrders;
