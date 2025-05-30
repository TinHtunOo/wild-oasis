import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log("signUp", user);
      toast.success(
        "Account successfully created! Please verify the new account from the usesr's email address"
      );
    },
  });
  return { signup, isLoading };
}
