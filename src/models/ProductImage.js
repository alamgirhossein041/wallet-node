const { DataTypes } = require("@sequelize/core");
const database = require("../database/database");

const ProductImage = database.define(
    "product_images",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: { type: DataTypes.STRING, field: "productId" },
        imageUrl: { type: DataTypes.TEXT("long"), field: "imageUrl" },
    },
    {
        tableName: "product_images",
    }
);
database.sync();

module.exports = ProductImage;
