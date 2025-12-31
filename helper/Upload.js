import cloudinary from "../config/Cloudinaryconfig.js";

export default async function uploadUserPost(req, res, next) {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "userDetailsPost",
          public_id: Date.now() + "-" + Math.round(Math.random() * 1e9),
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(file.buffer);
    });

    // ✅ attach result to req for next middleware
    req.uploadedImage = {
      url: result.secure_url,
      public_id: result.public_id,
    };

    // 👉 pass control
    next();

  } catch (error) {
    return res.status(500).json({ message: "Upload failed" });
  }
}
