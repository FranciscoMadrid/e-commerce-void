import DB_Helper from "../../dbhelper.js";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const getAllUsers = async () => {
    return await DB_Helper.query('SELECT * FROM user INNER JOIN role ON user.fk_role_id = role.role_id');
}

export const getUserById = async (id) => {
    return await DB_Helper.query('SELECT * FROM user INNER JOIN role ON user.fk_role_id = role.role_id WHERE user_id = ?', [id])
    .then(rows => rows[0]);
}

export const getUserByEmail = async(email) => {
    const rows = await DB_Helper.query('SELECT * FROM user INNER JOIN role ON user.fk_role_id = role.role_id WHERE email = ?', [email]);
    return rows[0]
}

export const createUser = async ({email, first_name, last_name, password}) => {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const result = await DB_Helper.query(
        'INSERT INTO user (email, first_name, last_name, password_hash) VALUES (?, ?, ?, ?)',
        [email, first_name, last_name, hashedPassword]
    );

    return {message: 'User has been successfully created',details: `Email: ${email}`}
}

export const updateUserById = async (userId, updatedFields) => {
    const fields = [];
    const values = [];

    for(const [key, value] of Object.entries(updatedFields)) {
        fields.push(`${key} = ?`);
        values.push(value);
    }

    if(fields.length === 0)
    {
        throw new Error('No fields provided to update');
    }

    const sql = `UPDATE user SET ${fields.join(', ')} WHERE user_id = ?`;
    values.push(userId);

    const result = await DB_Helper.query(sql, values);
    return result.affectedRows;
}

export const deleteUserById = async(userId) => {
    const sql = 'DELETE FROM user WHERE user_id = ?';
    const result = await DB_Helper.query(sql, [userId]);

    return result.affectedRows;
}
