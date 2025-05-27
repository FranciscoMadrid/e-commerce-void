import * as Wishlist from './wishlist.model.js'
import * as WishlistItem from './wishlistItem.model.js';

const item = 'Wishlist';

export const getAllWishlistCnt = async (req, res) => {
    try {
        const product = await Wishlist.getAllWishlist();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneWishlistCnt = async (req, res) => {
    try {
        const result = await Wishlist.getOneWishlist(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createWishlistCnt = async(req, res) => {
    try {
        const result = await Wishlist.createWishlist(req.body);
        res.status(201).json(`${item} has been created.`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateWishlistCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Wishlist.updateWishlist(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found or nothing changed` });
        }

        res.json({ message: `${item} has been successfully updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteWishlistCnt = async(req, res) => {
    try {
        const affectedRows = await Wishlist.deleteWishlist(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found` });
        }
        res.json({ message: `${item} has been deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Wishlist Control ----------------------------------End

// Wishlist Item Control ---------------------------Start

export const getAllWishlistItemCnt = async (req, res) => {
    try {
        const product = await WishlistItem.getAllWishlistItems();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneWishlistItemCnt = async (req, res) => {
    try {
        const result = await WishlistItem.getOneWishlistItem(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createWishlistItemCnt = async(req, res) => {
    try {
        const result = await WishlistItem.createWishlistItem(req.body);
        res.status(201).json(`${item} has been created.`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateWishlistItemCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await WishlistItem.updateWishlistItem(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found or nothing changed` });
        }

        res.json({ message: `${item} has been successfully updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteWishlistItemCnt = async(req, res) => {
    try {
        const affectedRows = await WishlistItem.deleteWishlistItem(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found` });
        }
        res.json({ message: `${item} has been deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Wishlist Item Control -----------------------------End