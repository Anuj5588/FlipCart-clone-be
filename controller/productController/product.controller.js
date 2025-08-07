 
import {Product} from '../../models/product.model.js'
 export default class ProductController{

    getProduct(req,res){
        const product =Product.getAllProduct()
        return res.status(200).json(product)
     }
    getOneProduct(req,res){
       const id = req.params.id
       const product = Product.getOneProduct(id)
       return res.status(200).json(product)
}
    async addProduct(req,res){
     const {id,name,desc,price}=req.body
     console.log(req)
     const imageUrl= req.file.path
     
    //  const productalreadyexist = await Product.findById({id})
      const product = await Product.create({name,desc,price,imageUrl})
      console.log(product)
        return res.status(200).json(product)

    }
    rateProduct(){

    }
     filterProduct(){}

 }