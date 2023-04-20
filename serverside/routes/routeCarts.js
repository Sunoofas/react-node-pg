const express = require("express");
const router = express.Router();
const {
      getCartItem,
      getCartItem,
      addCartItem
} = require("../controllers/controllersCart");

router.get("/item",getCartItem);

router.post("/item/add",addCartItem);

module.exports = router;