const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile.controller");
const { authenticateMiddleware } = require("../middlewares/authenticationMiddleware");

// User routes 
router.get("/", authenticateMiddleware, profileController.getProfile);
router.patch("/:id", authenticateMiddleware, profileController.updateProfile);

module.exports = router;
