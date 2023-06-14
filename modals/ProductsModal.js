import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product = new Schema({
   
    title : String,
    price : Number,
    description: String,
    image : String,
    category:String,
    
})

export default mongoose.model("Products", Product)