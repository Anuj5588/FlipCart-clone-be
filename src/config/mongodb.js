// db.js
import mongoose from "mongoose";

// Replace with your MongoDB connection string
console.log(process.env.MongoDB_URL)
const mongoURI = process.env.MongoDB_URL;

 export const connectionwithMongoose=async()=>{ 
    try{
    await mongoose.connect(mongoURI)
   console.log('MongoDB Connected...')
    
     } catch(err ){console.log(err)};
}


