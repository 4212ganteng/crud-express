const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json()); //type json

// route
const productRoutes = require("./src/routes/product");
app.use("/api/v1/admin", productRoutes);

// db
const conectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://root:root@cluster0.c0wpdeg.mongodb.net/?retryWrites=true&w=majority"
    );

    // server
    app.listen(port, () => {
      console.log(`Server runing on ${port}`);
    });
  } catch (error) {
    console.log("eror connection");
  }
};

conectDB();
