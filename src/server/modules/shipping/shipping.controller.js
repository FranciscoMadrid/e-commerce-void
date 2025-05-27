import * as Shipping from './shipping.model.js'

export const getShippingsCnt = async (req, res) => {
    try {
        const product = await Shipping.getAllShippings();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getShippingCnt = async (req, res) => {
    try {
        const result = await Shipping.getShippingById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createShippingCnt = async(req, res) => {
    try {
        const result = await Shipping.createShipping(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateShippingCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Shipping.updateShipping(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Shipping not found or nothing changed' });
        }

        res.json({ message: 'Shipping updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteShippingCnt = async(req, res) => {
    try {
        const affectedRows = await Shipping.deleteShipping(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Shipping not found' });
        }
        res.json({ message: 'Shipping deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}