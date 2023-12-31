const express = require("express");
const router = express.Router();// This is a class 
// const {home, register} = require("../Controllers/auth-controller");
const authController = require("../Controllers/auth-controller");

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome To The MERN Project."); //200 means success
// });

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome To The MERN Project On Auth-Router.js.");
// });

// Both are same above and below

router.route("/").get(authController.home);

router.route("/register").post(authController.register);  // If any user fill the data in the register form,or in conact form then we use POST then our data is store into the DB.

// app.get("/register", (req, res) =>{
//     res.status(200).send("Welcome To The Register Page.");
// });

module.exports = router;