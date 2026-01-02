import { upsertVote, getVoteStats, getTotalVotes } from "../repository/voteRepository.js";

export async function voteService(userId, teamName) {
  // save or update vote
  await upsertVote(userId, teamName);

  // get stats
  const stats = await getVoteStats();
  const totalVotes = await getTotalVotes();

  // calculate percentage
  const result = stats.map(item => ({
    teamName: item._id,
    votes: item.count,
    percentage: ((item.count / totalVotes) * 100).toFixed(2)
  }));

  return {
    totalVotes,
    teams: result
  };
}


export default voteService