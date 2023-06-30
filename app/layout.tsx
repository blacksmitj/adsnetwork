import Container from "./components/Container";
import ToastMessage from "./components/ToastMessage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADS Network",
  description: "INTERNET FOR BETTER LIFE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastMessage />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
