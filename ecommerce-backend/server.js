const express = require("express");
const app = express();
const PORT = 5000;
const morgan = require("morgan");
const cors = require("cors");
//import routes
const productsRouter = require("./routes/products.js");
const cartRouter = require("./routes/cart.js");
const ordersRouter = require("./routes/orders.js");
const deliveryOptionsRouter = require("./routes/deliveryOptions.js");
const subscriptionsRouter = require("./routes/subscriptions.js");
const paymentCostsRouter = require("./routes/paymentCosts.js");

//middleware(s)
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//static assets
app.use(express.static("public"));

//routes
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/deliveryOptions", deliveryOptionsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/subscriptions", subscriptionsRouter);
app.use("/api/paymentCosts", paymentCostsRouter);

app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}...`);
});
