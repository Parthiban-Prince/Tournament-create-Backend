import express from 'express';
import authenticateRequest from '../helper/authenication.js';
import upload from '../helper/multer.js';
import uploadGalleryImage from '../helper/Upload.js';

const router = express.Router();

// Define your gallery routes here
router.get('/images', (req, res) => {
  res.json({
    image1: "https://banner2.cleanpng.com/20240118/vrg/transparent-volleyball-volleyball-blue-and-yellow-striped-patt-circular-blue-and-yellow-volleyball-with-1710917677675.webp",
    image2: "https://www.pngall.com/wp-content/uploads/5/Volleyball-PNG-High-Quality-Image.png",
    image3: "https://www.pngall.com/wp-content/uploads/5/Volleyball-PNG-File.png"
  });
});


router.post('/upload', authenticateRequest, upload.single('image'), uploadGalleryImage,(req, res) => {
  // Handle image upload logic here
  res.json({ message: 'Image uploaded successfully!' });
});

export default router;