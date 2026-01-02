import gallerySchema from "../schema/gallerySchema.js"

export async function galleryRepository(data) {
  try {
    console.log("Repository data 👉", data);

    const gallery = await gallerySchema.create({
      user: data.id,          // must match schema
      url: data.imageUrl,
    });

    return gallery;

  } catch (error) {
    throw error;
  }
}


export async function allImages() {

    try{

            const result = await gallerySchema.find()
            return result

    }
    catch(error)
    {
        throw error
    }
    
    
}


export default {galleryRepository}