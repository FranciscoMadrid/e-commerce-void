import DB_Helper from "../../dbhelper.js";

export const getAllCarts = async() => {
    return await DB_Helper.query('SELECT * FROM cart');
}

export const getOneCart = async(id) => {
    return await DB_Helper.query('SELECT * FROM cart WHERE cart_id = ?', [id])
    .then(rows => rows[0]);
}

export const createCart = async({fk_user_id}) => {
    const result = await DB_Helper.query('INSERT INTO cart (fk_user_id) VALUES (?)', 
        [fk_user_id]);
    return {message: 'Record has been created successfully.'};
}

export const updateCart = async(id, updatedFields) => {
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

    const sql = `UPDATE cart SET ${fields.join(', ')} WHERE cart_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteCart = async(id) => {
    const result = await DB_Helper.query('DELETE FROM cart WHERE cart_id = ?', [id])
    return result.affectedRows
}