const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'https://fyp-official-project-i5zl.vercel.app',
    'http://localhost:5173',
    'https://careercampus.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.set("view engine", "ejs");

// Database connection function
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mufugimichelo:V4Yatxobp1hMSB4y@fypcluster.ftdx1.mongodb.net/?retryWrites=true&w=majority&appName=fypcluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    throw error;
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// Import and use routers
const userRouter = require("./routes/users.js");
const signupRouter = require("./routes/signup.js");
const signinRouter = require("./routes/signin.js");
const blsRoute = require("./routes/bls.js");
const clsRoute = require("./routes/jsearch.js");
const openAIRoute = require("./routes/openai.js");

app.use("/api/users", userRouter);
app.use("/api/signup", signupRouter);
app.use("/api/signin", signinRouter);
app.use("/api", blsRoute);
app.use("/api", clsRoute);
app.use("/ask", openAIRoute);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// 404 handler
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// Serverless function handler
module.exports = async (req, res) => {
  try {
    // Ensure database connection
    await connectDB();
    

    // Create a promise-based handler
    return new Promise((resolve, reject) => {
      const handler = (req, res) => {
        try {
          app(req, res);

        } catch (error) {
          console.error('Request Handler Error:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      
      handler(req, res);
      res.on('finish', resolve);
      res.on('error', reject);
    });
  } catch (error) {
    console.error('Serverless Function Initialization Error:', error);
    res.status(500).json({ 
      error: 'Failed to initialize server',
      details: error.message 
    });
  }
};