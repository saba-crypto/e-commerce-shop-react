const express = require("express");
const router = express.Router();
const getSubscriptions = require("../controllers/subscriptions");

//route(s)
router.get("/", getSubscriptions);

module.exports = router;
