import Link from "next/link";
import { UseFormRegister } from "react-hook-form";
import { SignUpFormType } from "@/lib/validation/signupClientUserValidation";
import { paragraph, title } from "@/lib/fonts/fonts";

const Left = ({ register }: { register: UseFormRegister<SignUpFormType> }) => {
  return (
    <div className='w-full xl:w-1/3 h-full flex flex-col justify-center'>
      <div className='flex flex-col gap-5'>
        <p className={`${title.className} text-xl`}>Create Your Account</p>
        <p className={`${paragraph.className} `}>
          Create your account to have access to a personalized experience.
        </p>
        <p>
          Already have Delicateria Manila Account?{" "}
          <Link href='/login'>
            <span className='underline hover:font-semibold'>Login here</span>
          </Link>
        </p>
        <div className='flex flex-col gap-2'>
          <label>Email</label>
          <input
            className='h-12 bg-off-white border border-black rounded-xl p-5 cursor-not-allowed'
            {...register("email")}
            type='text'
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Left;
