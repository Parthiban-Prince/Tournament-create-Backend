import TournamentRegister from "../schema/regTeamSchema.js";

export async function createTournamentRegistration(data) {
  return await TournamentRegister.create(data);
}

export async function findTeamRegistration(tournamentName, teamName) {
  return await TournamentRegister.findOne({
    tournamentName,
    teamName
  });
}
