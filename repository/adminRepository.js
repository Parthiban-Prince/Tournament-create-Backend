import adminSchema from '../schema/adminSchema.js';
import userSchema from '../schema/userSchema.js';
import tournamentSchema from "../schema/tournamentSchema.js";
import TeamSchema from '../schema/TeamSchema.js';
import teamRegister from '../schema/regTeamSchema.js'
import Match from '../schema/scoreSchema.js'

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








function parseScore(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined; // default 0 for invalid values
}

export async function createMatchRepository(data) {
  const cleanData = {
    tournamentName: data.tournamentName,
    teamA: data.teamA,
    teamB: data.teamB,
    teamAScore: parseScore(data.teamAScore),
    teamBScore: parseScore(data.teamBScore),
  };

  if (data.status) {
    const statusMap = {
      upcoming: "Upcoming",
      completed: "Completed",
    };
    cleanData.status = statusMap[data.status.toLowerCase()] || "Upcoming";
  } else {
    cleanData.status = "Upcoming"; // default
  }

  if (data.winner) {
    if (data.winner === data.teamA) cleanData.winner = "teamA";
    else if (data.winner === data.teamB) cleanData.winner = "teamB";
    else if (data.winner.toLowerCase() === "draw") cleanData.winner = "Draw";
  }

  return await Match.create(cleanData);
}


export async function updateMatchRepository(id, data) {
  const updateData = {};


  if (data.teamAScore != null) {
    const parsed = parseScore(data.teamAScore);
    if (parsed !== undefined) updateData.teamAScore = parsed;
  }

  if (data.teamBScore != null) {
    const parsed = parseScore(data.teamBScore);
    if (parsed !== undefined) updateData.teamBScore = parsed;
  }

  if (data.status) {
    const statusMap = {
      upcoming: "Upcoming",
      completed: "Completed",
    };
    const status = statusMap[data.status.toLowerCase()];
    if (status) updateData.status = status;
  }

  // ⚠️ winner optional
  if (data.winner) {
    if (data.winner === data.teamA) updateData.winner = "teamA";
    else if (data.winner === data.teamB) updateData.winner = "teamB";
    else if (data.winner.toLowerCase() === "draw") updateData.winner = "Draw";
  }

  // 🔹 Perform the update
  const match = await Match.findByIdAndUpdate(id, updateData, {
    new: true,           // return updated document
    runValidators: true, // enforce schema rules
  });

  return match;
}



export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.json({
      success: true,
      data: matches,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};










export default {adminRepository,adminDataRepoitory,userAdminDataRepository,tournamentAdminDataRepository,teamAdminDataRepository,registerAdminDataRepository, updateMatchRepository,createMatchRepository  } ;