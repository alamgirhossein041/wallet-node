const { STATUS } = require("../../common/statusCode");
const { handleRequestFormData } = require("../../common/functions");

const Product = require("../../models/Product");

const createProduct = (req, res) => {
    const { err, fields, files } = handleRequestFormData(req);

    console.log("controller");
};

module.exports = { createProduct };
