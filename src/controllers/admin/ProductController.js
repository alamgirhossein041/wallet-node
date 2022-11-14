const { STATUS } = require("../../common/statusCode");

const Product = require("../../models/Product");

const createProduct = (req, res) => {
    return res.send({
        code: 1,
    });
};

module.exports = { createProduct };
