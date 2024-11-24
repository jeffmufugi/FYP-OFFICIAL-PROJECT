require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Add CORS configuration
app.use(cors({
  origin: "https://fyp-official-project-i5zl.vercel.app",//"http://localhost:5173", // Allow your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

app.use(express.json());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/users")
  .then(() => console.log("Connected to local MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Mongoose connection event listeners (optional for logging)
const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("connected", () => console.log("Mongoose connected to database"));

// Routing
const userRouter = require("./routes/users.js");
app.use("/api/users", userRouter);

const signupRouter = require("./routes/signup.js");
app.use("/api/signup", signupRouter);

const signinRouter = require("./routes/signin.js");
app.use("/api/signin", signinRouter);

const blsRoute = require("./routes/bls.js");
app.use("/api", blsRoute);

const clsRoute = require("./routes/jsearch.js");
app.use("/api", clsRoute);

const openAIRoute = require("./routes/openai.js");
app.use("/ask", openAIRoute);

// Handle 404s
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});