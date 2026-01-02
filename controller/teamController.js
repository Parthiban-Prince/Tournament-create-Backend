import { createTeamService,teamListService ,joinTeamService, leaveTeamService,getTeamDetailsService} from "../service/teamService.js"


export async function teamCreateController(req,res){

    try{

        console.log(req)

        const teams = await createTeamService({
            captain:req.user.userId,
            teamName:req.body.Teamname,
            members:[req.user.userId]
        })
        return res.status(200).json({message:"Team created successfully",teams})

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"Interanl Server Error"})
    }

}

export async function getTeamController(req,res) {

    try{

        console.log(req)

        const teamlist = await teamListService()
        return res.status(200).json({message:"Team List",teamlist})
    }
    catch(error){
        return res.status(500).json({message:"Interanl Server Error"})
    }
    
}



import {  } from "../service/teamService.js";

export async function joinTeamController(req, res) {
  try {
    const userId = req.user.userId;
    const { teamId } = req.params;

    if (!teamId) {
      return res.status(400).json({ message: "Team ID is required" });
    }

    const team = await joinTeamService(teamId, userId);

    return res.status(200).json({
      message: "Joined team successfully",
      team,
    });

  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
}

export async function leaveTeamController(req, res) {
  try {
    const userId = req.user.userId;
    const { teamId } = req.params;

    if (!teamId) {
      return res.status(400).json({ message: "Team ID is required" });
    }

    const team = await leaveTeamService(teamId, userId);

    return res.status(200).json({
      message: "Left team successfully",
      team,
    });

  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
}

export async function getTeamDetailsRepository(req, res) {
  try {

 

    const teamId=req.params.teamId


    const team = await getTeamDetailsService(teamId)

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    return res.status(200).json({ team });

  } catch (error) {
   console.log(error.message)
    return res.status(500).json({ message: "Server error" });
  }
}




export default{teamCreateController,getTeamController,  joinTeamController,
  leaveTeamController,}