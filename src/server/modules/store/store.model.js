import DB_Helper from "../../dbhelper.js";

export const getAllStores = async () => {
    return await DB_Helper.query('SELECT * FROM store')
}

export const getStoreById = async (id) => {
    return await DB_Helper.query('SELECT * FROM store WHERE store_id = ?', [id])
    .then(rows => rows[0])
}

export const createStore = async ({fk_user_id, name, email, city, country, address}) =>{
    const result = await DB_Helper.query('INSERT INTO store (fk_user_id, name, email, city, country, address) VALUES (?, ?, ?, ?, ?, ?)', 
        [fk_user_id, name, email, city, country, address])
    return {message: 'Store has been successfully created.'};
}

export const updateStore = async(id, updatedFields) => {
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

    const sql = `UPDATE store SET ${fields.join(', ')} WHERE store_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteStore = async(id) => {
    const sql = 'DELETE FROM store WHERE store_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}