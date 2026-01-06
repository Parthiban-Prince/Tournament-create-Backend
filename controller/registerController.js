import { tournamentRegisterService } from "../service/registerService.js";

export async function tournamentRegisterController(req, res) {
  try {


    const userId = req.user.userId;
    const { tournamentName, teamName } = req.body;
    const paymentScreenshot = req.uploadedImage?.url  || "free";


    if (!tournamentName || !teamName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await tournamentRegisterService(
      userId,
      tournamentName,
      teamName,
      paymentScreenshot
    );

    if (result.alreadyRegistered) {
      return res.status(409).json({
        message: "Team already registered for this tournament"
      });
    }

    return res.status(201).json({
      message: "Tournament registered successfully",
      registration: result.registration
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
