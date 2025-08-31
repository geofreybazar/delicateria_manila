import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { IoPerson } from "react-icons/io5";

interface LoginUpButtonMobileProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const LoginUpButtonMobile: React.FC<LoginUpButtonMobileProps> = ({
  toggleDrawer,
}) => {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <button
          className='w-full flex bg-blue-200 p-2 rounded-md shadow-md justify-center items-center gap-5 cursor-pointer text-mocha'
          onClick={() => signIn()}
        >
          <p className=' text-2xl'>
            <IoPerson />
          </p>
          <p className='text-lg'>Login your account</p>
        </button>
      ) : (
        <Link href={"/myprofile"}>
          <div
            className='flex bg-blue-200 p-2 rounded-md shadow-md justify-center items-center gap-5'
            onClick={toggleDrawer(false)}
          >
            <div className='w-10 h-10 relative cursor-pointer'>
              <Image
                className='rounded-full'
                src={session.user.image || "/default-profile.png"}
                alt='Profile'
                sizes='(max-width: 768px) 32px, (max-width: 1200px) 40px, 50px'
                fill
              />
            </div>
            <p>{session.user.name}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default LoginUpButtonMobile;
