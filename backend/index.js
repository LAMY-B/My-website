require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

app.use(cors())
const PORT = 2468;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Backend");
});

app.get("/About", (req, res) => {
    res.send("Welcome to About page");
});

app.post("/login", (req, res) => {
    res.send("You just submitted a login");
});

const userRoute = require("./Route/userRoute");
app.use("/users", userRoute);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
});