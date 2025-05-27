import * as productController from './product.controller.js'
import express from 'express'
import * as authRoleMiddleware from '../middleware/auth_role.middleware.js';
import * as authTokenMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Product Variant Attribute
router.get('/variant/attribute', productController.getProductAttributesCnt);
router.get('/variant/attribute/:id', productController.getProductAttributeCnt);
router.post('/variant/attribute', productController.createProductAttributeCnt);
router.put('/variant/attribute/:id', productController.updateProductAttributeCnt);
router.delete('/variant/attribute/:id', productController.deleteProductAttributeCnt);

// Product Image-----------------------------------------
router.get('/image', productController.getProductImagesCnt);
router.get('/image/:id', productController.getProductImageCnt);
router.post('/image', productController.createProductImageCnt);
router.put('/image/:id', productController.updateProductImageCnt);
router.delete('/image/:id', productController.deleteProductImageCnt);

// Product Attribute-----------------------------------------
router.get('/attribute', productController.getProductAttributesCnt);
router.get('/attribute/:id', productController.getProductAttributeCnt);
router.post('/attribute', productController.createProductAttributeCnt);
router.put('/attribute/:id', productController.updateProductAttributeCnt);
router.delete('/attribute/:id', productController.deleteProductAttributeCnt);

// Product Variant-----------------------------------------
router.get('/variant', productController.getAllVariantsCnt);
router.get('/variant/:id', productController.getOneVariantCnt);
router.post('/variant', productController.createVariantCnt);
router.put('/variant/:id', productController.updateVariantCnt);
router.delete('/variant/:id', productController.deleteVariantCnt);

// Product Category------------------------------------------
router.get('/category', productController.getProductCategoriesCnt);
router.get('/category/:id', productController.getProductCategoryCnt);
router.post('/category', productController.createProductCategoryCnt);
router.put('/category/:id', productController.updateProductCategoryCnt);
router.delete('/category/:id', productController.deleteProductCategoryCnt);

// Product---------------------------------------------------
router.get('/', productController.getProductsCnt);
router.get('/:id',productController.getProductCnt);
router.post('/', productController.createProductCnt);
router.put('/:id', productController.updateProductCnt);
router.delete('/:id', productController.deleteProductCnt);


export default router;