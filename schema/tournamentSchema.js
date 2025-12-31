import mongoose from "mongoose";


const tournament = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    qrCode: { type: String, default: null }
});

const tournamentSchema = mongoose.model("tournament", tournament);

export default tournamentSchema;