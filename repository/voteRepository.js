import Vote from "../schema/voteSchema.js";

export async function upsertVote(userId, teamName) {
  return await Vote.findOneAndUpdate(
    { user: userId },
    { teamName },
    { upsert: true, new: true }
  );
}

export async function getVoteStats() {
  return await Vote.aggregate([
    {
      $group: {
        _id: "$teamName",
        count: { $sum: 1 }
      }
    }
  ]);
}

export async function getTotalVotes() {
  return await Vote.countDocuments();
}


export default {upsertVote,getTotalVotes,getVoteStats}
