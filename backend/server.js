const express = require("express");
require("dotenv").config();
const cors = require("cors");

/**
 * Separate routers for different route sets
 *
 * 1. gptRouter: Router for handling GPT-3 API requests
 * 2. authRouter: Router for handling user authentication requests
 * 3. noteRouter: Router for handling CRUD operations on notes
 */
const { router: gptRouter } = require("./routes/router");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

// Establish connection to MongoDB database
const connectDB = require("./config/dbConnection");

connectDB(); // Connect to mongo db database

const app = express(); // Initialize express app

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // URL of the frontend app
    credentials: true,
  })
);

// Middleware for parsing JSON payloads
app.use(express.json());

// Define different instances of express.Router() for different route sets
const gptRouterInstance = express.Router();
const authRouterInstance = express.Router();
const noteRouterInstance = express.Router();

// Apply middleware configs to different router instances
gptRouterInstance.use(express.urlencoded({ extended: true }));
authRouterInstance.use(express.urlencoded({ extended: false }));
noteRouterInstance.use(express.urlencoded({ extended: false }));

// Mount routers
app.use("/api", gptRouterInstance);
app.use("/", authRouterInstance);
app.use("/api/notes", noteRouterInstance);

// Mount route handlers to respective routers
gptRouterInstance.use("/", gptRouter);
authRouterInstance.use("/", authRoutes);
noteRouterInstance.use("/", noteRoutes);

// Define port number for server to listen on
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
