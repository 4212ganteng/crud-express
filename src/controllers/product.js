exports.findProduct = (req, res, next) => {
  res.json({
    message: "Success get All Product",
    data: {
      id: 1,
      name: "popok",
      title: "charm",
    },
  });
};

exports.createProduct = (req, res, next) => {
  console.log(req.body);

  const data = ({ name, title, price, img } = req.body);
  res.json({
    message: "Success create Product",
    data: {
      data,
    },
  });
};
