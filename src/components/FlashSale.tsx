"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FlashSale() {
    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = Array(18).fill({
        price: "₫108.000",
        img: "/Sale_img.jpg",
        bg: "/bg_img.png",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev <= 0 ? 3 * 60 * 60 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const splitTime = (seconds: number) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return [h, m, s];
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

    const [hours, minutes, seconds] = splitTime(timeLeft);

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pt-2 sm:pt-0 pb-2 sm:pb-6">
            <div className="bg-white sm:mx-2 md:mx-0 xl:mx-40 shadow-sm">
                <div className="bg-white p-2 sm:p-4">
                    <div className="flex items-center justify-between sm:mb-4">
                        <div className="flex items-center gap-2">
                            <div className="relative sm:ml-2 w-[100px] sm:w-[120px] md:w-[140px] h-[16px] sm:h-[30px]">
                                <Image src="/flashSale.png" alt="flashSale" fill className="object-contain" priority />
                            </div>
                            <div className="flex items-center gap-1">
                                <TimeBox value={hours} />
                                <TimeBox value={minutes} />
                                <TimeBox value={seconds} />
                            </div>
                        </div>
                        <button className="flex items-center cursor-pointer text-gray-500 sm:text-red-400 text-xs md:text-sm font-medium">
                            Xem Tất Cả
                            <span className="ml-1 mr-2 mb-0.5 flex items-center justify-center">
                                <IoIosArrowForward className="text-red" />
                            </span>
                        </button>
                    </div>
                    <div className="relative group">
                        <Slider {...settings}>
                            {products.map((product, idx) => (
                                <div key={idx} className="px-1 sm:px-2">
                                    <div className="bg-white border sm:border-none overflow-hidden">
                                        <div className="relative w-full h-[160px] md:h-[200px]">
                                            <Image src={product.img} alt="product" fill className="relative z-10 object-contain" />
                                            <div className="absolute bottom-0 left-0 right-0 z-20">
                                                <Image src={product.bg} alt="bg" width={160} height={50} className="object-contain mb-2.5" />
                                            </div>
                                        </div>
                                        <div className="text-center text-red-400 text-base md:text-lg sm:mt-2">{product.price}</div>
                                        <div className="relative flex text-center mb-2 sm:mb-0 mt-2 mx-auto w-[120px] md:w-[150px] h-5 text-white text-[10px] md:text-[11px] font-bold rounded-xl overflow-hidden">
                                            <div className="bg-orange-600" style={{ width: "5%" }}></div>
                                            <div style={{ width: "10%", background: "linear-gradient(to right, #ea580c, #fdba74)" }}></div>
                                            <div className="bg-orange-200 flex-1"></div>
                                            <div className="absolute  text-white inset-0 flex items-center justify-center z-10 text-orange-800">
                                                ĐANG BÁN CHẠY
                                            </div>
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

function TimeBox({ value }: { value: string }) {
    return (
        <div className="flex">
            {value.split("").map((digit, idx) => (
                <div
                    key={idx}
                    className={`w-[12px] mb-2 h-6 bg-black text-white text-sm font-bold flex items-center justify-center overflow-hidden relative
                        ${idx === 0 ? "rounded-l-[4px]" : ""}
                        ${idx === value.length - 1 ? "rounded-r-[4px]" : ""}
                    `}
                >
                    <AnimatedDigit digit={digit} />
                </div>
            ))}
        </div>
    );
}

function AnimatedDigit({ digit }: { digit: string }) {
    const [displayDigit, setDisplayDigit] = useState(digit);
    const [incomingDigit, setIncomingDigit] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (digit !== displayDigit) {
            setIncomingDigit(digit);
            setIsAnimating(true);
            const timeout = setTimeout(() => {
                setDisplayDigit(digit);
                setIncomingDigit(null);
                setIsAnimating(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [digit, displayDigit]);

    return (
        <div className="relative overflow-hidden w-full h-full leading-none">
            <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out ${isAnimating ? "animate-slideOutUp" : ""}`}>{displayDigit}</span>
            {incomingDigit && (
                <span className="absolute inset-0 flex items-center justify-center animate-slideInUp">
                    {incomingDigit}
                </span>
            )}
            <style jsx>{`
                @keyframes slideInUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0%); }
                }
                @keyframes slideOutUp {
                    from { transform: translateY(0%); }
                    to { transform: translateY(-100%); }
                }
                .animate-slideInUp { animation: slideInUp 0.3s ease-out forwards; }
                .animate-slideOutUp { animation: slideOutUp 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
}

type ArrowProps = { onClick?: () => void; show?: boolean };

function SampleNextArrow({ onClick, show }: ArrowProps) {
    if (!show) return null;
    return (
        <div onClick={onClick} className="hidden xl:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-150 hover:bg-gray-100">
            <IoIosArrowForward size={14} className="text-gray-700" />
        </div>
    );
}

function SamplePrevArrow({ onClick, show }: ArrowProps) {
    if (!show) return null;
    return (
        <div onClick={onClick} className="hidden xl:flex absolute top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-150 hover:bg-gray-100">
            <IoIosArrowBack size={14} className="text-gray-700" />
        </div>
    );
}
