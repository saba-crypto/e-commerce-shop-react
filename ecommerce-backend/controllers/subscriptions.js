const subscriptions = require("../data/subscriptions");
const getSubscriptions = (req, res) => {
  if (!subscriptions) {
    return res.status(500).json({
      success: false,
      error:
        "unexpected error occurred in the server, please try again later...",
    });
  }
  res.status(200).json({ success: true, data: subscriptions });
};

module.exports = getSubscriptions;
