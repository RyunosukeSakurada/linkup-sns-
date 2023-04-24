const router = require("express").Router();
const Post = require("../models/Post.js");
const User = require("../models/User.js")


//Create a post
router.post("/",async (req,res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
})

//Update a post
router.put("/:id",async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("Post edited successfully");
    }else{
      return res.status(200).json("You cannot edit other people's posts");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
})

//Delete a post
router.delete("/:id",async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
      await post.deleteOne();
      return res.status(200).json("Post deleted successfully");
    }else{
      return res.status(200).json("You cannot delete other people's posts");
    }
  } catch (error) {
    return res.status(500).json(err);
  }
})


//Get a specific post
router.get("/:id",async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(Error);
  }
})


//Like a specific post
router.put("/:id/like", async(req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    //If the post has not been liked yet
    if(!post.likes.includes(req.body.userId)){
      await post.updateOne({
        $push:{
          likes: req.body.userId,
        },
      });
      return res.status(200).json("liked a post")
    }else{
      //If the post has already been liked
      //Remove the user ID that has liked (the post)
      await post.updateOne({
        $pull:{
          likes: req.body.userId,
        },
      });
      return res.status(403).json("unliked the post")
    }
  } catch (error) {
    return res.status(500).json(error);
  }
})

//Get posts from the timeline
router.get("/timeline/all", async(req,res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id});
    //Get all posts from the people I am following.
    const followersPosts = await Promise.all(
      currentUser.followings.map((followerId) => {
        return Post.find({userId: followerId});
      })
    );
    return res.status(200).json(userPosts.concat(...followersPosts));
  } catch (error) {
    return res.status(500).json(error);
  }
})


module.exports = router;