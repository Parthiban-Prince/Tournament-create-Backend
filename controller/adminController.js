import {adminService }from "../service/adminService.js";
import { adminDataRepoitory,tournamentAdminDataRepository,userAdminDataRepository,teamAdminDataRepository,registerAdminDataRepository,createMatchRepository,updateMatchRepository } from "../repository/adminRepository.js";
import Match from "../schema/scoreSchema.js";

export async function admincontroller(req, res) {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const admin = await adminService({ email, password });

    return res.status(200).json({ admin });

  } catch (error) {
    console.log("CONTROLLER error 👉", error);
    return res.status(500).json({ message: "Server error" });
  }
}



export async function adminDataController(req,res){
  try{

    const result = await adminDataRepoitory()
    return res.status(200).json({result})


  }catch(error){
    return res.status(500).json({message:"Server error"})
  }
}


export async function userAdminDatasController(req,res){
  try{

    const userData = await userAdminDataRepository()
    return res.status(200).json({userData})

  }
  catch(error){
    return res.status(500).json({message:"Server Error"})
  }
}

export async function teamAdminDatasController(req,res){
  try{

    const teamData = await teamAdminDataRepository()
    return res.status(200).json({teamData})
  }
   catch(error){
    return res.status(500).json({message:"Server Error"})
  }

}
export async function tournamentAdminDatasController(req,res){
  try{

    const tournamentData = await tournamentAdminDataRepository()
    return res.status(200).json({tournamentData})
  }
   catch(error){
    return res.status(500).json({message:"Server Error"})
  }

}
export async function registerAdminDatasController(req,res){
  try{

    const registerData = await registerAdminDataRepository()
    return res.status(200).json({registerData})
  }
   catch(error){
    return res.status(500).json({message:"Server Error"})
  }

}

// -----------------------
// Create a new match
// -----------------------
export const createMatch = async (req, res) => {
  try {
    console.log(req.body)
    const match = await createMatchRepository(req.body);
    console.log(match)

    res.status(201).json({
      success: true,
      data: match,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// -----------------------
// Update existing match
// -----------------------


export const updateMatch = async (req, res) => {
  try {
    const updatedMatch = await updateMatchRepository(req.params.id, req.body);

    if (!updatedMatch) {
      return res.status(404).json({ success: false, message: "Match not found" });
    }

    res.json({ success: true, data: updatedMatch });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// -----------------------
// Optional: Get all matches
// -----------------------
export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.json({ success: true, data: matches });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// -----------------------
// Optional: Get match by ID
// -----------------------
export const getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match)
      return res.status(404).json({ success: false, message: "Match not found" });

    res.json({ success: true, data: match });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export default {admincontroller,adminDataController,registerAdminDatasController,tournamentAdminDatasController,teamAdminDatasController,userAdminDatasController,getMatchById,getAllMatches,updateMatch,createMatch};