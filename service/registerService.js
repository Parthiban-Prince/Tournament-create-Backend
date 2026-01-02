import {
  createTournamentRegistration,
  findTeamRegistration
} from "../repository/registerRepository.js";

export async function tournamentRegisterService(
  userId,
  tournamentName,
  teamName,
  paymentScreenshot
) {
  // prevent duplicate team registration
  const existing = await findTeamRegistration(tournamentName, teamName);

  if (existing) {
    return { alreadyRegistered: true };
  }

  const registration = await createTournamentRegistration({
    user: userId,
    tournamentName,
    teamName,
    paymentScreenshot
  });

  return { alreadyRegistered: false, registration };
}
