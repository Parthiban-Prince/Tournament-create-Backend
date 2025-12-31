import mongoose from "mongoose";

const admin = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


const adminSchema = mongoose.model("Admin", admin);

export default adminSchema;