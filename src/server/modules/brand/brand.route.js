import * as brandController from './brand.controller.js'
import express from 'express'

const router = express.Router();

router.get('/', brandController.getBrandsCnt);
router.get('/:id', brandController.getBrandCnt);
router.post('/', brandController.createBrandCnt);
router.put('/:id', brandController.updateBrandCnt);
router.delete('/:id', brandController.deleteBrandCnt);

export default router