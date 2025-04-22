import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.error(error);
    throw new Error("The cabins data cannot be loaded.");
  }
  return data;
}

export async function createEditCabins(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName =
    !hasImagePath && newCabin.image instanceof File
      ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
      : null;

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-image//${imageName}`;

  let query = supabase.from("cabin");
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("The cabin cannot be created.");
  }

  if (!hasImagePath && newCabin.image instanceof File) {
    const { error: storageError } = await supabase.storage
      .from("cabin-image")
      .upload(imageName, newCabin.image);
    if (storageError) {
      await supabase.from("cabin").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "The cabin image could not be uploaded and the cabin was not created."
      );
    }
  }
  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("The cabin cannot be deleted.");
  }
  return data;
}
