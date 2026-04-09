const cart = require("../data/cart");
const products = require("../data/products");

const getCartItems = (req, res) => {
  try {
    if (typeof cart !== "object") {
      return res
        .status(500)
        .json({ success: false, error: "cart type is not an object" });
    }
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred please try again later...");
  }
};
const getCartItem = (req, res) => {
  const { productId } = req.params;
  const cartItem = cart.find((cartItem) => {
    return cartItem.productId === productId;
  });

  if (!cartItem) {
    return res.status(400).json({
      success: false,
      error: "couldn't find a cart item with that id",
    });
  }
  res.status(200).json({ success: true, data: cartItem });
};
const createCartItem = (req, res) => {
  try {
    const { productId } = req.body;
    const { quantity } = req.body;
    const matchingProduct = products.find((product) => {
      return product.id === productId;
    });
    const existingProduct = cart.find((cartItem) => {
      return cartItem.productId === productId;
    });
    if (!productId || !quantity) {
      return res.status(400).json({
        success: false,
        error:
          "couldn't find productId or quantity provided in req.body, please try again later...",
      });
    }
    if (existingProduct) {
      existingProduct.quantity += quantity;
      return res.status(200).json({ success: true, data: cart });
    }
    if (!matchingProduct) {
      return res.status(404).json({
        success: false,
        error: "couldn't find a product with provided productId",
      });
    }
    cart.push({
      productId: matchingProduct.id,
      quantity: quantity,
      deliveryOptionId: "1",
    });
    res.status(201).json({ success: true, data: cart });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred");
  }
};
const updateCartItemQuantity = (req, res) => {
  //quantity
  const { productId } = req.params;
  const updatedQuantity = req.body.quantity;

  const matchingCartItem = cart.find((cartItem) => {
    return cartItem.productId === productId;
  });

  if (!matchingCartItem) {
    return res.status(400).json({
      success: false,
      error: "couldn't find cartItem with provided productId",
    });
  }
  if (updatedQuantity < 0) {
    return res.status(400).json({
      success: false,
      error:
        "couldn't update cartItem quantity, make sure quantity is not negative number",
    });
  }

  if (updatedQuantity) {
    matchingCartItem.quantity = updatedQuantity;
  }

  //deliveryOptionId
  const selectedDeliveryOptionId = req.body.deliveryOptionId;

  if (!selectedDeliveryOptionId && !updatedQuantity) {
    return res.status(400).json({
      success: false,
      error:
        "please make sure that you have provided at least quantity or deliveryOption Id in the req.body",
    });
  }

  if (selectedDeliveryOptionId) {
    matchingCartItem.deliveryOptionId = selectedDeliveryOptionId;
  }

  res.status(200).json({ success: true, data: cart });
};

const deleteCartItem = (req, res) => {
  const { productId } = req.params;
  const matchingCartItemIndex = cart.findIndex((cartItem) => {
    return cartItem.productId === productId;
  });
  if (
    matchingCartItemIndex === null ||
    matchingCartItemIndex === undefined ||
    matchingCartItemIndex < 0
  ) {
    return res.status(400).json({
      success: false,
      error:
        "couldn't find index for product that was going to be terminated, make sure productId you provided is correct",
    });
  }
  cart.splice(matchingCartItemIndex, 1);
  res.status(200).json({ success: true, data: cart });
};

module.exports = {
  getCartItems,
  getCartItem,
  createCartItem,
  updateCartItemQuantity,
  deleteCartItem,
};
