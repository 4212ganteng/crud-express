const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); //type json

// route
const productRoutes = require("./src/routes/product");
app.use("/api/v1/admin", productRoutes);

// server
app.listen(port, () => {
  console.log(`Server runing on ${port}`);
});
