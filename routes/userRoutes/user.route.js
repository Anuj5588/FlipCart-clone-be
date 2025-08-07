import express from 'express'

import UserController from '../../controller/userController/user.controller.js'


const useRouter = express.Router()
 const usersController = new UserController() 

 useRouter.get('/', usersController.getUsers)
 useRouter.post('/sign-up', usersController.SignUpuser)
 useRouter.post('/login',  usersController.loginUser)
 useRouter.post('/verify-otp', usersController.verifyOtp)

 export default useRouter