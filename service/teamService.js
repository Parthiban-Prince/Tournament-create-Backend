import { teamRepository,getTeamsRepository ,joinTeamRepository, leaveTeamRepository,getTeamDetailsRepository} from "../repository/teamRepository.js";

export async function createTeamService(data) {


    try{

        
        const team  = await teamRepository(data)
        return team
    }
    catch(error){
        throw error
    }

    
}

export async function teamListService(data) {

    try{
        const teamlist = await getTeamsRepository(data)
        return teamlist
    }
    catch(error)
    {
        throw error
    }
    
}





export async function joinTeamService(teamId, userId) {
  try {
    return await joinTeamRepository(teamId, userId);
  } catch (error) {
    throw error;
  }
}

export async function leaveTeamService(teamId, userId) {
  try {
    return await leaveTeamRepository(teamId, userId);
  } catch (error) {
    throw error;
  }
}


export async function getTeamDetailsService(data) {
  try {


    const team = await getTeamDetailsRepository(data)
    return team
  } catch (error) {
    throw error
  }
}




export default {createTeamService,teamListService,joinTeamRepository, leaveTeamRepository,getTeamDetailsService}