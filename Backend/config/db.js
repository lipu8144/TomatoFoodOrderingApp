import mongoose from "mongoose";

export const connectDb = async() => {
    await mongoose.connect(
      "mongodb+srv://swainlipun1:Lipu8144@cluster0.9euwvqt.mongodb.net/tomato"
    ).then(()=>console.log("DB connected successfuly")).catch(()=>console.log("something is wrong!"))
}