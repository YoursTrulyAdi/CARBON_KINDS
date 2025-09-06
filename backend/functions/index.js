const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin"); // Import the Admin SDK
const userRoutes = require("./api/users");
const productRoutes = require("./api/products");
const orderRoutes = require("./api/orders");

// Initialize the Firebase Admin SDK.
// This is required for server-side operations and database access.
// When deployed, this automatically uses the project's credentials.
admin.initializeApp();

// Initialize the Express app
const app = express();

// Set up middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Connect the API routes
// Any request to /api/users will be handled by the userRoutes module.
app.use("/api/users", userRoutes); 
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Export the Express app as a single Cloud Function
exports.api = functions.https.onRequest(app);
