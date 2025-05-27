import DB_Helper from "../../dbhelper.js";

export const getAllAttributes = async () => {
    return await DB_Helper.query('SELECT * FROM attribute')
}

export const getAttributeById = async (id) => {
    return await DB_Helper.query('SELECT * FROM attribute WHERE attribute_id = ?', [id])
    .then(rows => rows[0])
}

export const createAttribute = async ({name}) =>{
    const result = await DB_Helper.query('INSERT INTO attribute (name) VALUES (?)', [name])
    return {message: 'Attribute has been successfully created.'};
}

export const updateAttribute = async(id, updatedFields) => {
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

    const sql = `UPDATE attribute SET ${fields.join(', ')} WHERE attribute_id = ?`;
    values.push(id);

    const result = await DB_Helper.query(sql, values);

    return result.affectedRows;
}

export const deleteAttribute = async(id) => {
    const sql = 'DELETE FROM attribute WHERE attribute_id = ?';
    const result = await DB_Helper.query(sql, id);

    return result.affectedRows
}