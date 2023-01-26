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
