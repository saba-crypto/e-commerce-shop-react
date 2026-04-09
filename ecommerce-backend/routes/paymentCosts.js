const express = require("express");
const router = express.Router();
const getPaymentCosts = require("../controllers/paymentCosts");

router.get("/", getPaymentCosts);

module.exports = router;
