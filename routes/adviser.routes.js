// Import d'Express et création d'un routeur
const express = require("express");
const router = express.Router();
const adviserController = require("../controllers/adviser.controller");

// Endpoints pour le front
router.get("/", adviserController.getAll);
router.get("/:id", adviserController.getOne);

// Endpoints pour postman
router.post("/", adviserController.create);

module.exports = router;