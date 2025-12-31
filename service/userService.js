import { createUserRepository,getUserRepository,profileUpdateRepository,photoUploadRepository } from '../repository/userRepository.js';
import bcrypt from 'bcrypt';
import {generateToken} from '../helper/jwtToken.js' 
export async function createUserService(Data) {

    try{
        
        const result = await createUserRepository(Data);
        return result;

    }
    catch(error){
        throw error;
    }


}

export async function getUserService(data) {
  try {
    const { email, password } = data;

    // 1️⃣ validate input
    if (!email || !password) {
      return null;
    }

    // 2️⃣ get user from DB
    const user = await getUserRepository(email);

    if (!user || !user.email) {
      return null; // user not found
    }

    // 3️⃣ compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return null; // wrong password
    }

    // 4️⃣ generate JWT token

    const tokenPayload = 
      {
        userId: user._id,
        email: user.email,
      }

        const storingToken = generateToken(tokenPayload)
        console.log(storingToken);

    const token = 
      {
        storingToken
      }





    return {
      token
    };

  } catch (error) {
    console.error("Login service error:", error);
    throw error;
  }
}


export async function updateUserService(data) {

  try {


  
    const user = await profileUpdateRepository(data);

    const name = user.name;
    const age = user.age;

    return {name,age};

  }
    catch(error){
        throw error;
    }

}


export async function photoUpdateservice(data) {

  try {

    console.log("service data 👉", data);

    const user = await photoUpdateRepository(data);

    return user;

  }catch(error){
    throw error;
  }
  
}



export default {
    createUserService,
    updateUserService,
    getUserService,
    photoUpdateservice
  
  };
