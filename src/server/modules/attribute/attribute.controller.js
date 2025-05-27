import * as Attribute from './attribute.model.js'

export const getAttributesCnt = async (req, res) => {
    try {
        const product = await Attribute.getAllAttributes();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAttributeCnt = async (req, res) => {
    try {
        const result = await Attribute.getAttributeById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createAttributeCnt = async(req, res) => {
    try {
        const result = await Attribute.createAttribute(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateAttributeCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Attribute.updateAttribute(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Attribute not found or nothing changed' });
        }

        res.json({ message: 'Attribute updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteAttributeCnt = async(req, res) => {
    try {
        const affectedRows = await Attribute.deleteAttribute(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'Attribute deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}