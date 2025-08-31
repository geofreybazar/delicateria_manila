import { useMutation } from "@tanstack/react-query";
import { SignupClientUser } from "@/actions/clientUser";

const useSignupClientUser = () => {
  const {
    mutateAsync: signUp,
    isPending: isPendingSignUp,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: SignupClientUser,
  });
  return { signUp, isPendingSignUp, isError, error, isSuccess };
};

export default useSignupClientUser;
