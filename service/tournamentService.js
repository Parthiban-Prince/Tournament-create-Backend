import { createTournamentRepository, deleteTournamentRepository } from "../repository/tournamentRepository.js";


export async function createTournamentService(data){


    try{
        console.log(data)

        const result = await createTournamentRepository(data);
        return result;
    }
    catch(error){
        throw error;
    }
}


export async function deleteTournamentService(data){
    try{


        
        const result = await deleteTournamentRepository(data);
        return result;
    }
    catch(error){
        throw error;
    }}

export default { createTournamentService, deleteTournamentService };