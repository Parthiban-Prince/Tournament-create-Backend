import {createTournamentService,deleteTournamentService}from '../service/tournamentService.js';

export async function createTournamentController(req, res) {
  try {

    // ✅ normalize body
    const body = { ...req.body };

    const {
      name,
      date,
      time,
      location,
      type
    } = body;

    const qr = req.uploadedImage || null;

    const qrUrl = qr ? qr.url : null


    // ✅ validation
    if (!name || !date || !time || !location || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const tournament = await createTournamentService({
      name,
      date,
      time,
      location,
      type,
      qrUrl
    });

    return res.status(201).json({ tournament });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function deleteTournamentController(req, res) {
    try {


        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const tournament = await deleteTournamentService(name);

        if (!tournament) {
            return res.status(404).json({ message: "Tournament not found" });
        }
        return res.status(200).json({ message: "Tournament deleted successfully", tournament });

    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error" + error.message });
    } 

}


export default { createTournamentController, deleteTournamentController };