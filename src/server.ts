import express = require("express");
import dotenv = require("dotenv");

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
const adminRouter = require("./routers/admin/admin-router");
app.use("/admin", adminRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
