import DB_Helper from "../../dbhelper.js"

export const getAllProductImages = async () => {
    return await DB_Helper.query('SELECT * FROM product_image');
}

export const getProductImage = async (id) => {
    return await DB_Helper.query('SELECT * FROM product_image WHERE product_image_id = ?', [id])
    .then(rows => rows[0]);
}

export const createProductImage = async({fk_product_id, image_path, alt_text}) => {
    const result = await DB_Helper.query('INSERT INTO product_image (fk_product_id, image_path, alt_text) VALUES (?, ?, ?)', 
        [fk_product_id, image_path, alt_text]);
    return {message: 'Record has been created successfully.'};
}

export const updateProductImage = async(id, updatedFields) => {
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

    const sql = `UPDATE product_image SET ${fields.join(', ')} WHERE product_image_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteProductImage =async(id) => {
    const result = await DB_Helper.query('DELETE FROM product_image WHERE product_image_id = ?', [id]);
    return result.affectedRows;
}