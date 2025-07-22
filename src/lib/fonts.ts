import { Poppins, Lexend, Roboto_Flex } from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  display: "swap",
})

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
})

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
})
