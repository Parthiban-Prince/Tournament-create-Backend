import tournamentSchema from "../schema/tournamentSchema.js";

export async function createTournamentRepository(data) {
  try {

    const tournament = new tournamentSchema({
      name: data.name,
      date: data.date,
      time: data.time,
      location: data.location,
      type: data.type,
      qrCode: data.qr, // Cloudinary object or URL
      prize:data.prize
    });

    const result = await tournament.save();
    return result;

  } catch (error) {
    throw error;
  }
}



export async function deleteTournamentRepository(data) {
    try {

        const result = await tournamentSchema.findOneAndDelete({ name: data });
        console.log(result)
        return result;
    }catch (error) {
        throw error;
    }}


   


export default { createTournamentRepository, deleteTournamentRepository };