const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const Order = require("../models/Order");

router.post("/place", async (req, res) => {

  const session = await mongoose.startSession();
  session.startTransaction();

  try {

    const { productId, quantity } = req.body;

    const product = await Product.findById(
  new mongoose.Types.ObjectId(productId)
);


    if (!product) {
      throw new Error("Product not found");
    }

    if (product.stock < quantity) {
      throw new Error("Not enough stock available");
    }
    product.stock -= quantity;
    await product.save({ session });
    const order = new Order({
      productId,
      quantity
    });
    await order.save({ session });
    await session.commitTransaction();
    session.endSession();
    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
