import DB_Helper from "../../dbhelper.js";

export const getAllVariants = async() => {
    return await DB_Helper.query('SELECT * FROM product_variant');
}

export const getOneVariant = async(id) => {
    return await DB_Helper.query('SELECT * FROM product_variant WHERE product_variant_id = ?', [id])
    .then(rows => rows[0]);
}

export const createVariant = async({fk_product_id, sku, price}) => {
    const result = await DB_Helper.query('INSERT INTO product_variant (fk_product_id, sku, price) VALUES (?, ?, ?)', 
        [fk_product_id, sku, price]);
    return {message: 'Record has been created successfully.'};
}

export const updateVariant = async(id, updatedFields) => {
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

    const sql = `UPDATE product_variant SET ${fields.join(', ')} WHERE product_variant_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteVariant = async(id) => {
    const result = await DB_Helper.query('DELETE FROM product_variant WHERE product_variant_id = ?', [id])
    return result.affectedRows
}