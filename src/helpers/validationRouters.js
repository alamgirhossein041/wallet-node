const RESPONSE = require("../common/statusCode");

const formidable = require("formidable");
const requestType = require("../common/requestType");

const { handleRequestFormData } = require("../common/functions");

const validateRequest = (schema, type) => {
    return async (req, res, next) => {
        // Request form-data
        if (type === requestType.formData) {
            const { err, fields, files } = handleRequestFormData(req);

            console.log("fields: ", fields);

            try {
                const result = await schema.validateAsync(fields);
                console.log("result: ", result);
                next();
            } catch (error) {
                return res.send({
                    statusCode: RESPONSE.STATUS.ERROR,
                    data: {
                        message: error.details[0].message,
                    },
                });
            }
            return;
        } else {
            // Request body, params, query
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
        }
    };
};

module.exports = { validateRequest };
