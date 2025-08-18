"use client";
import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import ProductDetail from "@/app/product/[id]/components/ProductDetailPage";
import ProductShopInfo from "@/app/product/[id]/components/ProductShopInfo";
import ProductSpecifications from "@/app/product/[id]/components/ProductSpecifications";
import ProductReview from "@/app/product/[id]/components/ProductReview";
import OtherProducts from "@/app/product/[id]/components/OtherProducts";
import MayLike from "@/app/product/[id]/components/MayLike";

export default function Page() {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div className="p-10 text-red-500">Không tìm thấy sản phẩm!</div>;
    }

    return <>
        <ProductDetail />
        <ProductShopInfo
            name="Tiệm Nhà Gấu"
            avatar="/avtshop.webp"
            stats={{
                reviews: "6,5k",
                products: "436",
                responseRate: "99%",
                responseTime: "trong vài giờ",
                joined: "36 tháng trước",
                followers: "9,5k",
            }}
        />
        <ProductSpecifications
            specs={[
                { label: "Chất liệu", value: "Cotton 100%" },
            ]}
            content={[
                "Nếu không ưng về chất lượng sản phẩm",
                "Hãy ib trước cho shop qua shoppe để shop giải quyết vấn đề không hài lòng cho bạn. Đừng vội đánh giá, hoàn hàng. Vì phương châm của shop là bảo vệ quyền lợi của khách hàng\u00A0100%", // thêm dấu cách trước 100%
                "Nội dung mô tả sản phẩm thêm ở đây",
                "Các mã này hàng lên bao nhiêu vẫn đủ trả  khách í",
                "❄️ nay xưởng vẫn lên mẫu phục vụ mọi người nhé.",
                "❄️Diện team, mặc đôi ưng xỉu đó ạ"
            ]}

            hashtags={["#ao #aophong #aophongnu #aophongloang #aobosua #aophongbosua #aothun #aothunnu #aothunloang #aorong #aothunrong #aotrummong #aothunnu #aophongnu #aophongnuformrong #aophongnudeper #aothunnuformrong #aothunnutayngan #aothunnutaydai #aothunnucoco #aothunnupolo #aothunnuom #aothunnucotim #aothunnucovuong #aophongnugiare #aophong #aophongnam", "#tayngan #aothun3soc #bộđồ #bodo #setbo #set #setbộ #áothunnu #bodonu #dobonu #bothethao #bongunu #setdichoi #setle #dole #bodui #bodai #quanjean #quansoocjean #quansooc #quanduijean #quan #quanduinu"]}
        />
        <ProductReview />
        <OtherProducts></OtherProducts>
        <MayLike></MayLike>

    </>

}
