import { allImages } from "../repository/galleryRepository.js"
import { galleryUploadService } from "../service/galleryService.js"

export async function galleryUploadController(req, res) {
  try {
    const id = req.user.userId;
    const imageUrl = req.uploadedImage?.url;

    if (!id || !imageUrl) {
      return res.status(400).json({
        message: "Please upload a supported image",
      });
    }

    const result = await galleryUploadService({
      id,
      imageUrl,
    });

    return res.status(200).json({
      message: "Image upload successful",
      result,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}


export async function allImagesController(req, res) {
  try {
    const result = await allImages();

    if (result.length === 0) {
      return res.status(200).json({
        message: "Images are not available",
        result: [],
      });
    }

    return res.status(200).json({
      message: "Images are available",
      result,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}


export default {allImagesController,galleryUploadController}