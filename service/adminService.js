import {adminRepository} from "../repository/adminRepository.js";




export async function adminService(data) {

    try{
         const admin = await adminRepository(data.email, data.password);
  return admin;
    }
    catch(error){
        throw error;
    }

}


export async function tournamentService(data){
    try{

        const admins = await tournamentRepository(data);
        return admins;
    }
    catch(error){
        throw error;
    }
}

export async function deleteTournamentService(data){
    try{

        const admins = await deleteTournamentRepository(data);
        return admins;

    }
    catch(error){
        throw error;
    }}




export default {adminService, tournamentService, deleteTournamentService};