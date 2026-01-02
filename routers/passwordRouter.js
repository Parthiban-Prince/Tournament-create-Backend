import express from 'express';
import  {passwordReset} from '../controller/userController.js'

const router = express.Router();

router.post('/rest' ,passwordReset)

export default router;