"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/app/data/products";
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import {

    FaShoppingCart,
} from "react-icons/fa";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);
    const product = products.find((p) => p.id === productId);
    const [selectedImage, setSelectedImage] = useState(product?.img || "");
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [[mobileIndex, direction], setMobileIndex] = useState<[number, number]>([0, 0]);
    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
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
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (product?.images) {
                setMobileIndex(([prev]) => [
                    Math.min(prev + 1, product.images.length - 1),
                    1,
                ]);
            }
        },
        onSwipedRight: () => {
            if (product?.images) {
                setMobileIndex(([prev]) => [Math.max(prev - 1, 0), -1]);
            }
        },
        trackMouse: true,
    });
    if (!product) {
        return <div className="p-10 text-red-500">Không tìm thấy sản phẩm!</div>;
    }
    const [hours, minutes, seconds] = splitTime(timeLeft);


    const currentIndex = product.images?.indexOf(selectedImage) ?? 0;

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
        setSelectedImage(product.images[newIndex]);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % product.images.length;
        setSelectedImage(product.images[newIndex]);
    };


    const handleThumbPrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleThumbNext = () => {
        if (product.images) {
            setStartIndex((prev) =>
                Math.min(prev + 1, product.images.length - 5)
            );
        }
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] -mt-[110px] sm:pb-4">

            <div className="   mt-26 xl:mx-40 sm:pt-6">

                <div className="hidden sm:flex ml-4 xl:ml-0 text-[#0055AA] mt-2 mb-6 text-sm ">
                    Shopee &gt; Thời Trang Nữ &gt; Áo &gt; Áo thun &gt; <span className="text-gray-900">{product.name}</span>
                </div>

                <div className=" bg-white h-[620px] sm:p-4 flex flex-col md:flex-row sm:gap-6">
                    <div className="sm:hidden w-full" {...swipeHandlers}>
                        <div className="relative w-full h-[380px]">

                            <Image
                                src={product.images[mobileIndex]}
                                // src={selectedImage}
                                alt={`mobile-img-${mobileIndex}`}
                                fill
                                className="object-cover"
                            />


                            <div className="absolute top-0 left-0 mt-1 right-0 flex items-center justify-between px-4 py-2">

                                <button
                                    className="bg-black/40 p-2 rounded-full text-white"
                                    onClick={() => window.history.back()}
                                >
                                    <IoIosArrowBack size={20} />
                                </button>

                                <div className="flex items-center gap-5">

                                    <button className="bg-black/40 p-2 rounded-full text-white">
                                        <FaShoppingCart size={18} />
                                    </button>


                                    <button className="bg-black/40 p-2 rounded-full text-white">
                                        <BsThreeDotsVertical size={18} />
                                    </button>
                                </div>
                            </div>


                            <div className="absolute bottom-2 right-2 bg-white/80 text-black text-sm px-3 py-1 rounded-full">
                                {mobileIndex + 1}/{product.images.length}
                            </div>
                        </div>

                        <div className="relative flex items-center">
                            <div className="flex space-x-2 overflow-hidden">
                                {product.images
                                    ?.slice(startIndex, startIndex + 5)
                                    .map((img: string, index: number) => (
                                        <div

                                            key={index}
                                            className={`border cursor-pointer hover:border-red-500`}
                                            onClick={() => {
                                                setSelectedImage(img);
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <Image

                                                src={img}
                                                alt="thumb"
                                                width={80}
                                                height={70}
                                                className="object-cover"
                                            />
                                        </div>

                                    ))}
                            </div>


                        </div>
                        <div className="flex items-center px-2 py-1 mt-2 bg-orange-100 justify-between gap-2">
                            <div className="relative sm:ml-2 w-[100px] sm:w-[120px] md:w-[140px] h-[16px] sm:h-[30px]">
                                <Image src="/flashSale.png" alt="flashSale" fill className="object-contain" priority />
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-gray">Kết thúc trong</span>
                                <TimeBox value={hours} />
                                <TimeBox value={minutes} />
                                <TimeBox value={seconds} />
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <div
                            className="mb-2 w-70 h-70 lg:w-[444px] lg:h-[444px] relative cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image src={selectedImage} alt={product.name} fill className="object-contain" />
                        </div>

                        <div className="relative flex items-center">
                            <div className="flex space-x-2 overflow-hidden">
                                {product.images
                                    ?.slice(startIndex, startIndex + 5)
                                    .map((img: string, index: number) => (
                                        <div
                                            key={index}
                                            className={`border cursor-pointer hover:border-red-500`}
                                            onClick={() => {
                                                setSelectedImage(img);
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <div
                                                className="relative w-[48px] h-[50px] lg:w-[80px] lg:h-[70px]"
                                            >
                                                <Image
                                                    src={img}
                                                    alt="thumb"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                        </div>

                                    ))}
                            </div>

                            <button
                                onClick={handleThumbPrev}
                                disabled={startIndex === 0}
                                className="absolute  left-0 py-2 bg-gray-600 text-white rounded shadow  disabled:opacity-50"

                            >
                                <IoIosArrowBack color="white" size={24} />
                            </button>

                            <button
                                onClick={handleThumbNext}
                                disabled={
                                    !product.images || startIndex + 5 >= product.images.length
                                }
                                className="absolute right-0 py-2 bg-gray-600 text-white rounded shadow  disabled:opacity-50"

                            >
                                <IoIosArrowForward color="white" size={24} />
                            </button>
                        </div>
                        <div className="flex mt-4 text-sm">
                            <div className="flex items-center mt-4 lg:ml-6 gap-2">
                                <span className="text-gray-800 lg:text-[16px] md:text-[12px]">Chia sẻ:</span>
                                <div className="flex items-center md:gap-1 lg:gap-2">
                                    <a href="#">
                                        <div className="lg:w-7 lg:h-7 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-[#0084FF]">
                                            <FaFacebookMessenger className="text-white lg:w-4 lg:h-4 md:w-3 md:h-3" />
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="lg:w-7 lg:h-7 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-[#1877F2]">
                                            <FaFacebookF className="text-white lg:w-4 lg:h-4 md:w-3 md:h-3" />
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="lg:w-7 lg:h-7 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-[#E60023]">
                                            <FaPinterestP className="text-white lg:w-4 lg:h-4 md:w-3 md:h-3" />
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="lg:w-7 lg:h-7 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-[#1DA1F2]">
                                            <FaTwitter className="text-white lg:w-4 lg:h-4 md:w-3 md:h-3" />
                                        </div>
                                    </a>


                                </div>
                            </div>

                            <div className="w-px h-6 bg-gray-100 mt-4 lg:ml-6 lg:mr-10"></div>

                            <div className="flex items-center gap-1 mt-4 text-gray-600 cursor-pointer">
                                <FiHeart size={24} className="text-red-500 md:ml-4 lg:ml-0 lg:mr-2" />
                                <span className="text-[16px] text-black">Đã thích (4)</span>
                            </div>
                        </div>



                        {isModalOpen && product && (
                            <div
                                className="fixed inset-0 bg-black/20  flex items-center justify-center z-50"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <div
                                    className="bg-white rounded-[2px] overflow-hidden flex w-[830px] h-[530px] relative shadow-lg"
                                    onClick={(e) => e.stopPropagation()}
                                >



                                    <div className="relative flex-1 flex items-center justify-center ">
                                        <button
                                            onClick={handlePrev}
                                            className="absolute left-3 text-white  bg-black opacity-70 text-4xl py-4  z-10"
                                        >
                                            <IoIosArrowBack />
                                        </button>

                                        <Image
                                            src={selectedImage}
                                            alt="preview"
                                            width={700}
                                            height={700}
                                            className="object-contain px-3 max-h-full"
                                        />

                                        <button
                                            onClick={handleNext}
                                            className="absolute right-3 text-white  bg-black opacity-70 text-4xl py-4 z-10"
                                        >
                                            <IoIosArrowForward />
                                        </button>
                                    </div>

                                    <div className="w-[300px] pr-8 flex flex-col overflow-y-auto">
                                        <h2 className="= text-[16px] my-8">{product.name}</h2>

                                        <div className="grid grid-cols-3 gap-2">
                                            {product.images.map((img: string, index: number) => (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedImage(img)}
                                                    className={`border-2 ${selectedImage === img ? "border-red-500" : "border-transparent"
                                                        } cursor-pointer`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`thumb-${index}`}
                                                        width={90}
                                                        height={90}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>


                    <div className="flex-1 sm:ml-3 sm:mr-4">
                        <div className="hidden sm:flex text-gray-900 text-[20px] mt-4 text-left line-clamp-2 transition-transform duration-200 group-hover:translate-y-[-1px]">
                            <span className="hidden sm:flex bg-orange-600 text-white text-[12px] px-1.5 py-1 mb-1 rounded-[2px] mr-2 align-middle">
                                Yêu thích
                            </span>

                            {product.name}
                        </div>
                        <div className="hidden sm:flex items-center mb-2 relative">
                            <span className="mr-2 underline underline-offset-[4px]">{product.rating || 0}</span>
                            <span className="mr-2 text-yellow-500">★★★★★</span>
                            <span className="text-gray-300 ml-2 mr-5">|</span>
                            <span className="text-gray-900 mr-2 text-[16px] underline underline-offset-[4px]">{product.reviews || 0}</span>
                            <span className="text-gray-500 text-[14px]">Đánh Giá</span>


                            <span className="absolute top-0 right-0 text-[14px] text-gray-500">
                                Tố cáo
                            </span>
                        </div>

                        <div className="mb-0 p-4 bg-[rgba(0,0,0,0.02)]  flex items-center">

                            <span className="text-2xl text-red-500 mr-2">{product.price}</span>
                            {product.originalPrice && (
                                <span className="line-through text-gray-400">{product.originalPrice}</span>
                            )}
                            <span className="text-red-500 font-bold ml-2 bg-shopee-pink py-0.5 text-[10px] text-[#EE4D2D] border border-gray-300 bg-[#FEEEEA] px-1 ">
                                {product.sale}
                            </span>
                        </div>

                        <div className="sm:hidden  border-b">
                            <div className="flex items-start gap-2">

                                <Image
                                    src="/mall.svg"
                                    alt="Mall"
                                    width={36}
                                    height={16}
                                    className="inline-block mt-1"
                                    priority
                                />


                                <p className="text-gray-900 text-[16px] leading-6 font-medium">
                                    {product.name}
                                </p>
                            </div>
                        </div>


                        <div className="sm:ml-4 space-y-10">
                            <div className="flex items-start pl-3 sm:pl-0 mb-4 border-b sm:border-none mb-2 sm:mb-0 mt-2 sm:mt-6">
                                <span className="hidden sm:flex w-27 text-gray-500  text-sm">Vận Chuyển</span>
                                <div>
                                    <div className="flex items-center text-sm text-gray-700">
                                        <img
                                            src="/car.png"
                                            alt="car"
                                            className="w-5 h-5 inline-block mr-1"
                                        />
                                        Nhận từ <span className="mx-1 font-medium">16 Th08 - 18 Th08</span>,
                                        phí giao ₫0
                                    </div>
                                    <p className="text-xs ml-6 text-gray-500 mt-1">
                                        Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.
                                    </p>
                                </div>
                            </div>
                            <div className="flex sm:hidden pl-3 sm:pl-0">
                                <img
                                    src="/protect1.png"
                                    alt="car"
                                    className="w-5 h-5 inline-block mr-1"
                                />
                                <span className="text-gray-700 text-sm">Trả hàng miễn phí 15 ngày</span>
                            </div>

                            <div className="hidden sm:flex relative group   items-center">
                                <span className="w-20 text-gray-500 text-sm mr-7">An Tâm Mua Sắm Cùng Shopee</span>



                                <div className="flex items-center cursor-pointer text-sm text-gray-700">
                                    <img
                                        src="/protect.svg"
                                        alt="car"
                                        className="w-5 h-5 inline-block mr-1"
                                    />
                                    <span>Bảo hiểm Thời trang</span>
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                <div className="absolute left-26 mt-30 w-122 bg-white border border-gray-200 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-10">

                                    <div className="p-3">
                                        <p className="font-semibold text-sm">An tâm mua sắm cùng Shopee</p>
                                        <div className="flex items-center mt-2">
                                            <img
                                                src="/protect1.png"
                                                alt="car"
                                                className="w-5 h-5 inline-block mr-1"
                                            />
                                            <span className="text-gray-700 text-sm">Bảo hiểm Thời trang</span>
                                            <svg
                                                className="w-4 h-4 ml-auto text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Tìm hiểu thêm</p>
                                    </div>
                                </div>
                            </div>

                            {product.colors && (
                                <div className="mb-4 hidden sm:flex items-center">
                                    <div className="font-medium text-gray-500 mb-1 mr-12">Màu sắc</div>
                                    <div className="flex space-x-2">
                                        {product.colors.map((color) => (
                                            <button
                                                key={color}
                                                className={`border px-2 py-1 ${selectedColor === color ? "border-red-500" : ""}`}
                                                onClick={() => setSelectedColor(color)}
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {product.sizes && (
                                <div className="mb-4 hidden sm:flex items-center">
                                    <div className="font-medium text-gray-500 mt-4 mb-1 mr-19">Size</div>
                                    <div className="flex space-x-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`border px-2 py-1 ${selectedSize === size ? "border-red-500" : ""}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}


                            <div className="mb-4 hidden sm:flex items-center">
                                <div className="font-medium text-gray-500 mt-6 mb-1 mr-10">Số lượng</div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="border px-3 py-1"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        className="border px-3 py-1"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>


                            <div className="hidden sm:flex space-x-4 mt-10">
                                <button className="w-[200px] cursor-pointer h-[48px] bg-red-50 border border-red-500 text-red-500 
  py-2 font-medium hover:opacity-80 transition flex items-center justify-center gap-2">
                                    <FaShoppingCart size={16} color="red" />
                                    Thêm vào giỏ hàng
                                </button>

                                <button className="w-[180px] h-[48px] cursor-pointer bg-orange-600 text-white py-2 font-medium hover:opacity-80 transition">
                                    Mua Ngay
                                </button>
                            </div>
                        </div>
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
                    className={`w-[12px] h-6 bg-black text-white text-sm font-bold flex items-center justify-center overflow-hidden relative
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