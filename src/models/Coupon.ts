import { DataTypes } from "@sequelize/core";
const database = require("../database/database");

const Coupon = database.define(
    "coupon",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        couponName: { type: DataTypes.STRING, field: "couponName", allowNull: true, unique: true },
        couponValue: { type: DataTypes.STRING, field: "couponValue", allowNull: false },
        couponType: { type: DataTypes.ENUM("0", "1"), field: "couponType", allowNull: false, defaultValue: "0" },
    },
    {
        tableName: "coupon",
    }
);
database.sync();

module.exports = Coupon;
