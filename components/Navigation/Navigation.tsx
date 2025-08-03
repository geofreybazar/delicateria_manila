"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const LINKS = [
  { link: "/", text: "Home" },
  { link: "/aboutus", text: "About Us" },
  { link: "/categories", text: "Categories" },
  { link: "/contactus", text: "Contact Us" },
];

const Navigation = () => {
  // const cartItems = useCartStore((state) => state.items);

  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` sticky top-0 z-40 bg-offwhite ease-in-out duration-300 ${
        scroll ? "py-2 drop-shadow-md" : "py-5 drop-shadow-none"
      }`}
    >
      <DesktopNav LINKS={LINKS} pathname={pathname} />
      <MobileNav LINKS={LINKS} />
    </div>
  );
};

export default Navigation;
