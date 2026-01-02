

export async function registerController(req,res) {

    try{

        
        const result = await registerService()
        return res.status(200).json({result,message:"registered"})

    }
    catch(error){
        return res.status(500).json({message:"Server Error"})
    }
    
}