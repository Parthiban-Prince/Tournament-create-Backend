import teamSchema from '../schema/TeamSchema.js'

export async function teamRepository(data) {


    try{

        const team  = await  teamSchema.create({
            teamName,
      captain: captainId,
      members: [captainId],
        })
        return team

    }
    catch(error){
        throw error
    }
    
}