import express from 'express'
import * as userControll from './user.controller.js'
import * as authUtil from '../middleware/auth.middleware.js'

const router = express.Router();

router.use(authUtil.authenticateToken);

//User Details-----------------------------------------
router.get('/payment', userControll.getUserPaymentsCnt);
router.get('/payment/:id', userControll.getUserPaymentCnt);
router.post('/payment', userControll.createUserPaymentCnt);
router.put('/payment/:id', userControll.updateUserPaymentCnt);
router.delete('/payment/:id', userControll.deleteUserPaymentCnt);

//User Details-----------------------------------------
router.get('/detail', userControll.getUserDetailsCnt);
router.get('/detail/:id', userControll.getUserDetailCnt);
router.post('/detail', userControll.createUserDetailCnt);
router.put('/detail/:id', userControll.updateUserDetailCnt);
router.delete('/detail/:id', userControll.deleteUserDetailCnt);


// Main User-----------------------------------------
router.get('/', userControll.getUsersCnt);
router.get('/:id', userControll.getUserCnt);
router.post('/', userControll.createUserCnt);
router.put('/:id', userControll.updateUserCnt);
router.delete('/:id', userControll.deleteUserCnt);

export default router;