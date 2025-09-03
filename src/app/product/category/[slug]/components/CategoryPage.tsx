import Link from "next/link";

export default function ThoiTrangNamPage() {
    const topProducts = [
        { name: "Bộ nam thể thao, bộ quần áo nam mùa hè thể thao cộc tay cổ tròn vải co giãn thoáng mát", price: "₫106.900" },
        { name: "Quần Đùi Nam KAKI GÂN đi phố cực đẹp", price: "₫75.400" },
        { name: "Bộ 3 áo thun polo nam vải cá sấu co giãn 4 chiều cổ bẻ phối viền Everest Nhiều màu", price: "₫177.000" },
        { name: "[FULL SIZE] QUẦN TÂY NAM CAO CẤP VẢI CO GIÃN MỀM MƯỢT DÁNG HÀN MẶC TÔN BODY HÀNG ĐẸP", price: "₫121.500" },
        { name: "Áo Polo nam tay ngắn trẻ trung năng động kiểu thể thao in nổi chữ nhiều màu mới nhất Menswear", price: "₫95.000" },
        { name: "QUẦN JEAN NAM MÀU MỚI VẢI MỀM CO GIÃN DÁNG ÔM MÀU XANH NHẠT XƯỚC NHẸ", price: "₫149.000" },
        { name: "Bộ Thể Thao Cộc tay Nam Có Bé Logo ADIDAS Mùa Hè Thoáng Khí", price: "₫24.000" },
        { name: "Áo Polo nam phối sọc trẻ trung sang trọng hàng cao cấp", price: "₫106.985" },
        { name: "[RẺ VÔ ĐỊCH] Áo đùi nam, nữ ngắn tay cổ tàu họa tiết thời trang", price: "₫83.850" },
        { name: "StoreNa Áo Sơ Mi Nam Dài Tay Phối Túi Ngực Chất Vải Đũi", price: "₫118.800" },
    ];

    const searchTags = [
        "kính mát thời trang nam", "giày bitis hunter nam", "áo hoodie nam",
        "quần jeans nam", "áo sơ mi nam", "balo thời trang nam", "phụ kiện nam",
        "quần jeans nam", "áo sơ mi nam", "balo thời trang nam", "phụ kiện nam",
        "áo khoác bomber nam", "áo thun basic nam", "quần tây nam học sinh", "áo khoác bomber nam", "áo thun basic nam", "quần tây nam học sinh", "kính mát thời trang nam", "giày bitis hunter nam", "áo hoodie nam",

    ];

    return (
        <main className="hidden md:mx-2 sm:grid xl:mx-40 py-8">
            <div className="text-[12px] text-gray-500 mb-6">
                <Link href="/" className="hover:text-orange-600 underline transition-colors">
                    Trang Chủ
                </Link>{" "}
                &gt; <span className=" font-medium">Thời Trang Nam</span>
            </div>

            <div className="w-180">
                <h2 className="text-[14px] text-gray-600 font-bold mb-4 transition-colors">
                    Top Bán Chạy Sản Phẩm Thời Trang Nam
                </h2>
                <ul className="space-y-0 mb-8">
                    {topProducts.map((item, i) => (
                        <li
                            key={i}
                            className="flex justify-between text-[12px] text-gray-500 items-center pb-2 hover:text-orange-600 transition-colors cursor-pointer"
                        >
                            <span>{i + 1}. {item.name}</span>
                            <span className="text-gray-700">{item.price}</span>
                        </li>
                    ))}
                </ul></div>

            <h2 className="text-[14px] text-gray-600 font-bold mb-4 transition-colors">
                Có Thể Bạn Đang Tìm Kiếm
            </h2>
            <div className="flex flex-wrap gap-x-1 mb-8">
                {searchTags.map((tag, i) => (
                    <Link
                        key={i}
                        href="#"
                        className="text-[12px] text-gray-500 hover:text-orange-600 transition-colors duration-200"
                    >
                        {tag} |
                    </Link>
                ))}
            </div>

            <article className="prose prose-sm max-w-none text-gray-700 ">
                <h2 className="text-[14px] text-gray-600 font-bold mb-4 transition-colors">
                    Quần áo thời trang nam mới nhất - Phong cách thời trang cá tính dành cho phái mạnh
                </h2>
                <p className="text-[12px] text-gray-500 mb-6">
                    Trong những năm gần đây, xu hướng{" "}
                    <span className="text-gray-600 font-bold">quần áo thời trang nam </span>
                    trở nên đa dạng và phong phú hơn rất nhiều. Phải kể đến những style như công sở lịch lãm, phong cách Minimalism tối giản, đặc biệt các outfit Street Style đang được cực kỳ ưa chuộng. Mỗi phong cách có một điểm nổi bật riêng cũng như phù hợp với từng sự kiện tham dự. Bạn hoàn toàn có thể biến hoá từ phong cách Preppy đơn giản trở thành một quý ông thời thượng với bộ suit cao cấp. Hay thời trang nam trung niên với gam màu trung tính trở nên “phong cách” với outfit Hàn Quốc chỉ với một chiếc áo thun nam hàng hiệu.                </p>

                <h2 className="text-[14px] text-gray-600 font-bold mb-4 transition-colors">
                    Bí quyết lựa chọn sản phẩm quần áo thời trang nam cực sành điệu
                </h2>
                <p className="text-[12px] text-gray-500">
                    Những sản phẩm quần áo thời trang nam giới chất lượng cao luôn hướng tới phong cách thời trang cá tính mạnh mẽ, hiện đại và nam tính cho phái mạnh. Chính vì thế các sản phẩm thời trang nam này không chỉ mang đến cho người mặc sự thoải mái mà còn làm toát lên vẻ sang trọng và lịch lãm. Vậy bí quyết lựa chọn sản phẩm thời trang để trở thành một Fashionista chính hiệu là gì?
                </p>
            </article>
        </main>
    );
}
