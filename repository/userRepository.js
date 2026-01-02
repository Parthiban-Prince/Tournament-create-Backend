import userSchema from "../schema/userSchema.js";
import teamSchema from '../schema/TeamSchema.js'

export async function createUserRepository(userData) {
  try {
    const { email, password, name, age } = userData;

    // extra safety
    if (!email || !password || !name || !age) {
      throw new Error("Invalid data passed to repository");
    }

    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return { exist: true };
    }

    const newUser = new userSchema({
      name,
      email,
      password,
      age: Number(age) // important
    });

    await newUser.save();

    return { exist: false, user: newUser };

  } catch (error) {
    console.error("❌ Repository error:", error); // SHOW REAL ERROR
    throw error; // ⬅️ DO NOT hide it
  }
}


export async function getUserRepository(email) {
    try{
        const user = await userSchema.findOne({email: email});
        return user;
    }
    catch(error){
        throw new Error("Database Error");
    }
}


export async function profileUpdateRepository(data) {
  try {
    const { email, name, age } = data;

    const updateFields = {};
    if (name) updateFields.name = name;
    if (age) updateFields.age = age;

    const user = await userSchema.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true }
    );
    return user;


  } catch (error) {
    throw new Error("Database Error");
  }
}


export async function photoUploadRepository(data) {


   try{

    const {url,email}=data
        const user = await userSchema.findOneAndUpdate(
          {email: email},
          {
            $set: {
              photo:url
            }
          },{
            new: true
          }
        );
     
        return user;
          }
    catch(error){
      console.log(error.message)
        throw new Error("Database Error");
    }


}

export async function passwordRepository(data) {


  try{

    console.log(data)

    const user  = await userSchema.findOneAndUpdate(
      {email:data.email},
      {
        $set:{password:data.password}
      },{new:true}

    );

    return user
  }
  catch(error){
    console.log(error.message)
    throw new Error("Database Error")
  }
  
}


export async function userDashboardRepository(email) {
  try {
    const user = await userSchema
      .findOne({ email })
      .select("-password");

    if (!user) {
      throw new Error("User not found");
    }

    const teamInformation = await teamSchema
      .findOne({
        $or: [
          { captain: user._id },
          { members: user._id }
        ]
      })
      .populate("captain", "name email")
      .populate("members", "name email");

    return {
      user,
      teamInformation,
    };
  } catch (error) {
    throw error;
  }
}




export default {
    createUserRepository,
    getUserRepository,
    profileUpdateRepository,
    photoUploadRepository,
    passwordRepository,
    userDashboardRepository
};

