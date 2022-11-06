import { DataTypes } from "@sequelize/core";
const database = require("../database/database");

const User = database.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: { type: DataTypes.STRING, field: "username", allowNull: true, unique: true },
        password: { type: DataTypes.STRING, field: "password", allowNull: true },
        firstName: { type: DataTypes.STRING, field: "first_name", allowNull: true },
        lastName: { type: DataTypes.STRING, field: "last_name", allowNull: true },
        phone: { type: DataTypes.STRING, field: "phone", allowNull: true, unique: true },
        address: { type: DataTypes.STRING, field: "address", allowNull: true },
        gmail: { type: DataTypes.STRING, field: "gmail", allowNull: true },
        role: { type: DataTypes.ENUM("0", "1"), field: "role", allowNull: false, defaultValue: "0" },
    },
    {
        tableName: "users",
    }
);
database.sync();

module.exports = User;
