
 import jwt from 'jsonwebtoken'

 // BASIC Authentication
 export const basicAuthentication = (req,res,next)=>{
     const {email, password} = req.body

 }


 // jwt Authentication



  export const authVerify = (req, res, next)=>{
 const token = req.headers['authorization']
    if(!token){
        return res.json("Unathorized")
    }
try{
    const payload = jwt.verify(token, 
    'hellpvjiwrjv');

    next()

}catch(err){
    return res.json("Unathorized")
}
}

