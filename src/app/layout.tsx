"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <html lang="vi">
      <body>
        {!isAuthPage && <Header />}
        <main>{children}</main>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
