import {adminService }from "../service/adminService.js";
import { adminDataRepoitory,tournamentAdminDataRepository,userAdminDataRepository } from "../repository/adminRepository.js";

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


export default {admincontroller,adminDataController,registerAdminDatasController,tournamentAdminDatasController,teamAdminDatasController,userAdminDatasController};