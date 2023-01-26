const Product = require("../models/Product");

exports.findProduct = async (req, res, next) => {
  try {
    const data = await Product.find();

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.createProduct = async (req, res, next) => {
  console.log(req.body);
  console.log(req.path, "pathhhh");
  // const field = ({ title, price, name } = req.body);
  try {
    const data = await Product.create({
      ...req.body,
      image: req.file.path,
    });

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
