const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

// Cors
const cors = require("cors");
app.use(cors());

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form data
const multer = require("multer");
const upload = multer();

// Admin router
const {
    authRouter,
    categoryRouter,
    categoryChildrenRouter,
    promotionRouter,
    roleRouter,
    couponRouter,
    productRouter,
} = require("./routers/admin");
app.use("/admin", authRouter);
app.use("/admin", categoryRouter);
app.use("/admin", categoryChildrenRouter);
app.use("/admin", promotionRouter);
app.use("/admin", roleRouter);
app.use("/admin", couponRouter);
app.use("/admin", upload.single("productImages"), productRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
