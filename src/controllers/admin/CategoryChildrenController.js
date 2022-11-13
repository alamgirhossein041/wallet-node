const { STATUS } = require("../../common/statusCode");

const CategoryChildren = require("../../models/CategoryChildren");
const Category = require("../../models/Category");

const createCategory = async (req, res) => {
    const { categoryName, categorySlug, categoryId } = req.body;

    // Check category ID exist
    const categoryParent = await Category.findOne({ where: { id: categoryId } });

    if (categoryParent === null) {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Category parent not exist",
            },
        });
    } else {
        const [category, created] = await CategoryChildren.findOrCreate({
            where: {
                categoryName: categoryName,
            },
            defaults: {
                categorySlug,
                categoryId,
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
    }
};

const updateCategory = async (req, res) => {
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

const detailCategory = async (req, res) => {
    const categoryId = req.params.id;

    const category = await CategoryChildren.findOne({
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
                isParentCategory: false,
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

const removeCategory = async (req, res) => {
    const categoryId = req.params.id;

    const remove = await CategoryChildren.destroy({
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

const listCategory = async (req, res) => {
    const { page, limit } = req.query;

    const offset = Number(page) * Number(limit) - Number(limit);

    const categories = await Category.findAll({
        offset: offset,
        limit: Number(limit),
    });

    const totalCategory = await Category.findAll();

    return res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            categories: categories,
            total: totalCategory.length,
        },
    });
};

module.exports = { createCategory, updateCategory, detailCategory, removeCategory, listCategory };
