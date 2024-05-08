import {Press_Start_2P} from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Image Gallery",
  description: "Image Gallery for the 2024 Netlify Dynamic Site Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2P?.className}>{children}</body>
    </html>
  );
}
