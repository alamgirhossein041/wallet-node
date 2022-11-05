import { IUser } from "../interfaces/auth";
import { con } from "../database/database";
import { STATUS } from "../common/statusCode";

export const createUser = (user: IUser) => {
    const { username, password } = user;

    const sql = `INSERT INTO user (username, password) VALUES ('${username}', '${password}')`;
    con.query(sql, (error: any, result: any) => {
        if (error) throw error;
    });
};
