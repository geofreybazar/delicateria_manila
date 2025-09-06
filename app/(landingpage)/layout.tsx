import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme";
import Providers from "../providers";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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
  const session = await getServerSession(authOptions);

  return (
    <NextAuthProvider session={session}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Providers>
            <Navigation />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </NextAuthProvider>
  );
}
