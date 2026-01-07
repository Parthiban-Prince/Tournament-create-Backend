import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    tournamentName: {
      type: String,
      required: true,
    },
    teamA: {
      type: String,
      required: true,
    },
    teamB: {
      type: String,
      required: true,
    },
    teamAScore: {
      type: Number,
      default: 0,
    },
    teamBScore: {
      type: Number,
      default: 0,
    },
    winner: {
      type: String,
      enum: ["teamA", "teamB", "Draw"],
    },
    status: {
      type: String,
      enum: ["Upcoming", "Completed"],
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

const Match = mongoose.model("Match", matchSchema);
export default Match;
