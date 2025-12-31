import express from 'express';
import { admincontroller } from '../controller/adminController.js';

const router = express.Router();



router.post('/admin', admincontroller)


export default router;