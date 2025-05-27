import DB_Helper from "../../dbhelper.js";

export const getAllWishlist = async() => {
    return await DB_Helper.query('SELECT * FROM wishlist');
}

export const getOneWishlist = async(id) => {
    return await DB_Helper.query('SELECT * FROM wishlist WHERE wishlist_id = ?', [id])
    .then(rows => rows[0]);
}

export const createWishlist = async({fk_user_id}) => {
    const result = await DB_Helper.query('INSERT INTO wishlist (fk_user_id) VALUES (?)', 
        [fk_user_id]);
    return {message: 'Record has been created successfully.'};
}

export const updateWishlist = async(id, updatedFields) => {
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

    const sql = `UPDATE wishlist SET ${fields.join(', ')} WHERE wishlist_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteWishlist = async(id) => {
    const result = await DB_Helper.query('DELETE FROM wishlist WHERE wishlist_id = ?', [id])
    return result.affectedRows
}