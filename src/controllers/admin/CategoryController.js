const { STATUS } = require("../../common/statusCode");

const Category = require("../../models/Category");
const CategoryChildren = require("../../models/CategoryChildren");

const createCategory = async (req, res) => {
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

const removeCategory = async (req, res) => {
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

const listCategory = async (req, res) => {
    const categories = await Category.findAll({
        include: [
            {
                model: CategoryChildren,
            },
        ],
    });

    return res.send({
        statusCode: STATUS.SUCCESS,
        data: {
            categories: categories,
        },
    });
};

module.exports = { createCategory, updateCategory, detailCategory, removeCategory, listCategory };
