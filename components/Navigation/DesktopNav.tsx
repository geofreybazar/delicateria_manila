import Image from "next/image";
import Link from "next/link";

import ShopNowButton from "../Buttons/ShopNowButton";
import LoginUpButton from "../Buttons/LoginUpButton";
import logo from "@/assets/HomePage/logo.png";

import { Drawer } from "@mui/material";
import SideCart from "../Cart/SideCart";
import { useSideCartStore } from "@/lib/store/sideCartStore";

import ShopIcon from "./ShopIcon";

interface Links {
  link: string;
  text: string;
}

interface DesktopNavProps {
  LINKS: Links[];
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ LINKS, pathname }) => {
  const open = useSideCartStore((state) => state.open);
  const setOpen = useSideCartStore((state) => state.setOpen);

  const handleOpenCart = () => setOpen(true);

  return (
    <div
      className={`w-full hidden lg:block lg:flex items-center grow justify-between px-12 xl:px-36 2xl:px-52`}
    >
      <div className='flex items-center gap-10'>
        <Link href='/'>
          <Image
            className='h-12 w-auto'
            src={logo}
            alt='Geo and Me Bridal Official logo'
            priority
          />
        </Link>
        <div className='flex gap-10'>
          {LINKS.map((link, index) => (
            <Link key={index} href={link.link}>
              <p
                className={`lg:text-lg border-0 cursor-pointer text-mocha ${pathname === link.link ? "border-b-2 border-mocha" : ""}`}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className='flex items-center text-3xl gap-5'>
        <ShopNowButton />
        <ShopIcon handleOpenCart={handleOpenCart} />
        <LoginUpButton />
      </div>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <SideCart />
      </Drawer>
    </div>
  );
};

export default DesktopNav;
