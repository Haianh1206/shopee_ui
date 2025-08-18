"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { products } from "@/app/data/products"

import { HiLightningBolt } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function FlashSale() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/product/${id}`);
    };






    const slidesToShow = 6;
    const totalSlides = Math.ceil(products.length / slidesToShow);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: slidesToShow,
        beforeChange: (_: number, next: number) => setCurrentSlide(next / slidesToShow),
        nextArrow: <SampleNextArrow show={currentSlide < totalSlides - 1} />,
        prevArrow: <SamplePrevArrow show={currentSlide > 0} />,
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] ">

            <div className=" mx-40 ">
                <div className="flex items-center justify-between ">
                    <h2 className="text-lg text-[16px] text-gray-500 mb-2 pt-10">CÁC SẢN PHẨM KHÁC CỦA SHOP</h2>

                    <button className="flex items-center cursor-pointer text-red-400 text-sm font-medium">
                        Xem Tất Cả
                        <span className="ml-1 mr-2 mb-0.5 flex items-center justify-center">
                            <IoIosArrowForward className="text-red" />
                        </span>
                    </button>
                </div>
                <div className=" h-[290px] ">
                    <div className="relative group bg-white  ">
                        <Slider {...settings}>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleClick(product.id)}
                                    className=" group relative flex flex-col bg-white border border-gray-200 px-2.5 "
                                >

                                    <div className="relative w-full aspect-square transition-transform duration-200 hover:translate-y-[-1px]  ">
                                        <Image
                                            src={product.img}
                                            alt="product"
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 z-20">
                                            <Image
                                                src={product.bg}
                                                alt="bg"
                                                width={160}
                                                height={50}
                                                className="object-contain mb-2.5"
                                            />
                                        </div>
                                        <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 text-[10px] text-[#EE4D2D] border border-gray-300 bg-[#FEEEEA] px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                            {product.sale}
                                        </div>
                                    </div>





                                    <div className="p-2 flex-grow">
                                        <div className="text-[#555] text-[14px] text-left line-clamp-2 transition-transform duration-200 group-hover:translate-y-[-1px]">
                                            <span className="bg-red-500 text-white  transition-transform duration-200 group-hover:translate-y-[-1px] text-[10px] px-1 py-0.5 rounded-[2px] mr-1 align-middle">
                                                Yêu thích
                                            </span>
                                            {product.name}
                                        </div>
                                    </div>






                                    <div className="flex items-center space-x-1">
                                        <HiLightningBolt style={{ borderRightWidth: "3px" }} className="text-red-500 ml-2 border border-red-500 w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-y-[-1px]" />
                                        <span className="bg-red-300 -ml-1 text-white text-[10px] px-1.5 py-0.5 transition-transform duration-200 group-hover:translate-y-[-1px] ">
                                            Đang bán chạy
                                        </span>
                                    </div>
                                    <div className="text-left ml-2 text-red-400 text-lg mt-2">
                                        {product.price}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}


type ArrowProps = { onClick?: () => void; show?: boolean };

function SampleNextArrow({ onClick, show }: ArrowProps) {
    if (!show) return null;
    return (
        <div
            onClick={onClick}
            className="absolute z-9 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-150 hover:bg-gray-100"
        >
            <IoIosArrowForward size={14} className="text-gray-700" />
        </div>
    );
}

function SamplePrevArrow({ onClick, show }: ArrowProps) {
    if (!show) return null;
    return (
        <div
            onClick={onClick}
            className="absolute z-9 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-150 hover:bg-gray-100"
        >
            <IoIosArrowBack size={14} className="text-gray-700" />
        </div>
    );
}
