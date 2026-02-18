const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
mongoose.connect("mongodb+srv://satwik:2205@fashion.lgx8msp.mongodb.net/?appName=Fashion")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Inventory Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
