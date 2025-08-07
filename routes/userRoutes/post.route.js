import express from 'express'

import PostController from '../../controller/postController/post.controller.js'


const postRouter = express.Router()
 const postController = new PostController() 
 postRouter.post('/post', postController.userPost)
 

 export default postRouter