require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); // Add this line to import cors

const app = express();

// Add CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/users")

const db = mongoose.connection
db.on("error", (error)=>console.error(error));
db.once("connected", ()=>console.log('connected to database'));

// this basically handles routing of the user API's
const userRouter = require("./routes/users.js");
app.use("/api/users",userRouter);

const signupRouter = require("./routes/signup.js");
app.use("/api/signup",signupRouter);

const signinRouter = require("./routes/signin.js");
app.use("/api/signin", signinRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


