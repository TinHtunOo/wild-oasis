import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabins } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabins,
    onSuccess: () => {
      toast.success("The cabin is successfully created.");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}
