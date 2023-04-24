const router = require("express").Router();
const User = require("../models/User.js");


//CRUD (Create Read Update Delete)
//UPDATE USER INFO
router.put("/:id", async (req,res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try {
      const user = await User.findByIdAndUpdate(req.params.id,{
        $set: req.body,
      });
      res.status(200).json("User information has been updated")
    } catch (error) {
      return res.status(500).json(err);
    }
  }else{
    return res
    .status(403)
    .json("You can only update information for your own account")
  }
})


//DELETE USER INFO
router.delete("/:id", async (req,res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("The user information has been deleted")
    } catch (error) {
      return res.status(500).json(err);
    }
  }else{
    return res
    .status(403)
    .json("You can only delete information for your own account")
  }
})


//GET USER INFO
router.get("/:id", async (req,res) => {
    try {
      const user = await User.findById(req.params.id);
      const {password, updateAt, ...other} = user._doc;
      return res.status(200).json(other);
    } catch (error) {
      return res.status(500).json(error);
    }
})


//Follow user
router.put("/:id/follow", async(req,res) => {
  if(req.body.userId !== req.params.id){
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      //If I'm not already one of your followers, I can follow you
      if(!user.followers.includes(req.body.userId)){
        await user.updateOne({
          $push:{
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push:{
            followings: req.params.id,
          }
        })
        return res.status(200).json("Followed successfully")
      }else{
        return res.status(403).json("You are already following this user")
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }else{
    return res.status(500).json("You cannot follow yourself")
  }
})


//Unfollow  user
router.put("/:id/unfollow", async(req,res) => {
  if(req.body.userId !== req.params.id){
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      //Unfollow if already following the follower.
      if(user.followers.includes(req.body.userId)){
        await user.updateOne({
          $pull:{
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull:{
            followings: req.params.id,
          }
        })
        return res.status(200).json("Unfollowed successfully")
      }else{
        return res.status(403).json("You cannot unfollow this user")
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }else{
    return res.status(500).json("You cannot unfollow yourself")
  }
})

module.exports = router;