import express from 'express'
import * as attributeController from './attribute.controller.js'

const router = express.Router();

router.get('/', attributeController.getAttributesCnt);
router.get('/:id', attributeController.getAttributeCnt);
router.post('/', attributeController.createAttributeCnt);
router.put('/:id', attributeController.updateAttributeCnt);
router.delete('/:id', attributeController.deleteAttributeCnt);

export default router;