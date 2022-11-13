const RESPONSE = require("../common/statusCode");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const checkAccessToken = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.send({
            statusCode: RESPONSE.STATUS.ERROR,
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
                statusCode: RESPONSE.STATUS.ERROR,
                data: {
                    message: "Token invalid",
                },
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.send({
            statusCode: RESPONSE.STATUS.ERROR,
            data: {
                message: error,
            },
        });
    }
};

module.exports = checkAccessToken;
