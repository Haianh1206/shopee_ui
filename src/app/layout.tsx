"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register");
  const isProductDetailPage = pathname.startsWith("/product/");
  const hideHeaderFooter = isAuthPage || (isProductDetailPage && isMobile);

  return (
    <html lang="vi">
      <body>
        {!hideHeaderFooter && <Header />}
        <main>{children}</main>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
