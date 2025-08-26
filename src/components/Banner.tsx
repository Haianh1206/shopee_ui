"use client"

import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Image from "next/image"

const banners = [
    { id: 1, img: "/banner.jpg" },
    { id: 2, img: "/banner1.jpg" },
    { id: 3, img: "/banner2.jpg" },
    { id: 4, img: "/banner3.jpg" },
    { id: 5, img: "/banner4.jpg" },
]

const bannerSmall = [
    { id: 1, img: "/banner-nho1.jpg" },
    { id: 2, img: "/banner-nho2.jpg" },
]

const items = [
    { id: 1, img: "/icon1.png", text: "Mã Giảm Giá" },
    { id: 2, img: "/icon2.png", text: "Hàng Chọn Giá Hời" },
    { id: 3, img: "/icon3.png", text: "Deal Hot Giờ Vàng" },
    { id: 4, img: "/icon4.png", text: "Shopee Style Voucher 30%" },
    { id: 5, img: "/icon5.png", text: "Săn Ngay 100.000 Xu" },
    { id: 6, img: "/icon6.png", text: "Khách Hàng Thân Thiết" },
]

export default function BannerSection() {
    const [current, setCurrent] = useState(0)
    const length = banners.length

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + length) % length)
    }

    const goToSlide = (index: number) => {
        setCurrent(index)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full max-w-[1200px] h-28 sm:h-auto mt-38 mx-auto  px-2">
            <div className="-mt-20 sm:hidden order-1 px-1 overflow-x-auto scrollbar-custom">
                <div className="inline-flex gap-2 snap-x snap-mandatory pb-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[90px] flex flex-col items-center cursor-pointer transform transition-transform duration-200 hover:-translate-y-0.5 snap-start"
                        >
                            <div className="relative w-10 h-10">
                                <Image
                                    src={item.img}
                                    alt={item.text}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[12px] w-[72px] mt-1 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>




            <div className="flex flex-col sm:flex-row gap-2 order-2">
                <div className="relative w-full sm:w-2/3 h-[180px] sm:h-[250px] overflow-hidden group">
                    <div
                        className="hidden sm:flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {banners.map((banner) => (
                            <div
                                key={banner.id}
                                className="min-w-full h-[180px] sm:h-[250px] relative"
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
                        className="hidden sm:flex absolute text-white top-1/2 -left-3.5 -translate-y-1/2 px-2 py-4.5 bg-[rgba(0,0,0,0.2)] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden sm:flex absolute text-white top-1/2 -right-3.5 -translate-y-1/2 px-2 py-4.5 bg-[rgba(0,0,0,0.2)] text-black rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <FaChevronRight size={24} />
                    </button>
                    <div className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${current === index
                                    ? "bg-orange-500"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden sm:flex w-1/3 flex-col gap-2">
                    {bannerSmall.map((bn) => (
                        <div
                            key={bn.id}
                            className="relative w-full h-[122px] cursor-pointer overflow-hidden"
                        >
                            <Image
                                src={bn.img}
                                alt={`Small Banner ${bn.id}`}
                                fill
                                className="object-cover transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:grid mt-4 grid-cols-6 gap-4 order-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center cursor-pointer transform transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <div className="relative w-12 h-12">
                            <Image
                                src={item.img}
                                alt={item.text}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-[14px] w-[84px] mt-2 text-center">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
