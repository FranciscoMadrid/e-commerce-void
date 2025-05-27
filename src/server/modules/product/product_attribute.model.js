import DB_Helper from "../../dbhelper.js"

export const getAllProductAttributes = async () => {
    return await DB_Helper.query('SELECT * FROM product_attribute');
}

export const getProductAttribute = async (id) => {
    return await DB_Helper.query('SELECT * FROM product_attribute WHERE product_attribute_id = ?', [id])
    .then(rows => rows[0]);
}

export const createProductAttribute = async({fk_product_id, fk_attribute_id, value}) => {
    const result = await DB_Helper.query('INSERT INTO product_attribute (fk_product_id, fk_attribute_id, value) VALUES (?, ?, ?)', 
        [fk_product_id, fk_attribute_id, value]);
    return {message: 'Record has been created successfully.'};
}

export const updateProductAttribute = async(id, updatedFields) => {
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

    const sql = `UPDATE product_attribute SET ${fields.join(', ')} WHERE product_attribute_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteProductAttribute =async(id) => {
    const result = await DB_Helper.query('DELETE FROM product_attribute WHERE product_attribute_id = ?', [id]);
    return result.affectedRows;
}