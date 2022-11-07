import { STATUS } from "./../common/statusCode";
import { Request, Response, NextFunction } from "express";
const requestType = require("../common/requestType");

const validateParams = (schema: any, type: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let validateResult: any;
        switch (type) {
            case requestType.params:
                validateResult = schema.validate({
                    params: req.query,
                });
                break;
            case requestType.query:
                validateResult = schema.validate({
                    query: req.query,
                });
                break;
            case requestType.body:
                validateResult = schema.validate({
                    body: req.body,
                });
                break;
        }

        if (validateResult.error) {
            return res.send({
                statusCode: STATUS.ERROR,
                data: {
                    message: "Error field!",
                },
            });
        } else {
            next();
        }
    };
};

module.exports = { validateParams };
