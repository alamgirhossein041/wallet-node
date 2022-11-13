const jwt = require("jsonwebtoken");

const { STATUS } = require("../common/statusCode");
const FUNCTION = require("../common/functions");

const User = require("../models/User.js");

const login = async (req, res) => {
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

const register = async (req, res) => {
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

const detail = async (req, res) => {
    FUNCTION.getUser(req, res);
};

module.exports = { login, register, detail };
