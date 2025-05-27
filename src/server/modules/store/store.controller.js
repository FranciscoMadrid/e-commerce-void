import * as Store from './store.model.js'
import * as Inventory from './inventory.model.js'

// Store----------------------------------------
export const getStoresCnt = async (req, res) => {
    try {
        const product = await Store.getAllStores();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getStoreCnt = async (req, res) => {
    try {
        const result = await Store.getStoreById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createStoreCnt = async(req, res) => {
    try {
        const result = await Store.createStore(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateStoreCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Store.updateStore(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Attribute not found or nothing changed' });
        }

        res.json({ message: 'Attribute updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteStoreCnt = async(req, res) => {
    try {
        const affectedRows = await Store.deleteStore(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'Attribute deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Inventory----------------------------------------

export const getInventoriesCnt = async (req, res) => {
    try {
        const product = await Inventory.getAllInventory();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getInventoryCnt = async (req, res) => {
    try {
        const result = await Inventory.getInventoryById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createInventoryCnt = async(req, res) => {
    try {
        const result = await Inventory.createInventory(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateInventoryCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Inventory.updateInventory(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Attribute not found or nothing changed' });
        }

        res.json({ message: 'Attribute updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteInventoryCnt = async(req, res) => {
    try {
        const affectedRows = await Inventory.deleteInventory(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'Attribute deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}