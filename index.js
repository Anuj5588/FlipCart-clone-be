import 'dotenv/config'
import express from 'express'
import  productRouter from './routes/productRoutes/product.route.js'
import useRouter from './routes/userRoutes/user.route.js';
import postRouter from './routes/userRoutes/post.route.js';
import { authVerify } from './src/middleware/basicAuthitication.middleware.js';
import {connectionwithMongoose} from './src/config/mongodb.js'
import bodyParser from 'body-parser';
import cors  from 'cors'

const app = express();
const port = process.env.PORT||8000;


const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests only from localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    credentials: true, // Allow credentials (cookies, etc.)
  };
  
  
  app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce App")
})
// Middleware to parse JSON bodies
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'json' }))
app.use('/api/products',authVerify,productRouter)
app.use('/api/users',useRouter)
app.use('/api/post',postRouter)
// app.use('/api/orders',productRouter)
// app.use('/api/cart',productRouter)



 app.listen(process.env.PORT,'0.0.0.0',(err)=>{


    if(err){
        console.log(err)
    }
console.log("Server is up and runing on port",port)
connectionwithMongoose()
})



