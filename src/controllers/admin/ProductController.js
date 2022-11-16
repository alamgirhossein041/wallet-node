const { STATUS } = require("../../common/statusCode");

const Product = require("../../models/Product");

const createProduct = (req, res) => {
    const file = req.file;
    console.log("controller: ", file);
};

module.exports = { createProduct };
