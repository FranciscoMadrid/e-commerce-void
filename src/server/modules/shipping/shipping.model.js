import DB_Helper from "../../dbhelper.js";

export const getAllShippings = async () => {
    return await DB_Helper.query('SELECT * FROM shipping')
}

export const getShippingById = async (id) => {
    return await DB_Helper.query('SELECT * FROM shipping WHERE shipping_id = ?', [id])
    .then(rows => rows[0])
}

export const createShipping = async ({fk_order_id, fk_shipping_method_id, tracking_number, shipping_status}) =>{
    const result = await DB_Helper.query('INSERT INTO shipping (fk_order_id, fk_shipping_method_id, tracking_number, shipping_status) VALUES (?, ?, ?, ?)', 
        [fk_order_id, fk_shipping_method_id, tracking_number, shipping_status])
    return {message: 'Shipping has been successfully created.'};
}

export const updateShipping = async(id, updatedFields) => {
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

    const sql = `UPDATE shipping SET ${fields.join(', ')} WHERE shipping_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteShipping = async(id) => {
    const sql = 'DELETE FROM shipping WHERE shipping_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}