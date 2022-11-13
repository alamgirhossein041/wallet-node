const { DataTypes } = require("@sequelize/core");
const database = require("../database/database");
const Category = require("./Category");

const CategoryChildren = database.define(
    "categoryChildren",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        categoryName: { type: DataTypes.STRING, field: "categoryName", allowNull: true, unique: true },
        categorySlug: { type: DataTypes.STRING, field: "categorySlug", allowNull: true },
        categoryId: { type: DataTypes.STRING, field: "categoryId", allowNull: false },
    },
    {
        tableName: "categoryChildren",
    }
);
database.sync();

module.exports = CategoryChildren;
