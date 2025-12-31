import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const user = new mongoose.Schema({
    name: {type: String, required: true ,},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},
    role:{type:String, default:"user"},
    photo:{type:String, default:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"},

});

user.pre("save", function EncryptPassword() {
    const user = this;

    const SaltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, SaltRounds);
    user.password = hashedPassword;

});

export const userSchema = mongoose.model("User", user);

export default userSchema;