import DB_Helper from "../../dbhelper.js"

export const getAllBrands = async() => {
    return await DB_Helper.query('SELECT * FROM brand');
} 

export const getBrandByID = async(id) => {
    return await DB_Helper.query('SELECT * FROM brand WHERE brand_id = ?', [id])
    .then(rows => rows[0]);
}

export const createBrand = async({name}) => {
    const result = await DB_Helper.query('INSERT INTO brand (name) VALUES (?)', [name]);

    return {message: 'Brand has been successfully created.'}
}

export const updateBrand = async(id, updatedFields) => {
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

    const sql = `UPDATE brand SET ${fields.join(', ')} WHERE brand_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteBrand = async(id) => {
    const result = await DB_Helper.query('DELETE FROM brand WHERE brand_id = ?', [id]);
    return result.affectedRows;
}