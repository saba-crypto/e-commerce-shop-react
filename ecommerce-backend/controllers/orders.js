const orders = require("../data/orders");
const cart = require("../data/cart");
const deliveryOption = require("../data/deliveryOptions");
const dayjs = require("dayjs");
const products = require("../data/products");
let paymentCosts = require("../data/paymentCosts");
const deliveryOptions = require("../data/deliveryOptions");
const getOrders = (req, res) => {
  try {
    if (!orders) {
      return res.status(500).json({
        success: false,
        error:
          "it seems like we have a mistake using data, please try again later...",
      });
    }
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred!");
  }
};

const getOrder = (req, res) => {
  try {
    const { orderId } = req.params;
    const matchingOrder = orders.find((order) => {
      return order.orderId === orderId;
    });
    if (!matchingOrder) {
      return res.status(400).json({
        success: false,
        error: "couldn't find order with provided orderId",
      });
    }
    res.status(200).json({ success: true, data: matchingOrder });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred, please try again later");
  }
};

const createOrder = (req, res) => {
  try {
    if (cart.length === 0) {
      return res.status(400).json({
        success: false,
        error:
          "it seems like cart is empty, you can't make an order with empty cart",
      });
    }

    orders.push({
      orderId: crypto.randomUUID(),
      orderDate: dayjs(),
      orderPriceCents: paymentCosts.subTotalPriceCents,
      products: cart.map((cartItem) => {
        const product = products.find((product) => {
          return product.id === cartItem.productId;
        });
        const deliveryOption = deliveryOptions.find((option) => {
          return option.id === cartItem.deliveryOptionId;
        });

        const arrivalDate = dayjs().add(deliveryOption.deliveryDays, "day");

        if (!product) {
          return res.status(400).json({
            success: false,
            error:
              "unexpected error occurred, couldn't find matching product in the server, please try again...",
          });
        }

        return {
          id: cartItem.productId,
          arrivalDate: arrivalDate,
          deliveryDays: deliveryOption.deliveryDays,
          quantity: cartItem.quantity,
          image: product.image,
          name: product.name,
          priceCents: product.priceCents,
        };
      }),
    });

    cart.length = 0;

    res.json({ success: true, data: orders });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred, please try again later");
  }
};

const deleteOrder = (req, res) => {
  try {
    const { orderId } = req.params;
    const orderIndex = orders.findIndex((order) => {
      return order.orderId === orderId;
    });
    if (orderIndex === undefined || orderIndex === null) {
      return res.status(400).json({
        success: false,
        error: "couldn't find order with provided orderId",
      });
    }
    orders.splice(orderIndex, 1);
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("unexpected error occurred, please try again later...");
  }
};

module.exports = { getOrders, getOrder, createOrder, deleteOrder };
