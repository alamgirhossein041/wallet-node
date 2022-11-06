import { DataTypes } from "@sequelize/core";
const database = require("../database/database");

const Promotion = database.define(
    "promotion",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        promotionPercent: { type: DataTypes.INTEGER, field: "promotionPercent", allowNull: true },
        productId: { type: DataTypes.INTEGER, field: "productId", allowNull: true },
    },
    {
        tableName: "promotions",
    }
);
database.sync();

module.exports = Promotion;
