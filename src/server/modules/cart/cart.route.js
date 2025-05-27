import * as cartController from './cart.controller.js';
import express from 'express'

const router = express.Router();

// Cart Item ---------------------------------------------------
router.get('/item', cartController.getAllCartItemsCnt);
router.get('/item/:id', cartController.getCartItemCnt);
router.post('/item', cartController.createCartItemCnt);
router.put('/item/:id', cartController.updateCartItemCnt);
router.delete('/item/:id', cartController.deleteCartItemCnt);
// Main Cart ---------------------------------------------------
router.get('/', cartController.getAllCartsCnt);
router.get('/:id', cartController.getOneCartCnt);
router.post('/', cartController.createCartCnt);
router.put('/:id', cartController.updateCartCnt);
router.delete('/:id', cartController.deleteCartCnt);


export default router;
