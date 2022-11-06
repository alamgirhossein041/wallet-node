import { Request, Response } from "express";
import { STATUS } from "../../common/statusCode";

const Category = require("../../models/Category");

const create = async (req: Request, res: Response) => {
    const { categoryName, categorySlug, categoryDesc, categoryType } = req.body;

    const [category, created] = await Category.findOrCreate({
        where: {
            categoryName: categoryName,
        },
        defaults: {
            categorySlug,
            categoryDesc,
            categoryType,
        },
    });

    if (created) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Created category successfully!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Category exist",
            },
        });
    }
};

module.exports = { create };
