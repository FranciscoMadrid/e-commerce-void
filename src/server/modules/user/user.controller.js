import * as User from './user.model.js'
import * as UserDetail from './user_detail.model.js';
import * as UserPayment from './user_payment.model.js';

export const getUsersCnt = async(req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserCnt = async(req, res) => {
    try {
        const user = await User.getUserById(req.params.id);

        if(!user)
        {
            return res.status(404).json({ error: 'User not found'})
        }

        res.json(user); 
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

export const createUserCnt = async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
            res.status(500).json({ error: error.message });
    }
}

export const updateUserCnt = async(req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        const affectedRows = await User.updateUserById(userId, updateData);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User not found or nothing changed' });
        }

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: `Failed to update user ${error}` });
    }
}

export const deleteUserCnt = async(req, res) => {
    const userId = req.params.id;

    try {
        const affectedRows = await User.deleteUserById(userId);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: `Failed to delete user: ${error.message}` });
    }
}

// User Detail------------------------------------------

export const getUserDetailsCnt = async (req, res) => {
    try {
        const product = await UserDetail.getAllUserDetails();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserDetailCnt = async (req, res) => {
    try {
        const result = await UserDetail.getUserDetail(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createUserDetailCnt = async(req, res) => {
    try {
        const result = await UserDetail.createUserDetail(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserDetailCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await UserDetail.updateUserDetail(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User Detail not found or nothing changed' });
        }

        res.json({ message: 'User Detail updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserDetailCnt = async(req, res) => {
    try {
        const affectedRows = await UserDetail.deleteUserDetail(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'User Detail deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// User Payment------------------------------------------

export const getUserPaymentsCnt = async (req, res) => {
    try {
        const product = await UserPayment.getAllUserPayments();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserPaymentCnt = async (req, res) => {
    try {
        const result = await UserPayment.getUserPayment(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createUserPaymentCnt = async(req, res) => {
    try {
        const result = await UserPayment.createUserPayment(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserPaymentCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await UserPayment.updateUserPayment(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User Payment not found or nothing changed' });
        }

        res.json({ message: 'User Payment updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserPaymentCnt = async(req, res) => {
    try {
        const affectedRows = await UserPayment.deleteUserPayment(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'User Payment not found' });
        }
        res.json({ message: 'User Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}