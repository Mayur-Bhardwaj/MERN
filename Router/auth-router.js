const express = require("express");
const router = express.Router();// This is a class 




// app.get("/", (req, res) => {
//     res.status(200).send("Welcome To The MERN Project."); //200 means success
// });

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome To The MERN Project On Auth-Router.js.");
// });

// Both are same above and below

router.route("/").get((req, res) => {
    res.status(200).send("Welcome To The MERN Project On Auth-Router.js.");
});

router.route("/register").get((req, res) => {
    res.status(200).send("Welcome To The Register Page");
})

// app.get("/register", (req, res) =>{
//     res.status(200).send("Welcome To The Register Page.");
// });

module.exports = router;