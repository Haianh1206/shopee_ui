"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const banners = [
    { id: 1, img: "/banner.jpg" },
    { id: 2, img: "/banner1.jpg" },
    { id: 3, img: "/banner2.jpg" },
    { id: 4, img: "/banner3.jpg" },
    { id: 5, img: "/banner4.jpg" },
];

const bannerSmall = [
    { id: 1, img: "/banner-nho1.jpg" },
    { id: 2, img: "/banner-nho2.jpg" },
];

const items = [
    { id: 1, img: "/icon1.png", text: "Mã Giảm Giá" },
    { id: 2, img: "/icon2.png", text: "Hàng Chọn Giá Hời" },
    { id: 3, img: "/icon3.png", text: "Deal Hot Giờ Vàng" },
    { id: 4, img: "/icon4.png", text: "Shopee Style Voucher 30%" },
    { id: 5, img: "/icon5.png", text: "Săn Ngay 100.000 Xu" },
    { id: 6, img: "/icon6.png", text: "Khách Hàng Thân Thiết" },
];

export default function BannerSection() {
    const [current, setCurrent] = useState(0);
    const length = banners.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + length) % length);
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pt-8 pb-8">

            <div className=" mx-40  ">

                <div className="flex gap-2">

                    <div className="relative w-full  overflow-hidden group">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {banners.map((banner) => (
                                <div
                                    key={banner.id}
                                    className="min-w-full h-[360px] relative"
                                >
                                    <Image
                                        src={banner.img}
                                        alt={`Banner ${banner.id}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>


                        <button
                            onClick={prevSlide}
                            className="absolute  text-white top-1/2 -left-3.5 -translate-y-1/2 px-2 py-4.5 bg-[rgba(0,0,0,0.2)] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronLeft size={24} />
                        </button>


                        <button
                            onClick={nextSlide}
                            className="absolute text-white top-1/2 -right-3.5 -translate-y-1/2 px-2 py-4.5 bg-[rgba(0,0,0,0.2)] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <FaChevronRight size={24} />
                        </button>



                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {banners.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index
                                        ? "bg-orange-500"
                                        : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}
