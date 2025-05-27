import DB_Helper from "../../dbhelper.js";

export const getAllInventory = async () => {
    return await DB_Helper.query('SELECT * FROM inventory')
}

export const getInventoryById = async (id) => {
    return await DB_Helper.query('SELECT * FROM inventory WHERE inventory_id = ?', [id])
    .then(rows => rows[0])
}

export const createInventory = async ({fk_store_id, fk_product_variant, stock_quantity, low_stock_threshold_trigger}) =>{
    const result = await DB_Helper.query('INSERT INTO inventory (fk_store_id, fk_product_variant, stock_quantity, low_stock_threshold_trigger) VALUES (?, ?, ?, ?)', 
        [fk_store_id, fk_product_variant, stock_quantity, low_stock_threshold_trigger])
    return {message: 'Inventory has been successfully created.'};
}

export const updateInventory = async(id, updatedFields) => {
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

    const sql = `UPDATE inventory SET ${fields.join(', ')} WHERE inventory_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteInventory = async(id) => {
    const sql = 'DELETE FROM inventory WHERE inventory_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}