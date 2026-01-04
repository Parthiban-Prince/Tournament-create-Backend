import mongoose from "mongoose";


const tournament = new mongoose.Schema({
    name: { type: String, required: true, },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    qrCode: { type: String,default:null },
    prize:{type:String,required:true},
    fee:{type:Number,default:0}

});

const tournamentSchema = mongoose.model("tournament", tournament);

export default tournamentSchema;