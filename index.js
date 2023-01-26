const express = require("express");
const app = express();
const port = 5000;

// route
const productRoutes = require("./src/routes/product");
app.use("/", productRoutes);

// server
app.listen(port, () => {
  console.log(`Server runing on ${port}`);
});
