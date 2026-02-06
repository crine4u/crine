import { 
  Geist, 
  Geist_Mono, 
  Cinzel, 
  Playfair_Display, 
  Outfit, 
  Abril_Fatface, 
  DM_Serif_Display, 
  Syne 
} from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import GrainientBackground from "@/components/GrainientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const abril = Abril_Fatface({ variable: "--font-abril", weight: "400", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", weight: "400", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRINE | Critical Response & Infrastructure Network Enforcement",
  description: "Cybersecurity & IT Firm securing the digital future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${cinzel.variable}
          ${playfair.variable}
          ${outfit.variable}
          ${abril.variable}
          ${dmSerif.variable}
          ${syne.variable}
          antialiased
        `}
      >
        <GrainientBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

