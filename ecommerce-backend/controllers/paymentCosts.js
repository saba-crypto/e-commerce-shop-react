const products = require("../data/products");
const deliveryOptions = require("../data/deliveryOptions");
const cart = require("../data/cart");
const paymentCosts = require("../data/paymentCosts");
const getPaymentCosts = (req, res) => {
  try {
    //calculate paymentCosts
    let totalItemsPriceCents = 0;
    let totalShippingPriceCents = 0;

    cart.forEach((cartItem) => {
      const matchingProduct = products.find((product) => {
        return product.id === cartItem.productId;
      });
      const matchingDeliveryOption = deliveryOptions.find((option) => {
        return option.id === cartItem.deliveryOptionId;
      });
      totalItemsPriceCents += matchingProduct.priceCents * cartItem.quantity;
      totalShippingPriceCents += matchingDeliveryOption.priceCents;
    });

    const totalBeforeTaxPriceCents =
      totalItemsPriceCents + totalShippingPriceCents;
    const taxPriceCents = totalBeforeTaxPriceCents * 0.1;
    const subTotalPriceCents = totalBeforeTaxPriceCents + taxPriceCents;

    //update data
    paymentCosts.totalItemsPriceCents = totalItemsPriceCents;
    paymentCosts.totalShippingPriceCents = totalShippingPriceCents;
    paymentCosts.totalBeforeTaxPriceCents = totalBeforeTaxPriceCents;
    paymentCosts.taxPriceCents = taxPriceCents;
    paymentCosts.subTotalPriceCents = subTotalPriceCents;

    if (!paymentCosts) {
      return res.status(500).json({
        success: false,
        error:
          "unexpected error occurred in controllers/paymentCosts.js try again later... ",
      });
    }
    res.status(200).json({ success: true, data: paymentCosts });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = getPaymentCosts;
