import { Lato } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const title = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});

const paragraph = Lato({
  weight: "400",
  subsets: ["latin"],
});

export { title, paragraph };
