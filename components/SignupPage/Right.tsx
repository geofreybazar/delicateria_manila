import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignUpFormType } from "@/lib/validation/signupClientUserValidation";
import { ImSpinner2 } from "react-icons/im";

import { paragraph } from "@/lib/fonts/fonts";

const Right = ({
  register,
  errors,
  isLoading,
}: {
  register: UseFormRegister<SignUpFormType>;
  errors: FieldErrors<SignUpFormType>;
  isLoading: boolean;
}) => {
  return (
    <div className='w-full xl:w-1/3 h-full flex flex-col justify-center '>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
          <label>First Name*</label>
          <input
            className={`h-12 bg-off-white border rounded-xl p-5 ${
              errors["firstName"] ? "border-red-600" : "border-black"
            }`}
            type='text'
            {...register("firstName")}
          />

          <small className='text-red-600'>{errors["firstName"]?.message}</small>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Last Name*</label>
          <input
            className={`h-12 bg-off-white border rounded-xl p-5 ${
              errors["lastName"] ? "border-red-600" : "border-black"
            }`}
            type='text'
            {...register("lastName")}
          />
          <small className='text-red-600'>{errors["lastName"]?.message}</small>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Phone number*</label>
          <input
            className={`h-12 bg-off-white border rounded-xl p-5 ${
              errors["phoneNumber"] ? "border-red-600" : "border-black"
            }`}
            type='text'
            {...register("phoneNumber")}
          />
          <small className='text-red-600'>
            {errors["phoneNumber"]?.message}
          </small>
        </div>
      </div>
      <button
        type='submit'
        disabled={isLoading}
        className={`${paragraph.className} border p-3 bg-mocha text-off-white rounded-full mt-2 flex items-center justify-center gap-2 ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {isLoading && (
          <span className='animate-spin'>
            <ImSpinner2 />
          </span>
        )}
        Create Account
      </button>
    </div>
  );
};

export default Right;
