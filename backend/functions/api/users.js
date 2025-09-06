const express = require("express");
const router = express.Router();
const userService = require("../services/user-service"); // Import the service file.

// Endpoint for user registration.
router.post("/register", async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).send(newUser); // 201 Created status
  } catch (error) {
    res.status(400).send({ error: error.message }); // 400 Bad Request
  }
});

// Future endpoints will go here, like:
// router.post("/login", ...);
// router.get("/profile", ...);

module.exports = router;