import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");

import { IUser } from "./../interfaces/auth";
import { STATUS } from "../common/statusCode";

const User = require("../models/User.ts");

const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Invalid",
            },
        });
    }

    const user: IUser = {
        username,
        password,
    };

    // Create token
    const token = jwt.sign(user, process.env.JWT_KEY);

    res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            message: "",
            token: token,
        },
    });
};

const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Invalid",
            },
        });
    }

    // Check user exist
    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) {
        await User.create({
            username: username,
            password: password,
        });
        res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Created user successfully!",
            },
        });
    } else {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "User exist!",
            },
        });
    }
};

module.exports = { login, register };
