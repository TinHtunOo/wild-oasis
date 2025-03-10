import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.error(error);
    throw new Error("The cabins data cannot be loaded.");
  }
  return data;
}

export async function createCabins(newCabin) {
  const { data, error } = await supabase
    .from("cabin")
    .insert([newCabin])
    .select();
  if (error) {
    console.error(error);
    throw new Error("The cabin cannot be created.");
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
