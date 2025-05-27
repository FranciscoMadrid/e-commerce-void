import db from './db.js'; 

class DB_Helper {
    static async query(sql, params = []) {
        try {
                const [result] = await db.query(sql, params);
                return result;
            } catch (error) {
                console.error('Database query error:', error);
                throw error;
            }
    }
}

export default DB_Helper;