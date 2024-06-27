import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content-Management Ratgeber",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        <div className="page-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
