


export async function registerService(data) {


    try{

        if(team==availableTeam){
            return res.status(200).json({message:"Team not available"})
        }
        const register = await registerRepository(data)
        return register

    }
    catch(error){
        throw error
    }
    
}