import teamSchema from '../schema/TeamSchema.js'

export async function teamRepository(data) {


    try{

        const team  = await  teamSchema.create(data)
        return team

    }
    catch(error){
        throw error
    }
    
}

export async function getTeamsRepository(data) {

    try{
        const teamlist = await teamSchema.find()
        return teamlist
    }
    catch(error){
        throw error
    }
    
}


export async function joinTeamRepository(teamId, userId) {
  try {
    const team = await teamSchema.findById(teamId);

    if (!team) {
      throw new Error("Team not found");
    }

    if (team.members.includes(userId)) {
      throw new Error("User already in team");
    }

    if (team.members.length >= 6) {
      throw new Error("Team is already full");
    }

    team.members.push(userId);
    await team.save();

    return team;
  } catch (error) {
    throw error;
  }
}

export async function leaveTeamRepository(teamId, userId) {
  try {
    const team = await teamSchema.findById(teamId);

    if (!team) {
      throw new Error("Team not found");
    }

    if (!team.members.includes(userId)) {
      throw new Error("User is not a member of this team");
    }

    // ❌ Captain cannot leave the team
    if (team.captain.toString() === userId) {
      throw new Error("Captain cannot leave the team");
    }

    team.members = team.members.filter(
      (member) => member.toString() !== userId
    );

    await team.save();
    return team;

  } catch (error) {
    throw error;
  }
}


export async function getTeamDetailsRepository(data) {
  try {
    const teamId = data

    const team = await teamSchema
      .findById(teamId)
      .populate("captain", "name email")
      .populate("members", "name email");

      console.log(team)

      return team

  } catch (error) {
   throw error
  }
}



export default {teamRepository,getTeamsRepository ,   joinTeamRepository,
  leaveTeamRepository,getTeamDetailsRepository }