const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { createPromotion, updatePromotion, removePromotion } = require("../../controllers/admin/PromotionController");

const {
    createPromotionSchema,
    updatePromotionSchema,
    deletePromotionSchema,
} = require("../../validations/promotionSchema");

router.post(
    "/promotion/create",
    [validateRequest(createPromotionSchema, requestType.body), checkAccessToken],
    createPromotion
);
router.post(
    "/promotion/update",
    [validateRequest(updatePromotionSchema, requestType.body), checkAccessToken],
    updatePromotion
);
router.get(
    "/promotion/delete/:id",
    [validateRequest(deletePromotionSchema, requestType.params), checkAccessToken],
    removePromotion
);

module.exports = router;
