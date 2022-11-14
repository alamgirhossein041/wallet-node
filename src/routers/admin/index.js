const categoryRouter = require("./categoryRouter");
const categoryChildrenRouter = require("./categoryChildren");
const promotionRouter = require("./promotionRouter");
const roleRouter = require("./roleRouter");
const couponRouter = require("./couponRouter");
const authRouter = require("./authRouter");
const productRouter = require("./productRouter");

module.exports = {
    authRouter,
    categoryRouter,
    categoryChildrenRouter,
    promotionRouter,
    roleRouter,
    couponRouter,
    productRouter,
};
