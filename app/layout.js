import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dr. Lakshmi Vellanki",
  description: "Assistant Professor, Chemistry Department, NITK Surathkal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
