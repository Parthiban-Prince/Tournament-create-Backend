import { galleryRepository } from "../repository/galleryRepository.js"

export async function galleryUploadService(data) {

    try{
        
        const result = await galleryRepository(data)
        return result
    }
    catch(error){
        throw error
    }
    
}


export default {galleryUploadService}