const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  fullname:{
    type: String,
    require: true,
    min: 1,
    max: 25,
  },
  username:{
    type: String,
    require: true,
    min: 3,
    max: 25,
    unique: true,
  },
  email:{
    type: String,
    require: true,
    max:50,
    unique: true,
  },
  password:{
    type:String,
    require: true,
    min:6,
    max:50,
  },
  profilePicture: {
    type: String,
    default: ""
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  isAdmin:{
    type: Boolean,
    default:false,
  },
  description:{
    type: String,
    max: 70,
  },
},

  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);