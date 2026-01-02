import adminSchema from '../schema/adminSchema.js';
import userSchema from '../schema/userSchema.js';
import tournamentSchema from "../schema/tournamentSchema.js";
import TeamSchema from '../schema/TeamSchema.js';
import teamRegister from '../schema/regTeamSchema.js'

export async function adminRepository(email,password){

    try{

        console.log("In admin repository", email, password);

        const admin = await adminSchema.findOne({email:email,password:password});
        console.log("Admin found:", admin);
        return admin;
    }
    catch(error){
        throw new Error("Database Error");
    }

}


export async function adminDataRepoitory(){

    try{

        const tournamentResult = await tournamentSchema.estimatedDocumentCount()

        const registerResult = await teamRegister.estimatedDocumentCount()

        const totalTeam  = await TeamSchema.estimatedDocumentCount()



        const userResult = await userSchema.estimatedDocumentCount()
        return {
            tournamentResult,
            userResult,
            totalTeam,
            registerResult
        }

    }
    catch(error){
        throw error
    }

}


export async function userAdminDataRepository() {
    
    try{
        const result = await userSchema.find().select('-password');
        return result
    }
    catch(error){
        throw error
    }

}

export async function tournamentAdminDataRepository(){
       try{
        const result = await tournamentSchema.find()
        
        return result
    }
    catch(error){
        throw error
    }

}

export async function teamAdminDataRepository(){
       try{
        const result = await TeamSchema.find()
        return result
    }
    catch(error){
        throw error
    }

}

export async function registerAdminDataRepository(){
       try{
        const result = await teamRegister.find()
        return result
    }
    catch(error){
        throw error
    }

}





export default {adminRepository,adminDataRepoitory,userAdminDataRepository,tournamentAdminDataRepository,teamAdminDataRepository,registerAdminDataRepository  } ;