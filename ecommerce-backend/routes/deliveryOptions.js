const express = require("express");
const router = express.Router();
const deliveryOptions = require("../data/deliveryOptions");

//import controllers
const {
  getDeliveryOptions,
  createDeliveryOption,
} = require("../controllers/deliveryOptions");

router.get("/", getDeliveryOptions);
//optional API, i don't think that i will ever use it :]
router.post("/", createDeliveryOption);

module.exports = router;
