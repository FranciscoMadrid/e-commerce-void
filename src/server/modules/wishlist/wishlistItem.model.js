import DB_Helper from "../../dbhelper.js";

export const getAllWishlistItems = async() => {
    return await DB_Helper.query('SELECT * FROM wishlist_item');
}

export const getOneWishlistItem = async(id) => {
    return await DB_Helper.query('SELECT * FROM wishlist_item WHERE wishlist_item_id = ?', [id])
    .then(rows => rows[0]);
}

export const createWishlistItem = async({fk_product_variant_id}) => {
    const result = await DB_Helper.query('INSERT INTO wishlist_item (fk_product_variant_id) VALUES (?)', 
        [fk_product_variant_id]);
    return {message: 'Record has been created successfully.'};
}

export const updateWishlistItem = async(id, updatedFields) => {
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

    const sql = `UPDATE wishlist_item SET ${fields.join(', ')} WHERE wishlist_item_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteWishlistItem = async(id) => {
    const result = await DB_Helper.query('DELETE FROM wishlist_item WHERE wishlist_item_id = ?', [id])
    return result.affectedRows
}