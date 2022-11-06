import { DataTypes } from "@sequelize/core";
const database = require("../database/database");

const Category = database.define(
    "category",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryName: { type: DataTypes.STRING, field: "categoryName", allowNull: true, unique: true },
        categorySlug: { type: DataTypes.STRING, field: "categorySlug", allowNull: true },
        categoryDesc: { type: DataTypes.STRING, field: "categoryDesc", allowNull: true },
        categoryType: { type: DataTypes.ENUM("0", "1"), field: "categoryType", allowNull: true, defaultValue: "0" },
    },
    {
        tableName: "categories",
    }
);
database.sync();

module.exports = Category;
