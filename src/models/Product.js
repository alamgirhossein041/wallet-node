const { DataTypes } = require("@sequelize/core");
const database = require("../database/database");

const Product = database.define(
    "product",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productName: { type: DataTypes.STRING, field: "productName", unique: true },
        productSlug: { type: DataTypes.STRING, field: "productSlug" },
        productDesc: { type: DataTypes.TEXT("long"), field: "productDesc", allowNull: true },
        productContent: { type: DataTypes.TEXT("long"), field: "productContent" },
        productPrice: { type: DataTypes.STRING(), field: "productPrice" },
        productInventory: { type: DataTypes.STRING(), field: "productInventory" },
    },
    {
        tableName: "products",
    }
);
database.sync();

module.exports = Product;
