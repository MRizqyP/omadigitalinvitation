import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Undangan Tahadduts bin Ni'mah — Kel. besar Loupias",
  description:
    "Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Anda pada acara Tahadduts bin Ni'mah, 26 Juli 2026 di Resto Curug Sampireun.",
  openGraph: {
    title: "Undangan Tahadduts bin Ni'mah",
    description: "Kel. besar Loupias — 26 Juli 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
