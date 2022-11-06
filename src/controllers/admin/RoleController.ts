import { Request, Response } from "express";
import { STATUS } from "../../common/statusCode";

const Role = require("../../models/Role");

const createRole = async (req: Request, res: Response) => {
    const { roleName, roleType } = req.body;

    // Get from DB
    const role = await Role.findOne({
        where: {
            roleName: roleName,
        },
    });

    if (!role) {
        await Role.create({
            roleName: roleName,
            roleType: roleType,
        });
        res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Role exist!",
            },
        });
    } else {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Role exist!",
            },
        });
    }
};

module.exports = { createRole };
