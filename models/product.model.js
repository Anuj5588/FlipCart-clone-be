import mongoose from "mongoose";

const {Schema} = mongoose;
 

const productSchema = new Schema({
    name:String,
    desc:String,
    price:Number,
    imageUrl:String,
    ratings: {
        1: { type: Number, default: 0 }, // Count of 1-star ratings
        2: { type: Number, default: 0 }, // Count of 2-star ratings
        3: { type: Number, default: 0 }, // Count of 3-star ratings
        4: { type: Number, default: 0 }, // Count of 4-star ratings
        5: { type: Number, default: 0 }, // Count of 5-star ratings
    },
}, {timestap:true})

 export const Product = mongoose.model('Product', productSchema)