import { voteService } from "../service/voteService.js"

export async function voteController(req, res) {
  try {
    const userId = req.user.userId;
    const { teamName } = req.body;

    if (!teamName) {
      return res.status(400).json({ message: "Team name is required" });
    }

    const result = await voteService(userId, teamName);

    return res.status(200).json({
      message: "Vote recorded successfully",
      result
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}


export default voteController