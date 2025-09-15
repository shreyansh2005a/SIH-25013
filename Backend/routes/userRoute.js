const express = require("express");
const userRouter = express.Router();
userRouter.post("/register", (req, res) => {
    res.json({ message: "Register user " });
});

userRouter.post("/login", (req, res) => {
    res.json({ message: "User login " });
});

userRouter.get("/profile", (req, res) => {
    res.json({ message: "Get user profile" });
});

userRouter.post("/points", (req, res) => {
    res.json({ message: "Add reward points" });
});

module.exports = userRouter;
