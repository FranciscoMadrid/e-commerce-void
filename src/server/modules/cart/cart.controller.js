import * as Cart from './cart.model.js'
import * as CartItem from './cartItem.model.js'

const item = 'Cart';

// Cart Control ----------------------------------Start
export const getAllCartsCnt = async (req, res) => {
    try {
        const result = await Cart.getAllCarts();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneCartCnt = async (req, res) => {
    try {
        const result = await Cart.getOneCart(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createCartCnt = async(req, res) => {
    try {
        const result = await Cart.createCart(req.body);
        res.status(201).json(`${item} has been created.`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCartCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Cart.updateCart(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found or nothing changed` });
        }

        res.json({ message: `${item} has been successfully updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCartCnt = async(req, res) => {
    try {
        const affectedRows = await Cart.deleteCart(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found` });
        }
        res.json({ message: `${item} has been deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Cart Controll ----------------------------------------End

// Cart Item Control ----------------------------------Start

export const getAllCartItemsCnt = async(req, res) => {
    try {
        const result = await CartItem.getAllCartItems();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCartItemCnt = async(req, res) => {
    try {
        const result = await CartItem.getOneCartItem(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createCartItemCnt = async(req, res) => {
    try {
        const result = await CartItem.createCartItem(req.body);
        res.status(201).json(`${item} item has been created.`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCartItemCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await CartItem.updateCartItem(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} item not found or nothing changed` });
        }

        res.json({ message: `${item} item has been successfully updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCartItemCnt = async(req, res) => {
    try {
        const affectedRows = await CartItem.deleteCartItem(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} item not found` });
        }
        res.json({ message: `${item} item has been deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}