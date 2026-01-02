import express from 'express';
import authenticateRequest from '../helper/authenication.js';
import upload from '../helper/multer.js';
import uploadGalleryImage from '../helper/Upload.js';
import { galleryUploadController,allImagesController } from '../controller/galleryController.js';

const router = express.Router();

// Define your gallery routes here
router.get('/images', allImagesController)


router.post('/upload', authenticateRequest, upload.single('image'), uploadGalleryImage,galleryUploadController)

export default router;