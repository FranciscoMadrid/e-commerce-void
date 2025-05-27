import * as Brand from './brand.model.js'

export const getBrandsCnt = async(req, res) => {
    try {
        const brands = await Brand.getAllBrands();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getBrandCnt = async(req, res) => {
    try {
        const brand = await Brand.getBrandByID(req.params.id);

        if(!brand)
        {
            return res.status(404).json({ error: 'Brand not found'})
        }

        res.json(brand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createBrandCnt = async(req, res) => {
    try {
        const result = await Brand.createBrand(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateBrandCnt = async(req, res) => {
    const id = req.params.id;
    const updateFields = req.body;

    try {
        const affectedRows = await Brand.updateBrand(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User not found or nothing changed' });
        }

        res.json({message: 'Brand has been updated'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteBrandCnt = async (req, res) => {
    try {
        const affectedRows = await Brand.deleteBrand(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}