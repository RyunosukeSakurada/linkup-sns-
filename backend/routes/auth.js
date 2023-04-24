const router = require("express").Router();
const User = require("../models/User.js");


//REGISTER USER API
router.post("/register", async(req,res) => {
  try{
    const newUser = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  }catch(error){
    return res.status(500).json(error);
  }
})

//LOGIN API
router.post("/login", async(req,res) => {
  try{
    const user = await User.findOne({username : req.body.username});
    if(!user) return res.status(404).send("User not found");

    const validPassword = req.body.password === user.password;
    if(!validPassword) return res.status(400).send("Invalid user password")

    return res.status(200).json(user)
  }catch(error){
    return res.status(500).json(error);
  }
});

module.exports = router;