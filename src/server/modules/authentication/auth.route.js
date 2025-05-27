import express from 'express'
import * as Auth from './auth.controller.js'

const router = express.Router();

router.post('/login', Auth.login);
router.post('/logout', Auth.logout);

export default router