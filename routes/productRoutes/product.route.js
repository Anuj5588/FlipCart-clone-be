import express from 'express'
import ProductController from './../../controller/productController/product.controller.js';
import {upload} from './../../src/middleware/fileUpload.middleware.js';


const productRouter = express.Router()
const productControllers = new ProductController()

productRouter.get('/', productControllers.getProduct)
productRouter.post('/add-product',upload.single('image'),productControllers.addProduct )
productRouter.get('/one-product/:id',productControllers.getOneProduct )

export default productRouter