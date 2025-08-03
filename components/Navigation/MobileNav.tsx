import { SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/HomePage/logo.png";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

interface Links {
  link: string;
  text: string;
}

interface MobileNavProps {
  LINKS: Links[];
}

const MobileNav: React.FC<MobileNavProps> = ({ LINKS }) => {
  const [onOpen, setOnOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOnOpen(open);
    };
  return (
    <div className='lg:hidden w-full px-5'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image
            className='h-14 w-auto'
            src={logo}
            alt='Geo and Me Bridal Official logo'
            priority
          />
        </Link>
        <div className='text-2xl' onClick={toggleDrawer(true)}>
          <IoIosMenu />
        </div>
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={onOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className='w-screen p-5 flex flex-col gap-8 text-mocha'>
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <Image
                className='h-16 w-auto'
                src={logo}
                alt='Geo and Me Bridal Official logo'
                priority
              />
            </Link>
            <div
              className='text-2xl cursor-pointer'
              onClick={toggleDrawer(false)}
            >
              <IoMdClose />
            </div>
          </div>
          <div className='flex flex-col gap-2 text-xl'>
            {LINKS.map((link, index) => (
              <Link key={index} href={link.link}>
                <p onClick={toggleDrawer(false)}>{link.text}</p>
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <p>Cart</p>
            <p>Accoutn</p>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileNav;
