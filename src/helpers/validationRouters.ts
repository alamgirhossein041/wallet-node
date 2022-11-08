import { STATUS } from "./../common/statusCode";
import { Request, Response, NextFunction } from "express";
const requestType = require("../common/requestType");

const validateRequest = (schema: any, type: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate({
            [type]: req[type],
        });

        if (error) {
            return res.send({
                statusCode: STATUS.ERROR,
                data: {
                    message: error.details[0].message,
                },
            });
        } else {
            next();
        }
    };
};

module.exports = { validateRequest };
