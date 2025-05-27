import DB_Helper from "../../dbhelper.js";

export const getAllCartItems = async() => {
    return await DB_Helper.query('SELECT * FROM cart_item');
}

export const getOneCartItem = async(id) => {
    return await DB_Helper.query('SELECT * FROM cart_item WHERE cart_item_id = ?', [id])
    .then(rows => rows[0]);
}

export const createCartItem = async({fk_cart_id, fk_product_variant_id, quantity}) => {
    const result = await DB_Helper.query('INSERT INTO cart_item (fk_cart_id, fk_product_variant_id, quantity) VALUES (?, ?, ?)', 
        [fk_cart_id, fk_product_variant_id, quantity]);
    return {message: 'Record has been created successfully.'};
}

export const updateCartItem = async(id, updatedFields) => {
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

    const sql = `UPDATE cart_item SET ${fields.join(', ')} WHERE cart_item_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteCartItem = async(id) => {
    const result = await DB_Helper.query('DELETE FROM cart_item WHERE cart_item_id = ?', [id])
    return result.affectedRows
}