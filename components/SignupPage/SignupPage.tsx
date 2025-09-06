"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignUpFormType,
  SignUpFormSchema,
} from "@/lib/validation/signupClientUserValidation";

import useSignupClientUser from "@/hooks/clientUser/useSignupClientUser";
import Left from "./Left";
import Right from "./Right";

const SignupPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "no@email.com";
  const firstName = searchParams.get("firstName") || "";
  const lastName = searchParams.get("lastName") || "";
  const provider = searchParams.get("provider") || "";

  const { signUp, isPendingSignUp } = useSignupClientUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email,
      firstName,
      lastName,
    },
  });

  const onSubmit = async (data: SignUpFormType) => {
    const completeData = { ...data, provider: provider };

    try {
      await signUp(completeData);
      await signIn(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='h-full w-full flex flex-col md:flex-row items-center justify-center gap-5 p-6 xl:p-0'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Left register={register} />
      <Right register={register} errors={errors} isLoading={isPendingSignUp} />
    </form>
  );
};

export default SignupPage;
