import express from 'express';
import authenticateRequest from '../helper/authenication.js'
import {createUser,getUser,photoUpload,userProfile } from '../controller/userController.js';
import uploadUserPost from '../helper/Upload.js';
import upload from '../helper/multer.js';



const router = express.Router();

router.post('/login', getUser);


router.post('/register', createUser);

router.post('/password', (req, res) => {
  res.send('Password reset endpoint');
});


router.post('/edit', authenticateRequest, userProfile);

router.post('/profile', authenticateRequest,upload.single("profile"), uploadUserPost,photoUpload)





export default router;