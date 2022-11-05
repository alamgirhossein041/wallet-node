const mysql = require("mysql2");
const databaseSettings = require("../configs/database-setting");

const database = () => {
    const con = mysql.createConnection(databaseSettings);

    con.connect((error) => {
        if (error) throw error;
        console.log("Connected database successfully!");
    });
};

module.exports = database;
