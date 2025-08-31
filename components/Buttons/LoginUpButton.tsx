import Image from "next/image";
import Link from "next/link";

import { useSession, signIn } from "next-auth/react";

import { IoPerson } from "react-icons/io5";

const LoginUpButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <button
          className='cursor-pointer text-mocha text-2xl'
          onClick={() => signIn()}
        >
          <IoPerson />
        </button>
      ) : (
        <Link href={"/myprofile"}>
          <div className='w-10 h-10 relative cursor-pointer'>
            <Image
              className='rounded-full'
              src={session.user.image || "/default-profile.png"}
              alt='Profile'
              sizes='(max-width: 768px) 32px, (max-width: 1200px) 40px, 50px'
              fill
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default LoginUpButton;
