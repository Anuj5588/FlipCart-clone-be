import Post from "../../models/post.model.js";  // Assuming default export
import User from "../../models/user.model.js";  // Import UserModel to get `user._id`
import mongoose from "mongoose";

export default class PostController {

  async userPost(req, res) {
    try {
      // Fetch a user (or create one for testing)
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId("67accfb0628a4ed30dcd57d8") }); 

if (!user) {
  return res.status(404).json({ error: "User not found" });
}
      // Create a new post
      const newPost = await Post.create({
        title: "My First Post",
        content: "This is my first post content.",
        author: user._id,  // Use a valid user ID
      });

      return res.status(201).json(newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
