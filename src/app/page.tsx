// app/page.tsx
import Banner from "@/components/Banner";
import CategoryList from "@/components/CategoryList";
import ShopeeMall from "@/components/ShopeeMall";
import FlashSale from "@/components/FlashSale";
import FirstSearch from "@/components/FirstSearch";
import TodaySuggest from "@/components/TodaySuggest";
import ShopeePage from "@/components/ShopeePage";
export default function Home() {
  return (

    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FlashSale></FlashSale>
      <ShopeeMall></ShopeeMall>
      <FirstSearch></FirstSearch>
      <TodaySuggest></TodaySuggest>
      <ShopeePage></ShopeePage>
    </div>
  );
}
