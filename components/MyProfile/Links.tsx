"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  const isActiveStyle = "text-customOrange font-semibold";

  return (
    <Link
      href={link}
      className={`hover:font-semibold text-lg ${isActive && isActiveStyle}`}
    >
      {children}
    </Link>
  );
};

export default Links;
