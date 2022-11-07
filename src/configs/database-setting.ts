const settings: IDatabase = {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: false,
};

module.exports = settings;

interface IDatabase {
    database: string;
    username: string;
    password: string;
    host: string;
    dialect: string;
    logging: boolean;
}
