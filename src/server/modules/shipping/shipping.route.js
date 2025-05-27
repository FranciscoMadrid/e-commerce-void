import express from 'express'
import * as shippingController from './shipping.controller.js'

const router = express.Router();

router.get('/', shippingController.getShippingsCnt);
router.get('/:id', shippingController.getShippingCnt);
router.post('/', shippingController.createShippingCnt);
router.put('/:id', shippingController.updateShippingCnt);
router.delete('/:id', shippingController.deleteShippingCnt);

export default router;