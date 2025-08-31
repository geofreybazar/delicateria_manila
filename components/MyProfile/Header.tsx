"use client";

import { paragraph } from "@/lib/fonts/fonts";
import { useSession, signOut } from "next-auth/react";
import Links from "./Links";
import Link from "next/link";

const Header = () => {
  const { data } = useSession();
  const name = data?.user.name || "User";

  return (
    <div className='w-full flex flex-col gap-4'>
      {/* Top section */}
      <div className='w-full flex flex-col items-center text-center px-4'>
        <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>
          Welcome {name}
        </p>
        <div
          className={`${paragraph.className} text-base sm:text-lg flex flex-wrap justify-center gap-3 mt-2`}
        >
          <Link href='/shop'>
            <p className='underline cursor-pointer hover:text-gray-600 transition'>
              Shop Now
            </p>
          </Link>
          <p
            className='underline cursor-pointer hover:text-gray-600 transition'
            onClick={() => signOut()}
          >
            Sign-out
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className='w-full p-2 bg-ashBlack text-offwhite text-sm sm:text-base md:text-lg flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10'>
        <Links link='/myprofile'>Overview</Links>
        <Links link='/myprofile/account'>Account</Links>
        <Links link='/myprofile/orders'>Orders</Links>
      </div>
    </div>
  );
};

export default Header;
