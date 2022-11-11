import { STATUS } from "./../common/statusCode";
import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");

const User = require("../models/User.ts");

export const getUser = async (req: Request, res: Response) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Invalid token",
            },
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const { username, password } = decoded;

        // Get from DB
        const user = await User.findOne({
            where: {
                username: username,
                password: password,
            },
        });

        if (!user) {
            return res.send({
                statusCode: STATUS.ERROR,
                data: {
                    message: "User invalid",
                },
            });
        } else {
            return res.send({
                statusCode: STATUS.SUCCESS,
                data: { username },
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: error,
            },
        });
    }
};
