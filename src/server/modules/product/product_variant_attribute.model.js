import DB_Helper from "../../dbhelper.js"

export const getAllProductVAs = async () => {
    return await DB_Helper.query('SELECT * FROM product_variant_attribute');
}

export const getProductVA = async (id) => {
    return await DB_Helper.query('SELECT * FROM product_variant_attribute WHERE product_variant_attribute_id = ?', [id])
    .then(rows => rows[0]);
}

export const createProductVA = async({fk_product_variant_id, fk_attribute_id, value}) => {
    const result = await DB_Helper.query('INSERT INTO product_variant_attribute (fk_product_variant_id, fk_attribute_id, value) VALUES (?, ?, ?)', 
        [fk_product_variant_id, fk_attribute_id, value]);
    return {message: 'Record has been created successfully.'};
}

export const updateProductVA = async(id, updatedFields) => {
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

    const sql = `UPDATE product_variant_attribute SET ${fields.join(', ')} WHERE product_variant_attribute_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteProductVA =async(id) => {
    const result = await DB_Helper.query('DELETE FROM product_variant_attribute WHERE product_variant_attribute_id = ?', [id]);
    return result.affectedRows;
}