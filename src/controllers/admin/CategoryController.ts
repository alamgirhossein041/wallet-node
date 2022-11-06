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

const update = async (req: Request, res: Response) => {
    const { categoryName, categorySlug, categoryDesc, categoryId } = req.body;

    const updated = await Category.update(
        {
            categoryName,
            categorySlug,
            categoryDesc,
        },
        {
            where: {
                id: categoryId,
            },
        }
    );

    if (updated) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Category updated!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Category updated failed!",
            },
        });
    }
};

module.exports = { create, update };
