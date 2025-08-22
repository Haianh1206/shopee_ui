"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FlashSale() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const products = Array(18).fill({
        name: "Áo Thun",
        img: "/search1st.jpg",
        bg: "/bg_img2.png",
        label: "Bán 99k+ / tháng",
    });





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
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-6">
            <div className="bg-white mx-40 shadow-sm">
                <div className="bg-white h-[340px] ">

                    <div className="flex items-center justify-between mb-4 border-b border-gray-200">
                        <h2 className="text-lg text-[16px] text-orange-500 mb-4 px-4 pt-4">TÌM KIẾM HÀNG ĐẦU</h2>

                        <button className="flex items-center cursor-pointer text-red-400 text-sm font-medium">
                            Xem Tất Cả
                            <span className="ml-1 mr-2 mb-0.5 flex items-center justify-center">
                                <IoIosArrowForward className="text-red" />
                            </span>
                        </button>
                    </div>


                    <div className="relative group">
                        <Slider {...settings}>
                            {products.map((product, idx) => (
                                <div key={idx} className="px-2.5">
                                    <div className="bg-white overflow-hidden">

                                        <div className="relative w-full h-[180px]">
                                            <Image
                                                src={product.img}
                                                alt="product"
                                                fill
                                                className="relative z-10 object-contain"
                                            />
                                            <div className="absolute top-0 left-0 right-0 z-20">
                                                <Image
                                                    src={product.bg}
                                                    alt="bg"
                                                    width={32}
                                                    height={28}
                                                    className="object-contain mb-2.5"
                                                />
                                            </div>
                                            <div className="absolute text-[14px] text-white bg-[#00000042] text-center bottom-0 left-0 right-0 z-20">
                                                {product.label}
                                            </div>
                                        </div>



                                        <div className="text-[#555] text-[18px] ml-1 mt-5 text-left">
                                            {product.name}
                                        </div>


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
