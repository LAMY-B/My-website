const mongoose = require("mongoose");

 //flexible
 const userSchema =  new mongoose.Schema({
    name: String,
    age: Number,
email: {type: String, required: true, unique: true },
password: String,
role: { type: String, default: "user", enum: ["user", "admin"] },
 });

 //create model
 const User = mongoose.model("User", userSchema);
 
 module.exports = User;
