const express = require("express");
const router = express.Router();
const cart = require("../data/cart");
const products = require("../data/products");

//import controllers
const {
  getCartItems,
  getCartItem,
  createCartItem,
  updateCartItemQuantity,
  deleteCartItem,
} = require("../controllers/cart");

router.get("/", getCartItems);

router.get("/:productId", getCartItem);

router.post("/", createCartItem);

router.put("/:productId", updateCartItemQuantity);

router.delete("/:productId", deleteCartItem);

module.exports = router;
