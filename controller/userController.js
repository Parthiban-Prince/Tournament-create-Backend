import {createUserService, getUserService ,updateUserService,photoUpdateservice } from "../service/userService.js";


export async function createUser(req, res) {
  try {
    // ✅ 1. Destructure FIRST
    const { email, password, name, age } = req.body;

    // ✅ 2. Validate input BEFORE service call
    if (!email || !password || !name || !age) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    // ✅ 3. Call service AFTER validation
    const result = await createUserService({ email, password, name, age });

    if (result.exist) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    // ✅ 4. Success
    return res.status(201).json({
      message: "User created successfully",
      user: result.user
    });

  } catch (error) {
    console.error("Create user error:", error);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}


export async function getUser(req, res) {

    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Missing required fields"});
        }

        const user = await getUserService({email,password});

        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user});


    }
    catch(error){
        return res.status(500).json({message: "Internal Server Error"});
    }

}


export async function passwordReset(req, res) {

      try{
          const {email} = req.body;

          if(!email){
              return res.status(400).json({message: "Missing required fields"});
          }

          const user = await passwordRestService({email});

          if(!user.email){
              return res.status(404).json({message: "User not found"});
          }
      }
      catch(error){         return res.status(500).json({message: "Internal Server Error"});


}}


export async function userProfile(req, res) {

    try{

 
        // 1️⃣ validate input
    if (!req.user.email || !req.body.name || !req.body.age) {
      return null;
    }

         const email = req.user.email;

    const { name, age} = req.body;





      const user = await updateUserService({email , name, age});

      if(!user){
          return res.status(404).json({message: "User not found"});


      }
      return res.status(200).json({user});
    
    }  catch(error){
          return res.status(500).json({message: "Internal Server Error",error: error.message});
      }
    }

export async function photoUpload(req, res) {
  try {
    console.log("req.file 👉", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await photoUpdateservice(req.file);

    return res.status(200).json({
      message: "Photo uploaded successfully",
      data: result,
    });

  } catch (error) {
    console.error("photoUpload error 👉", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function createTeamController(req,res){
  
    try{
      console.log(req.body)

    }
    catch(error){

      return res.status(500).json({message:"Internal Server Error"})

    }

}




export default {createUser,getUser};