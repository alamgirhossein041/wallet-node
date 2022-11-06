import { DataTypes } from "@sequelize/core";
const database = require("../database/database");

const Role = database.define(
    "role",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        roleName: { type: DataTypes.STRING, field: "roleName", allowNull: true, unique: true },
        roleType: { type: DataTypes.STRING, field: "roleType", allowNull: true },
    },
    {
        tableName: "roles",
    }
);
database.sync();

module.exports = Role;
