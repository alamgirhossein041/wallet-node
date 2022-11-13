const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { createCoupon, updateCoupon, removeCoupon } = require("../../controllers/admin/CouponController");

const { createCouponSchema, updateCouponSchema, deleteCouponSchema } = require("../../validations/couponSchema");

router.post("/coupon/create", [validateRequest(createCouponSchema, requestType.body), checkAccessToken], createCoupon);
router.post("/coupon/update", [validateRequest(updateCouponSchema, requestType.body), checkAccessToken], updateCoupon);
router.get(
    "/coupon/delete/:id",
    [validateRequest(deleteCouponSchema, requestType.params), checkAccessToken],
    removeCoupon
);

module.exports = router;
