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

const detail = async (req: Request, res: Response) => {
    const categoryId = req.params.id;

    const category = await Category.findOne({
        where: {
            id: categoryId,
        },
    });

    if (category) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "",
                data: category,
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Get detail category failed!",
                data: "",
            },
        });
    }
};

const remove = async (req: Request, res: Response) => {
    const categoryId = req.params.id;

    const remove = await Category.destroy({
        where: {
            id: categoryId,
        },
    });

    if (remove) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Delete category successfully!",
                data: "",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Delete category failed!",
                data: "",
            },
        });
    }
};

const list = async (req: Request, res: Response) => {
    const { page, limit } = req.query;

    const offset = Number(page) * Number(limit) - Number(limit);

    const categories = await Category.findAll({
        offset: offset,
        limit: Number(limit),
    });

    return res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            categories: categories,
            total: categories.length,
        },
    });
};

module.exports = { create, update, detail, remove, list };
