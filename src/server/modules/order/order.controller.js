import * as Order from './order.model.js'

export const getOrdersCnt = async (req, res) => {
    try {
        const product = await Order.getAllOrders();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOrderCnt = async (req, res) => {
    try {
        const result = await Order.getOrderById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createOrderCnt = async(req, res) => {
    try {
        const result = await Order.createOrder(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateOrderCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Order.updateOrder(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Order not found or nothing changed' });
        }

        res.json({ message: 'Order updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteOrderCnt = async(req, res) => {
    try {
        const affectedRows = await Order.deleteOrder(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}