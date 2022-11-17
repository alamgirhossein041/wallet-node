const { STATUS } = require("../../common/statusCode");

const Product = require("../../models/Product");
const ProductImage = require("../../models/ProductImage");

const createProduct = async (req, res) => {
    const { productName, productSlug, productDesc, productContent, productPrice, productInventory } = req.body;
    const file = req.file;

    const [product, created] = await Product.findOrCreate({
        where: {
            productName: productName,
        },
        defaults: {
            productSlug,
            productDesc,
            productContent,
            productPrice,
            productInventory,
        },
    });

    if (!created) {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Product exist",
            },
        });
    }

    // if (file) {
    //     const urlBase64 = Buffer.from(file.buffer).toString("base64");

    //     await ProductImage.create({
    //         productId: product.id,
    //         imageUrl: urlBase64,
    //     });
    // }

    return res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            message: "Created product successfully",
        },
    });
};

module.exports = { createProduct };
