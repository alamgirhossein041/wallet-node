import express = require("express");
import dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect database
const database = require("./database/database");
database();

// Admin router
const adminRouter = require("./routers/admin/admin-router");
app.use("/admin", adminRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
