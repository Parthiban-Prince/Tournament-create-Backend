import {createUserService, getUserService ,updateUserService,photoUpdateservice,passwordResetService,userDashboardService } from "../service/userService.js";
import bcrypt from 'bcrypt'



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
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password does not match confirm password" });
    }

    // Hash the new password using bcrypt with salt rounds = 10
    const saltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Call service with email and hashed password
    const user = await passwordResetService({ email, password: hashedPassword });

    if (!user || !user.email) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}




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




    if (!req.uploadedImage.url) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await photoUpdateservice({
  url: req.uploadedImage.url,
  email: req.user.email
});


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




export async function userDashboard(req,res) {

  try{

 

    const email = req.user.email

    const userData = await userDashboardService(email)
    return res.status(200).json({message:"User Data Get successfully",userData})

  }catch(error)
  {
    console.log(error.message)
    return res.status(500).json({message:"Server Error"})
  }
  
}




export default {createUser,getUser,passwordReset,userDashboard};