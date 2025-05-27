import * as wishlistController from './wishlist.controller.js';
import express from 'express'

const router = express.Router();

router.get('/', wishlistController.getAllWishlistCnt);
router.get('/:id', wishlistController.getOneWishlistCnt);
router.post('/', wishlistController.createWishlistCnt);
router.put('/:id', wishlistController.updateWishlistCnt);
router.delete('/:id', wishlistController.deleteWishlistCnt);

export default router;
