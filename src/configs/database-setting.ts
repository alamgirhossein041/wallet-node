const settings: IDatabase = {
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth: true,
};

module.exports = settings;

interface IDatabase {
    host: string;
    user: string;
    password: string;
    database: string;
    insecureAuth: boolean;
}
