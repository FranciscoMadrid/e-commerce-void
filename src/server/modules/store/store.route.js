import express from 'express'
import * as storeController from './store.controller.js'

const router = express.Router();
// Inventory----------------------------------------
router.get('/inventory', storeController.getInventoriesCnt);
router.get('/inventory/:id', storeController.getInventoryCnt);
router.post('/inventory', storeController.createInventoryCnt);
router.put('/inventory/:id', storeController.updateInventoryCnt);
router.delete('/inventory/:id', storeController.deleteInventoryCnt);

// Store----------------------------------------
router.get('/', storeController.getStoresCnt);
router.get('/:id', storeController.getStoreCnt);
router.post('/', storeController.createStoreCnt);
router.put('/:id', storeController.updateStoreCnt);
router.delete('/:id', storeController.deleteStoreCnt);

export default router;