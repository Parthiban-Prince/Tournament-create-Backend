import { teamRepository } from "../repository/teamRepository";

export async function teamService(data) {


    try{

        const team  = await teamRepository(data)
        return team
    }
    catch(error){
        throw error
    }

    
}