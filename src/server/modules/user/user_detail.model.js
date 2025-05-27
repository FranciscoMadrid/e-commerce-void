import DB_Helper from "../../dbhelper.js";

export const getAllUserDetails = async () => {
    return await DB_Helper.query('SELECT * FROM user_detail')
}

export const getUserDetail = async (id) => {
    return await DB_Helper.query('SELECT * FROM user_detail WHERE user_detail_id = ?', [id])
    .then(rows => rows[0])
}

export const createUserDetail = async ({fk_user_id, address_1, address_2, city, country, telephone, postal_code}) =>{
    const result = await DB_Helper.query('INSERT INTO user_detail (fk_user_id, address_1, address_2, city, country, telephone, postal_code) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [fk_user_id, address_1, address_2, city, country, telephone, postal_code])
    return {message: 'User Detail has been successfully created.'};
}

export const updateUserDetail = async(id, updatedFields) => {
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

    const sql = `UPDATE user_detail SET ${fields.join(', ')} WHERE user_detail_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteUserDetail = async(id) => {
    const sql = 'DELETE FROM user_detail WHERE user_detail_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}