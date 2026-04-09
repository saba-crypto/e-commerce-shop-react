const express = require("express");
const router = express.Router();

//import controllers
const {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/orders");

router.get("/", getOrders);

router.get("/:orderId", getOrder);

router.post("/", createOrder);

router.delete("/:orderId", deleteOrder);

module.exports = router;
