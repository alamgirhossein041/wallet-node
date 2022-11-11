import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");

import { IUser } from "./../interfaces/auth";
import { STATUS } from "../common/statusCode";
import { getUser } from "../common/functions";

const User = require("../models/User.ts");

const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Invalid",
            },
        });
    }

    const user = await User.findOne({
        where: {
            username: username,
            password: password,
        },
    });

    if (!user) {
        res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Username or password wrong",
            },
        });
    } else {
        // Create token
        const token = jwt.sign({ username, password }, process.env.JWT_KEY);

        res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "",
                token: token,
            },
        });
    }
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

const detail = async (req: Request, res: Response) => {
    getUser(req, res);
};

module.exports = { login, register, detail };
