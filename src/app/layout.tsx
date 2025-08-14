// app/layout.tsx


import "../styles/globals.css"
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import ShopeeMall from "@/components/ShopeeMall";
import FlashSale from "@/components/FlashSale";
import FirstSearch from "@/components/FirstSearch";
import TodaySuggest from "@/components/TodaySuggest";
import ShopeePage from "@/components/ShopeePage";

import Footer from "@/components/Footer";
import { Ban } from "lucide-react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header></Header>
        <Banner></Banner>
        <CategoryList></CategoryList>
        <FlashSale></FlashSale>
        <ShopeeMall></ShopeeMall>
        <FirstSearch></FirstSearch>
        <TodaySuggest></TodaySuggest>
        <ShopeePage></ShopeePage>
        <Footer></Footer>
      </body>
    </html>
  );
}
