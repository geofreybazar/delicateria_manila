import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/lib/store/cartStore";

import ShopNowButton from "../Buttons/ShopNowButton";
import logo from "@/assets/HomePage/logo.png";

import { IoPerson } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Badge, Drawer } from "@mui/material";
import SideCart from "../Cart/SideCart";
import { useSideCartStore } from "@/lib/store/sideCartStore";

interface Links {
  link: string;
  text: string;
}

interface DesktopNavProps {
  LINKS: Links[];
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ LINKS, pathname }) => {
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
        {totalItems > 0 ? (
          <Badge
            badgeContent={totalItems}
            color='customorange'
            className='cursor-pointer'
            onClick={() => handleOpenCart()}
          >
            <PiShoppingCartSimpleFill />
          </Badge>
        ) : (
          <PiShoppingCartSimpleFill />
        )}

        <IoPerson />
      </div>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <SideCart />
      </Drawer>
    </div>
  );
};

export default DesktopNav;
