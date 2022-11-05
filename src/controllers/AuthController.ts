import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");

import { IUser } from "./../interfaces/auth";
import { STATUS } from "../common/statusCode";

import { createUser } from "../models/auth";

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

const register = (req: Request, res: Response) => {
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

    // Insert DB
    const result = createUser(user);
    res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            message: "Created account successfully!",
        },
    });
};

module.exports = { login, register };
