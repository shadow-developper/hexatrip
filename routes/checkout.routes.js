const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkout.controller");

router.post("/", checkoutController.createStripeSession);

module.exports = router;
