import cloudinary from "../config/cloudinaryConfig.js";

export default async function uploadUserPost(req, res, next) {
  try {
    const file = req.file;

    // If no file, just skip upload and continue
    if (!file) {
      return next();
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "userDetailsPost",
          public_id: Date.now() + "-" + Math.round(Math.random() * 1e9),
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(file.buffer);
    });

    // Attach uploaded image info to req
    req.uploadedImage = {
      url: result.secure_url,
      public_id: result.public_id,
    };

    next();
  } catch (error) {
    return res.status(500).json({ message: "Upload failed" });
  }
}

