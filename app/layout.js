import { Montserrat } from "next/font/google";
import { Archivo } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.css";



export const archivo = Archivo({ subsets: ["latin"] })
const montserrat = Montserrat({  subsets: ['latin'] })


export const metadata = {
  title: "Mucho Marketing",
  description: "Agengy Marketing Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
