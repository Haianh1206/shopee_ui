"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { products } from "@/app/data/products";
import { HiLightningBolt } from "react-icons/hi";
import { useRouter } from "next/navigation";
import type { Product } from "@/app/types/product";
import { ChevronDown, Star } from "lucide-react";
export default function CategoryFilterBar() {
    const [active, setActive] = useState("popular");
    const router = useRouter();
    const [showMoreCategory, setShowMoreCategory] = useState(false);
    const [showMoreLocation, setShowMoreLocation] = useState(false);
    const [showMoreBrand, setShowMoreBrand] = useState(false);
    const [showMoreShop, setShowMoreShop] = useState(false);
    const [showMoreRating, setShowMoreRating] = useState(false);
    const [showMorePromo, setShowMorePromo] = useState(false);
    const handleClick = (id: number) => {
        router.push(`/product/${id}`);
    };

    const parsePrice = (price: string) =>
        Number(price.replace(/[₫,.]/g, ""));

    type FilterType = "popular" | "new" | "bestseller" | "price-asc" | "price-desc";

    const filterProducts = (list: Product[], filter: FilterType): Product[] => {
        switch (filter) {
            case "new":
                return list.filter((p) => p.status === "Mới ra mắt");
            case "bestseller":
                return list.filter((p) => p.status === "Đang bán chạy");
            case "price-asc":
                return [...list].sort(
                    (a, b) => parsePrice(a.price) - parsePrice(b.price)
                );
            case "price-desc":
                return [...list].sort(
                    (a, b) => parsePrice(b.price) - parsePrice(a.price)
                );
            default:
                return list;
        }
    };

    // Tạo biến filteredProducts bằng useMemo
    const filteredProducts = useMemo(() => {
        return filterProducts(products, active as FilterType);
    }, [active]);

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-1">
            <div className="mx-40">
                <div className="flex min-h-screen">
                    {/* Sidebar */}
                    <aside className="w-1/6  p-4 text-sm">
                        {/* Tất cả danh mục */}
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-lg">☰</span> Tất Cả Danh Mục
                        </h3>
                        <hr className="mb-2" />
                        <ul className="space-y-1">
                            <li className="text-red-500 font-semibold">Thời Trang Nam</li>
                            <li>Áo Khoác</li>
                            <li>Áo Vest và Blazer</li>
                            <li>Áo Hoodie, Áo Len & Áo Nỉ</li>
                            <li>Quần Jeans</li>
                            <li>Quần Dài/Quần Âu</li>
                            {showMoreCategory && (
                                <>
                                    <li>Áo Polo</li>
                                    <li>Phụ Kiện Nam</li>
                                </>
                            )}
                            <li
                                className="text-gray-500 flex items-center cursor-pointer"
                                onClick={() => setShowMoreCategory(!showMoreCategory)}
                            >
                                Thêm <ChevronDown size={16} className="ml-1" />
                            </li>
                        </ul>

                        {/* Bộ lọc */}
                        <div className="mt-5">
                            <h3 className="font-bold mb-2 flex items-center gap-1">
                                <span>🔍</span> BỘ LỌC TÌM KIẾM
                            </h3>

                            {/* Nơi bán */}
                            <p className="font-semibold mb-2">Nơi Bán</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Hà Nội
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> TP. Hồ Chí Minh
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Thái Nguyên
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Vĩnh Phúc
                                    </label>
                                </li>
                                {showMoreLocation && (
                                    <li>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Đà Nẵng
                                        </label>
                                    </li>
                                )}
                                <li
                                    className="text-gray-500 flex items-center cursor-pointer"
                                    onClick={() => setShowMoreLocation(!showMoreLocation)}
                                >
                                    Thêm <ChevronDown size={16} className="ml-1" />
                                </li>
                            </ul>

                            <hr className="my-4" />

                            {/* Đơn vị vận chuyển */}
                            <p className="font-semibold mb-2">Đơn Vị Vận Chuyển</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Nhanh
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Tiết Kiệm
                                    </label>
                                </li>
                            </ul> <hr className="my-4" />

                            {/* Thương Hiệu */}
                            <p className="font-semibold mb-2">Thương Hiệu</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> AVOCADO
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> COOLMATE
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> L66
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> JBAGY
                                    </label>
                                </li>
                                {showMoreBrand && (
                                    <>
                                        <li>
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" /> Zara
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" /> Uniqlo
                                            </label>
                                        </li>
                                    </>
                                )}
                                <li
                                    className="text-gray-500 flex items-center cursor-pointer"
                                    onClick={() => setShowMoreBrand(!showMoreBrand)}
                                >
                                    Thêm <ChevronDown size={16} className="ml-1" />
                                </li>
                            </ul>

                            <hr className="my-4" />

                            {/* Khoảng Giá */}
                            <p className="font-semibold mb-2">Khoảng Giá</p>
                            <div className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="₫ TỪ"
                                    className="border rounded px-2 py-1 w-1/2"
                                />
                                <span>–</span>
                                <input
                                    type="text"
                                    placeholder="₫ ĐẾN"
                                    className="border rounded px-2 py-1 w-1/2"
                                />
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 rounded">
                                ÁP DỤNG
                            </button>

                            <hr className="my-4" />

                            {/* Loại Shop */}
                            <p className="font-semibold mb-2">Loại Shop</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Shopee Mall
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Shop Yêu Thích
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Xử lý đơn hàng bởi Shopee
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Shop Yêu Thích +
                                    </label>
                                </li>
                                {showMoreShop && (
                                    <li>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Shop Chính Hãng
                                        </label>
                                    </li>
                                )}
                                <li
                                    className="text-gray-500 flex items-center cursor-pointer"
                                    onClick={() => setShowMoreShop(!showMoreShop)}
                                >
                                    Thêm <ChevronDown size={16} className="ml-1" />
                                </li>
                            </ul>

                            <hr className="my-4" />

                            {/* Tình Trạng */}
                            <p className="font-semibold mb-2">Tình Trạng</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Mới
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Đã sử dụng
                                    </label>
                                </li>
                            </ul>
                            <hr className="my-4" />

                            {/* Đánh Giá */}
                            <p className="font-semibold mb-2">Đánh Giá</p>
                            <ul className="space-y-2 mb-2">
                                <li className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-yellow-500">★★★★★</span> trở lên
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-yellow-500">★★★★☆</span> trở lên
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-yellow-500">★★★☆☆</span> trở lên
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer">
                                    <span className="text-yellow-500">★★☆☆☆</span> trở lên
                                </li>
                                {showMoreRating && (
                                    <li className="flex items-center gap-2 cursor-pointer">
                                        <span className="text-yellow-500">★☆☆☆☆</span> trở lên
                                    </li>
                                )}
                                <li
                                    className="text-gray-500 flex items-center cursor-pointer"
                                    onClick={() => setShowMoreRating(!showMoreRating)}
                                >
                                    Thêm <ChevronDown size={16} className="ml-1" />
                                </li>
                            </ul>

                            <hr className="my-4" />

                            {/* Dịch Vụ & Khuyến Mãi */}
                            <p className="font-semibold mb-2 ">Dịch Vụ & Khuyến Mãi</p>
                            <ul className="space-y-1">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Đang giảm giá
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Miễn phí vận chuyển
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Shopee Style
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" /> Xả Hàng Giá Sốc
                                    </label>
                                </li>
                                {showMorePromo && (
                                    <li>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Voucher 50%
                                        </label>
                                    </li>
                                )}
                                <li
                                    className="text-gray-500 flex items-center cursor-pointer border-b border-gray-300"
                                    onClick={() => setShowMorePromo(!showMorePromo)}
                                >
                                    Thêm <ChevronDown size={16} className="ml-1" />
                                </li>
                            </ul>

                            <div className="mt-6">
                                <button className="w-full bg-orange-500 text-white py-2 rounded">
                                    XÓA TẤT CẢ
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main */}
                    <main className="w-5/6 p-4">
                        {/* Thanh sắp xếp */}
                        <div className="flex items-center bg-[#00000008] px-4 py-3 space-x-3 mb-4">
                            <span className="text-[14px] text-gray-600">Sắp xếp theo</span>
                            <button
                                onClick={() => setActive("popular")}
                                className={`px-4 py-1.5 text-[14px] rounded-[2px] 
    ${active === "popular"
                                        ? "bg-orange-600 text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                Phổ Biến
                            </button>
                            <button
                                onClick={() => setActive("new")}
                                className={`px-4 py-1.5 text-[14px] rounded-[2px] ${active === "new"
                                    ? "bg-orange-600 text-white"
                                    : "bg-white text-black"
                                    }`}
                            >
                                Mới Nhất
                            </button>
                            <button
                                onClick={() => setActive("bestseller")}
                                className={`px-4 py-1.5 text-[14px] rounded-[2px] ${active === "bestseller"
                                    ? "bg-orange-600 text-white"
                                    : "bg-white text-black"
                                    }`}
                            >
                                Bán Chạy
                            </button>
                            <select
                                onChange={(e) => setActive(e.target.value)}
                                value={active.startsWith("price") ? active : ""}
                                className={`bg-white text-[14px] text-left pl-2 pr-1 py-2 rounded-[2px] ${active.startsWith("price") ? "text-red-500" : "text-black"
                                    }`}
                            >
                                <option value="" disabled hidden>
                                    Giá
                                </option>
                                <option value="price-asc">Giá: Thấp đến Cao</option>
                                <option value="price-desc">Giá: Cao đến Thấp</option>
                            </select>


                        </div>

                        {/* Grid sản phẩm */}
                        <div className="grid grid-cols-5 gap-3 pb-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleClick(product.id)}
                                    className="group relative flex flex-col bg-white border border-gray-200 
               hover:border-red-500 transition-all duration-200 
               hover:-translate-y-[1px] overflow-visible hover:z-50"
                                >
                                    {/* Hình ảnh */}
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src={product.img}
                                            alt="product"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Tên */}
                                    <div className="p-2 flex-grow">
                                        <div className="text-[#555] text-[14px] text-left line-clamp-2 transition-transform duration-200 group-hover:translate-y-[-1px]">
                                            <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-[2px] mr-1 align-middle">
                                                Yêu thích
                                            </span>
                                            {product.name}
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="flex items-center space-x-1">
                                        {product.status === "Đang bán chạy" ? (
                                            <>
                                                <HiLightningBolt className="text-red-500 ml-2 border border-red-500 w-4.5 h-4.5" />
                                                <span className="bg-red-300 -ml-1 text-white text-[10px] px-1.5 py-0.5">
                                                    {product.status}
                                                </span>
                                            </>
                                        ) : product.status === "Mới ra mắt" ? (
                                            <span className="ml-2 text-red-600 border border-red-600 px-1 text-[10px]">
                                                {product.status}
                                            </span>
                                        ) : null}
                                    </div>

                                    {/* Giá */}
                                    <div className="text-left ml-2 text-red-400 text-lg mt-2">
                                        {product.price}
                                    </div>

                                    {/* Label hover */}
                                    <div className="absolute left-0 right-0 -bottom-[30px] 
                    bg-orange-600 text-white text-center text-[12px] py-1.5
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-300 z-50">
                                        {product.label}
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="mx-auto text-[14px] text-gray-600 inline-block px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded">
                            Login To See More
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

