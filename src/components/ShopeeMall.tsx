"use client";
import { useState } from "react";
import { FaRedoAlt, FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const products = [
    { name: "Ưu đãi đến 50%", img: "/shopeeMall_product.webp" },
    { name: "Mua là có quà", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_product.webp" },
];

export default function ShopeeMall() {
    const perPage = 8;
    const totalPages = Math.ceil(products.length / perPage);
    const [page, setPage] = useState(0);

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-6">
            <div className="bg-white mx-40 h-[530px] shadow-sm">
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                    <div className="flex items-center space-x-4 px-5 pt-5 pb-2">
                        <span className="text-red-600 text-[16px] text-lg ">SHOPEE MALL</span>
                        <span className="text-gray-200">|</span>

                        <span className="flex items-center text-[16px] text-gray-700">
                            <FaRedoAlt className="text-red-500 mr-1" /> Trả Hàng Miễn Phí 15 Ngày
                        </span>

                        <span className="flex items-center text-[16px] text-gray-700">
                            <FaShieldAlt className="text-red-500 mr-1" /> Hàng Chính Hãng 100%
                        </span>

                        <span className="flex items-center text-[16px] text-gray-700">
                            <FaTruck className="text-red-500 mr-1" /> Miễn Phí Vận Chuyển
                        </span>
                    </div>

                    <button className="flex items-center cursor-pointer text-red-600 text-sm font-medium">
                        Xem Tất Cả
                        <span className="ml-1 bg-red-600 mr-8 rounded-full p-1 flex items-center justify-center">
                            <IoIosArrowForward className="text-white" />
                        </span>
                    </button>
                </div>

                <div className="relative flex  group">
                    <div className="flex-shrink-0 w-[33%] pt-0 pr-0 pb-6.5 pl-2.5 h-[480px] overflow-hidden ">
                        <img
                            src="/shopeeMall_banner.png"
                            alt="Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative w-[65%]">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                style={{
                                    width: `${totalPages * 100}%`,
                                    transform: `translateX(-${page * (100 / totalPages)}%)`,
                                }}
                            >
                                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                                    const start = pageIndex * perPage;
                                    const pageItems = products.slice(start, start + perPage);

                                    return (
                                        <div
                                            key={pageIndex}
                                            className="grid grid-cols-4 grid-rows-2 ml-2  gap-4 flex-shrink-0"
                                            style={{ width: `${100 / totalPages}%`, height: "460px" }}
                                        >
                                            {pageItems.map((prod, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex flex-col items-center cursor-pointer p-2 transition-all duration-200 rounded-sm h-[210px]"
                                                >
                                                    <div className="w-45 h-90 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                                                        <img
                                                            src={prod.img}
                                                            alt={prod.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-[18px] text-red-600 text-center mt-2">{prod.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {page > 0 && (
                            <button
                                onClick={handlePrev}
                                className="absolute top-[42%] left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                            >
                                <IoIosArrowBack size={12} />
                            </button>
                        )}
                        {page < totalPages - 1 && (
                            <button
                                onClick={handleNext}
                                className="absolute top-[42%] -right-5.5 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                            >
                                <IoIosArrowForward size={12} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
