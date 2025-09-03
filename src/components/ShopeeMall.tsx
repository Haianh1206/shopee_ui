"use client";
import { useState } from "react";
import { FaRedoAlt, FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false, dots: false }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2.7, slidesToScroll: 2, infinite: false, dots: false }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2.7, slidesToScroll: 2, infinite: false, dots: false }
            }
        ]
    };
    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-3 sm:pb-6">
            <div className="bg-white md:px-2 xl:mx-40 shadow-sm">
                <div className="mb-1 sm:mb-4 sm:border-b border-gray-200 pb-2">
                    <div className="hidden sm:flex items-center justify-between px-5 pt-5 pb-2">
                        <div className="flex items-center space-x-4 text-base">
                            <span className="text-red-600 font-medium">SHOPEE MALL</span>
                            <span className="text-gray-200">|</span>

                            <span className="flex items-center text-gray-700">
                                <FaRedoAlt className="text-red-500 mr-1" /> 15 Ngày Trả Hàng
                            </span>
                            <span className="flex items-center text-gray-700">
                                <FaShieldAlt className="text-red-500 mr-1" /> Hàng Chính Hãng
                            </span>
                            <span className="flex items-center text-gray-700">
                                <FaTruck className="text-red-500 mr-1" /> Miễn Phí Ship
                            </span>
                        </div>

                        <button className="flex items-center cursor-pointer text-red-600 text-sm font-medium pr-8">
                            Xem Tất Cả
                            <span className="ml-1 bg-red-600 rounded-full p-1 flex items-center justify-center">
                                <IoIosArrowForward className="text-white" size={14} />
                            </span>
                        </button>
                    </div>

                    <div className="sm:hidden pt-1.5 ">
                        <div className="flex items-center pl-3 pr-1 h-10 border-b  justify-between mb-2">
                            <span className="text-red-600 font-medium text-[16px]">SHOPEE MALL</span>
                            <button className="flex items-center cursor-pointer text-gray-600 text-xs font-medium">
                                Xem thêm
                                <span className="ml-1 p-1 flex items-center justify-center">
                                    <IoIosArrowForward className="text-gray" size={12} />
                                </span>
                            </button>
                        </div>

                        <div className="flex flex-wrap px-3 mt-3 gap-x-6 gap-y-1 text-xs">
                            <span className="flex items-center text-gray-700">
                                <FaRedoAlt className="text-red-500 mr-1" /> 15 Ngày Trả Hàng
                            </span>
                            <span className="flex items-center text-gray-700">
                                <FaShieldAlt className="text-red-500 mr-1" /> Hàng Chính Hãng
                            </span>
                            <span className="flex items-center text-gray-700">
                                <FaTruck className="text-red-500 mr-1" /> Miễn Phí Ship
                            </span>
                        </div>
                    </div>
                </div>



                <div className="relative flex flex-col sm:flex-row group">
                    <div className="w-full px-3 sm:px-0 sm:w-[33%] h-[110px] sm:h-[480px] overflow-hidden">
                        <img
                            src="/shopeeMall_banner.png"
                            alt="Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative w-full  sm:w-[65%] pb-4 sm:pb-0 sm:mt-4 sm:mt-0">
                        <div className="overflow-hidden">
                            <div
                                className="hidden sm:flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
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
                        <div className=" flex sm:hidden  mt-4 px-3">
                            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-3">

                                {products.map((prod, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-none border w-[35%] snap-start cursor-pointer p-2 transition-all duration-200 rounded-sm"
                                    >
                                        <div className="w-full h-32 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                                            <img
                                                src={prod.img}
                                                alt={prod.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span className="text-sm text-red-600 text-center block mt-2">
                                            {prod.name}
                                        </span>
                                    </div>
                                ))}

                                <div
                                    className="flex-none w-[35%] snap-start cursor-pointer p-2 transition-all duration-200 rounded-sm flex items-center justify-center"
                                >
                                    <div className="flex flex-col items-center justify-center text-red-600">
                                        <div className="flex items-center justify-center w-8 h-8 border border-red-600 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-red-600"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        <span className="text-[12px] mt-1">Xem thêm</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {page > 0 && (
                            <button
                                onClick={handlePrev}
                                className="hidden sm:flex absolute top-[42%] left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                            >
                                <IoIosArrowBack className="xl:w-3 xl:h-3 md:w-10 md:h-10" />

                            </button>
                        )}
                        {page < totalPages - 1 && (
                            <button
                                onClick={handleNext}
                                className="hidden sm:flex absolute top-[42%] -right-5.5 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                            >
                                <IoIosArrowForward className="xl:w-3 xl:h-3 md:w-10 md:h-10" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
