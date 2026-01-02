import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    // who uploaded
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // image / video url (Cloudinary)
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gallery", gallerySchema);