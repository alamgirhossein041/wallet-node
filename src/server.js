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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Admin router
const {
    authRouter,
    categoryRouter,
    categoryChildrenRouter,
    promotionRouter,
    roleRouter,
    couponRouter,
} = require("./routers/admin/admin-router");
app.use("/admin", authRouter);
app.use("/admin", categoryRouter);
app.use("/admin", categoryChildrenRouter);
app.use("/admin", promotionRouter);
app.use("/admin", roleRouter);
app.use("/admin", couponRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
