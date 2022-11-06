const Sequelize = require("@sequelize/core");
const settingsOption = require("../configs/database-setting");

const sequelize = new Sequelize(settingsOption.database, settingsOption.username, settingsOption.password, {
    host: settingsOption.host,
    dialect: settingsOption.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});

try {
    sequelize.authenticate();
    console.log("Connect database successfully!");
} catch (error) {
    console.log("Error database: ", error);
}

module.exports = sequelize;
