// db.js
import mongoose from "mongoose";

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/ecomdb';

 export const connectionwithMongoose=async()=>{ 
    try{
    await mongoose.connect(mongoURI)
   console.log('MongoDB Connected...')
    
     } catch(err ){console.log(err)};
}


