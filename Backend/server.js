import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



//app config
const app = express();
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://tomato-food-ordering-app-client-f7k2e4y7p.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  })
);

// db connection 
connectDb();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);


app.get("/", (req, res)=>{
    res.send("Hello express")
})

app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${PORT}`)  
})


//mongodb+srv://swainlipun1:Lipu8144@cluster0.9euwvqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//
//mongodb+srv://swainlipun1:Lipu8144@cluster0.9euwvqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0