import Header from "@/components/MyProfile/Header";
import type { Metadata } from "next";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Delicateria Manila",
  description:
    "Delicateria Manila specializes in high-quality imported meats, including premium beef, chicken, sausages, and seafood. Trusted by households, restaurants, and hotels across Metro Manila for gourmet-quality ingredients.",
  keywords:
    "Delicateria Manila, imported meats Philippines, premium beef supplier, gourmet chicken, high quality sausages, seafood distributor Manila, food supplier Quezon City, imported meat wholesaler, European meats Manila, hotel and restaurant meat supplier",
  authors: [{ name: "Geofrey R Bazar" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col items-center py-10 mx-4 md:mx-12 xl:mx-36 2xl:mx-52'>
      <Header />
      {children}
    </div>
  );
}
