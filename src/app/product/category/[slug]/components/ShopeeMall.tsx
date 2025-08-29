"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const products = [
    { name: "Ưu đãi đến 50%", img: "/shopeeMall_banner2.jpg" },
    { name: "Mua là có quà", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
    { name: "Sản Phẩm 1", img: "/shopeeMall_banner2.jpg" },
];

const shops = Array(5).fill({
    img2: "/shopeethinhhanh.png",
    name: "SHOP XU HƯỚNG",
    price: "₫18.000",
});

export default function ShopeeMall() {
    const perPage = 12;
    const totalPages = Math.ceil(products.length / perPage);
    const [page, setPage] = useState(0);

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] sm:pb-6">

            <div className="bg-white sm:mx-40 sm:h-[670px] shadow-sm">
                <div className="hidden sm:flex items-center justify-between sm:mb-4 pb-2">
                    <div className="flex items-center space-x-4 px-5 pt-5 pb-2">
                        <span className="text-red-600 text-lg">SHOPEE MALL</span>
                    </div>
                    <button className="flex items-center cursor-pointer text-red-600 text-sm font-medium">
                        Xem Tất Cả
                        <span className="ml-1 bg-red-600 mr-8 rounded-full p-1 flex items-center justify-center">
                            <IoIosArrowForward className="text-white" />
                        </span>
                    </button>
                </div>
                <div className="flex sm:hidden items-center pl-3 pr-1 h-10   justify-between ">
                    <span className="text-gray-600 font-medium text-[14px]">SHOPEE MALL</span>
                    <button className="flex items-center cursor-pointer text-red-600 text-xs font-medium">
                        Xem tất cả
                        <span className="ml-1 p-1 flex items-center justify-center">
                            <IoIosArrowForward className="text-gray" size={12} />
                        </span>
                    </button>
                </div>
                <div className="relative flex group">
                    <div className="relative w-full">
                        <div className="overflow-hidden hidden sm:block">
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
                                            className="grid grid-cols-6 grid-rows-2 flex-shrink-0"
                                            style={{ width: `${100 / totalPages}%`, height: "240px" }}
                                        >
                                            {pageItems.map((prod, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex border border-gray-100 flex-col items-center cursor-pointer p-2"
                                                >
                                                    <div className="overflow-hidden bg-gray-100 flex items-center justify-center">
                                                        <img
                                                            src={prod.img}
                                                            alt={prod.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                        <div className="sm:hidden overflow-x-auto scrollbar-hide px-3">
                            <div className="flex gap-4 snap-x snap-mandatory">
                                {Array.from({ length: Math.ceil(products.length / 6) }).map((_, pageIndex) => {
                                    const start = pageIndex * 6;
                                    const pageItems = products.slice(start, start + 6);

                                    return (
                                        <div
                                            key={pageIndex}
                                            className="flex-none w-[85%] snap-start"
                                        >
                                            <div className="flex gap-2 mb-2">
                                                {pageItems.slice(0, 3).map((prod, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-1 border border-gray-100 flex flex-col items-center cursor-pointer p-2"
                                                    >
                                                        <div className="overflow-hidden bg-gray-100 flex items-center justify-center sm:h-[120px]">
                                                            <img
                                                                src={prod.img}
                                                                alt={prod.name}
                                                                className="w-20 h-10 sm:w-full sm:h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                {pageItems.slice(3, 6).map((prod, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-1 border border-gray-100 flex flex-col items-center cursor-pointer p-2"
                                                    >
                                                        <div className="overflow-hidden bg-gray-100 flex items-center justify-center sm:h-[120px]">
                                                            <img
                                                                src={prod.img}
                                                                alt={prod.name}
                                                                className="w-20 h-10 sm:w-full sm:h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>






                        {page > 0 && (
                            <button
                                onClick={handlePrev}
                                className="absolute top-[42%] left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100 hidden sm:block"
                            >
                                <IoIosArrowBack size={12} />
                            </button>
                        )}
                        {page < totalPages - 1 && (
                            <button
                                onClick={handleNext}
                                className="absolute top-[42%] right-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100 hidden sm:block"
                            >
                                <IoIosArrowForward size={12} />
                            </button>
                        )}
                    </div>
                </div>


                <div className="flex items-center justify-between mb-2 sm:mb-4 ">
                    <h2 className=" text-sm sm:text-lg text-gray-500 mb-2 px-4 pt-4">
                        SIÊU SHOP THỊNH HÀNH - BUNG DEAL SIÊU PHẨM
                    </h2>
                    <button className="hidden sm:flex items-center cursor-pointer text-red-400 text-sm font-medium">
                        Xem Tất Cả
                        <span className="ml-1 mr-2 mb-0.5 flex items-center justify-center">
                            <IoIosArrowForward />
                        </span>
                    </button>
                </div>


                <div className="flex sm:grid sm:grid-cols-5 pb-3 sm:pb-0 gap-2 mx-3 px-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-hide">
                    {shops.map((shop, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[calc(100%/3.3)] sm:w-auto snap-start border border-gray-300 transition-transform duration-200 hover:-translate-y-[2px]"
                        >
                            <div className="bg-white text-center overflow-hidden">
                                <div className="relative h-25 sm:h-[200px]">
                                    <Image
                                        src={shop.img2}
                                        alt="shop"
                                        fill
                                        className="relative z-10 object-contain object-top"
                                    />
                                </div>
                                <div className="text-[#333] text-[12px] sm:text-[16px] ml-1 mt-0">
                                    {shop.name}
                                </div>
                                <div className="text-center text-red-400 text-sm sm:text-lg pb-2 sm:mt-2">
                                    {shop.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-white sm:mx-40 sm:h-[355px] shadow-sm pb-3 sm:pb-0 mt-3 sm:mt-6">
                <div className="flex items-center justify-between sm:mb-4 ">
                    <h2 className="text-sm sm:text-lg text-gray-500 mb-2 px-4 pt-4">
                        KIỂU CÁCH THỊNH HÀNH - DIỆN BẢNH MẶC SANG
                    </h2>
                </div>
                <div className="flex sm:grid sm:grid-cols-5 gap-2 mx-3 px-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-hide">
                    {shops.map((shop, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[calc(100%/3.3)] sm:w-auto snap-start border border-gray-300 transition-transform duration-200 hover:-translate-y-[2px]"
                        >
                            <div className="bg-white text-center overflow-hidden">
                                <div className="relative h-25 sm:h-[200px]">
                                    <Image
                                        src={shop.img2}
                                        alt="shop"
                                        fill
                                        className="relative z-10 object-contain object-top"
                                    />
                                </div>
                                <div className="hidden sm:flex text-[#333] text-[12px] sm:text-[16px] ml-1 mt-0">
                                    {shop.name}
                                </div>
                                <div className="text-center text-red-400 text-sm sm:text-lg pb-2 mt-6 sm:mt-2">
                                    {shop.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
