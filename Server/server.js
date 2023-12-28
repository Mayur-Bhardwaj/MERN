const express = require("express");
const app = express();
const router = require("./Router/auth-router");


//Mount the Router: To use the eouter in our main Express app, you can "mount" it at a specific URL prefix


app.use("/api/auth", router); //When router come they read this line then they will not go the below lines they go directly auth-router.js

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome To The MERN Project On Server.js."); //200 means success
// });

// app.get("/register", (req, res) =>{
//     res.status(200).send("Welcome To The Register Page.");
// });

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})