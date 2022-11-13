const RESPONSE = require("../common/statusCode");

const validateRequest = (schema, type) => {
    return (req, res, next) => {
        const { error } = schema.validate({
            [type]: req[type],
        });

        if (error) {
            return res.send({
                statusCode: RESPONSE.STATUS.ERROR,
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
