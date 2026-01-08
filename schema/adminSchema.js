import mongoose from "mongoose";

const admin = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    default:"adminlogin@gmail.com"
  },
  password: {
    type: String,
    required: true,
    default:"admin"
  }
});


const adminSchema = mongoose.model("Admin", admin);

export default adminSchema;