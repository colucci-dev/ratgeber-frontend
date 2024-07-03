import type { Metadata } from "next";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <html lang="de">
      <body>
      <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
