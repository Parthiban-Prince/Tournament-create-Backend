import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    // Team name
    teamName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    // Captain (User reference)
    captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Team members (User references)
    members: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      validate: {
        validator: function (value) {
          return value.length <= 6;
        },
        message: "Team can have maximum 6 members",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Team", teamSchema);
