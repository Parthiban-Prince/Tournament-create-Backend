import mongoose from "mongoose";

const voteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true // one vote per user
    },
    teamName: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Vote = mongoose.model("Vote", voteSchema);
export default Vote;
