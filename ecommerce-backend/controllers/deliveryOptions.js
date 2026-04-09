const deliveryOptions = require("../data/deliveryOptions");
const getDeliveryOptions = (req, res) => {
  try {
    if (!deliveryOptions) {
      return res
        .status(500)
        .json({
          success: false,
          error: "looks like deliveryOptions are unaccessible",
        });
    }
    res.json({ success: true, data: deliveryOptions });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("unexpected error occurred, please try again later...");
  }
};
const createDeliveryOption = (req, res) => {
  try {
    const newDeliveryOption = req.body;
    if (
      !newDeliveryOption.name ||
      !newDeliveryOption.priceCents ||
      !newDeliveryOption.deliveryDays ||
      !newDeliveryOption.id
    ) {
      return res.status(400).json({
        success: false,
        error:
          "please make sure that new deliveryOption has at least name, priceCents, deliveryDays and id",
      });
    }
    const existingDeliveryOption = deliveryOptions.find((deliveryOption) => {
      return deliveryOption.id === newDeliveryOption.id;
    });
    if (existingDeliveryOption) {
      return res
        .status(400)
        .json({ success: false, error: "this deliveryOption already exists" });
    }

    deliveryOptions.push(newDeliveryOption);
    res.status(201).json({ success: true, data: deliveryOptions });
  } catch (err) {
    console.log(err);
    res.status(500).send("unexpected error occurred!");
  }
};

module.exports = { getDeliveryOptions, createDeliveryOption };
