import DB_Helper from "../../dbhelper.js";

export const getAllProducts = async () => {
    return await DB_Helper.query('SELECT * FROM product')
}

export const getProductById = async (id) => {
    return await DB_Helper.query('SELECT * FROM product WHERE product_id = ?', [id])
    .then(rows => rows[0])
}

export const createProduct = async ({name, fk_brand_id, description, fk_product_category_id, sku}) =>{
    const result = await DB_Helper.query('INSERT INTO product (name, fk_brand_id, description, fk_product_category_id, sku) VALUES (?, ?, ?, ?, ?)', 
        [name, fk_brand_id, description, fk_product_category_id, sku]);
    return {message: 'Product has been successfully created.'};
}

export const updateProduct = async(id, updatedFields) => {
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

    const sql = `UPDATE product SET ${fields.join(', ')} WHERE product_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteProduct = async(id) => {
    const sql = 'DELETE FROM product WHERE product_id = ?';
    const result = await DB_Helper(sql, id);

    return result.affectedRows
}