import express from 'express'
import * as orderController from './order.controller.js'

const router = express.Router();

router.get('/', orderController.getOrdersCnt);
router.get('/:id', orderController.getOrderCnt);
router.post('/', orderController.createOrderCnt);
router.put('/:id', orderController.updateOrderCnt);
router.delete('/:id', orderController.deleteOrderCnt);

export default router;