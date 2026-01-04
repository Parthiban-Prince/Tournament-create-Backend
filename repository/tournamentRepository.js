import tournamentSchema from "../schema/tournamentSchema.js";

export async function createTournamentRepository(data) {
  try {

    console.log(data.qr)

    const tournament = new tournamentSchema({
      name: data.name,
      date: data.date,
      time: data.time,
      location: data.location,
      type: data.type,
      qrCode: data.qrUrl, // Cloudinary object or URL
      prize:data.prize,
      fee:data.entryFee
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