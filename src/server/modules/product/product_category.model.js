import DB_Helper from "../../dbhelper.js"

export const getAllCategories = async () => {
    return await DB_Helper.query('SELECT * FROM product_category');
}

export const getCategoryById = async (id) => {
    return await DB_Helper.query('SELECT * FROM product_category WHERE product_category_id = ?', [id])
    .then(rows => rows[0]);
}

export const createCategory = async({category, parent_category_id = null}) => {
    let sql = '';
    let params = '';

    if(!parent_category_id)
    {
        sql = 'INSERT INTO product_category (category) VALUES (?)';
        params = [category];
    }
    else
    {
        sql = 'INSERT INTO product_category (category, parent_category_id) VALUES (?, ?)';
        params = [category, parent_category_id];
    }
    
    const result = await DB_Helper.query(sql, params);
    
    return {message: 'Product Category was successfully created.'};
}

export const updateCategory = async(id, updatedFields) => {
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

    const sql = `UPDATE product_category SET ${fields.join(', ')} WHERE product_category_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteCategory =async(id) => {
    const result = await DB_Helper.query('DELETE FROM product_category WHERE product_category_id = ?', [id]);
    return result.affectedRows;
}