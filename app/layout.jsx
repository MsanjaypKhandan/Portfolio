import { Fira_Sans, Imprima } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";
import Script from "next/script";
import TrailingCursor from "@/components/customcursor";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-firaSans",
});

export const metadata = {
  title: "Sanjayp Khandan Portfolio",
  description: "Welcome to Sanjayp Khandan portfolio",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={firaSans.variable}>
        <Header />
        {/* <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        /> */}
        <TrailingCursor />
        <StairTransition />
      
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
