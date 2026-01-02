import mongoose from "mongoose";

const tournamentRegisterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    tournamentName: {
      type: String,
      required: true,
      trim: true
    },
    teamName: {
      type: String,
      required: true,
      trim: true
    },
    paymentScreenshot: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// one team can register once per tournament
tournamentRegisterSchema.index(
  { tournamentName: 1, teamName: 1 },
  { unique: true }
);

export const TournamentRegister = mongoose.model(
  "TournamentRegister",
  tournamentRegisterSchema
);

export default TournamentRegister;
