import adminSchema from '../schema/adminSchema.js';

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

export default {adminRepository};