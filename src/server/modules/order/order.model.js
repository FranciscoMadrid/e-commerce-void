import DB_Helper from "../../dbhelper.js";

export const getAllOrders = async () => {
    return await DB_Helper.query('SELECT * FROM order')
}

export const getOrderById = async (id) => {
    return await DB_Helper.query('SELECT * FROM order WHERE order_id = ?', [id])
    .then(rows => rows[0])
}

export const createOrder = async ({fk_user_id, fk_product_variant_id, order_status, total_amount, payment_Status, shupping_status, shipping_address, billing_address}) =>{
    const result = await DB_Helper.query('INSERT INTO order (fk_user_id, fk_product_variant_id, order_status, total_amount, payment_Status, shupping_status, shipping_address, billing_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [fk_user_id, fk_product_variant_id, order_status, total_amount, payment_Status, shupping_status, shipping_address, billing_address])
    return {message: 'Order has been successfully created.'};
}

export const updateOrder = async(id, updatedFields) => {
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

    const sql = `UPDATE order SET ${fields.join(', ')} WHERE order_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteOrder = async(id) => {
    const sql = 'DELETE FROM order WHERE order_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}