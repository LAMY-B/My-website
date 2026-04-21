const User = require('../models/User');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose");

// Basic
// Create
const createUser = async (req, res) => {
  try{
    const { name, age, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    console.log("Hashed password:", hashedPassword);

    const user = new User({ email, age, name, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.send(err.message)
  }
};

//login 
const loginUser = async (req, res) => {
    try {
        console.log("ran login");
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        console.log("Password entered:", password);
        console.log("Password in DB:", user.password);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password valid:", isPasswordValid);

        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { userId: user._id, userEmail: user.email, userRole: user.role },
            process.env.JWT_KEY,
            { expiresIn: "40m" }
        );
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Read
const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("user id:", id);
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//update
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createUser, getUser, updateUser, deleteUser, loginUser, getUserById, deleteUserById };