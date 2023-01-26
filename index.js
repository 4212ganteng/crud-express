const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

// multer config
const upload = multer.diskStorage({
  destination: (req, file, cb) => {
    // root file saved
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json()); //type json

app.use(multer({ storage: upload, fileFilter: fileFilter }).single("image")); //type nya singgle REQ.BODY('image')

// route
const productRoutes = require("./src/routes/product");
app.use("/api/v1/admin", productRoutes);

// db
const conectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://root:root@cluster0.c0wpdeg.mongodb.net/shopee?retryWrites=true&w=majority"
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
