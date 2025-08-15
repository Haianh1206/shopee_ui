// app/layout.tsx


import "../styles/globals.css"
import Header from "@/components/Header";



import Footer from "@/components/Footer";
import { Ban } from "lucide-react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>

      </body>
    </html>
  );
}
