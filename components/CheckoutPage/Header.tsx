import Image from "next/image";
import logo from "@/assets/checkoutPage/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className='w-full py-5 bg-ashBlack'>
      <Link href='/'>
        <Image
          src={logo}
          className='h-24 w-auto mx-auto'
          alt='Delicateria Manila Logo'
          priority
        />
      </Link>
    </div>
  );
};

export default Header;
