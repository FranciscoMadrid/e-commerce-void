import DB_Helper from "../../dbhelper.js";

export const getAllUserPayments = async () => {
    return await DB_Helper.query('SELECT * FROM user_payment')
}

export const getUserPayment = async (id) => {
    return await DB_Helper.query('SELECT * FROM user_payment WHERE user_payment_id = ?', [id])
    .then(rows => rows[0])
}

export const createUserPayment = async ({fk_user_id, payment_type, provider, account_last4, token, is_default}) =>{
    const result = await DB_Helper.query('INSERT INTO user_payment (fk_user_id, payment_type, provider, account_last4, token, is_default) VALUES (?, ?, ?, ?, ?, ?)', 
        [fk_user_id, payment_type, provider, account_last4, token, is_default])
    return {message: 'User Payment has been successfully created.'};
}

export const updateUserPayment = async(id, updatedFields) => {
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

    const sql = `UPDATE user_payment SET ${fields.join(', ')} WHERE user_payment_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteUserPayment = async(id) => {
    const sql = 'DELETE FROM user_payment WHERE user_payment_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}