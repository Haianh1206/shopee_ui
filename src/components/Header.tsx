"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdInfoOutline } from "react-icons/md";
import {
    IoMdSearch,
    IoMdNotificationsOutline,
    IoIosArrowDown,
} from "react-icons/io";
import {
    FaFacebook,
    FaInstagram,
    FaQuestionCircle,
    FaShoppingCart,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function Header() {
    const [showLanguagePopup, setShowLanguagePopup] = useState(false);
    const [languagePopupPos, setLanguagePopupPos] = useState({ x: 0, y: 0 });
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [cartPopupPos, setCartPopupPos] = useState({ x: 0, y: 0 });

    const [hoverEnglish, setHoverEnglish] = useState(false);


    const handleLanguageMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setLanguagePopupPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };


    const handleCartMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setCartPopupPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 px-[140px] h-[120px] 
      bg-gradient-to-b from-[#ee4d2d] to-[#ff7337] text-white shadow"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top bar */}
                <div className="flex justify-between items-center text-sm h-[40px] border-white/20">
                    <div className="flex">
                        <Link
                            href="#"
                            className="inline-block text-[13px] text-white pr-3 relative hover:opacity-70 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-white/50 after:opacity-100"
                        >
                            Kênh Người Bán
                        </Link>

                        <Link
                            href="#"
                            className="inline-block text-[13px] text-white pr-3 pl-3 relative hover:opacity-70 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-white/50 after:opacity-100"
                        >
                            Trở thành Người bán Shopee
                        </Link>

                        <div className="relative group inline-block pr-3 pl-3 cursor-pointer text-[13px] text-white after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-white/50 after:opacity-100">
                            Tải ứng dụng

                            {/* Popup ẩn mặc định */}
                            <div className="absolute top-full left-0 mt-2 w-[180px] h-[240px] bg-white rounded shadow-lg p-3 text-black opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-50">
                                <div className="w-[175px] h-[175px] -translate-y-2 -translate-x-2 relative">
                                    <Image
                                        src="/QR_CODE.png"
                                        alt="QR Code"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        priority
                                    />
                                </div>

                                <div className="flex justify-center gap-4 ">
                                    <div className="w-[80px] h-[24px] relative">
                                        <Image
                                            src="/appstore.png"
                                            alt="App Store"
                                            fill
                                            style={{ objectFit: "contain" }}
                                            priority
                                        />
                                    </div>
                                    <div className="w-[80px] h-[24px] relative">
                                        <Image
                                            src="/google_play.png"
                                            alt="Google Play"
                                            fill
                                            style={{ objectFit: "contain" }}
                                            priority
                                        />
                                    </div>

                                </div>
                                <div className="w-[80px] -ml-1.5 h-[24px] relative">
                                    <Image
                                        src="/AppGallery.png"
                                        alt="Google Play"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <Link href="#" className="inline-block text-[13px] text-white pr-3 pl-3">
                            Kết nối
                        </Link>

                        <span className="flex gap-1">
                            <FaFacebook size={16} color="white" />
                            <FaInstagram size={16} color="white" />
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-row hover:opacity-70">
                            <IoMdNotificationsOutline size={16} color="white" />
                            <Link href="#" className="text-[13px] mx-1">
                                Thông Báo
                            </Link>
                        </div>
                        <div className="flex flex-row hover:opacity-70">
                            <FaQuestionCircle size={16} color="white" />
                            <Link href="#" className="text-[13px] mx-1">
                                Hỗ Trợ
                            </Link>
                        </div>

                        {/* Language selector */}
                        <div
                            className="relative inline-flex items-center cursor-pointer text-white select-none"
                            onMouseEnter={() => setShowLanguagePopup(true)}
                            onMouseLeave={() => setShowLanguagePopup(false)}
                            onMouseMove={handleLanguageMouseMove}
                        >
                            <div className="inline-flex items-center cursor-pointer hover:opacity-70">
                                <MdLanguage size={16} />
                                {/* Dùng span thay cho Link vì không chuyển trang */}
                                <span className="text-[13px] mx-1 select-none">Tiếng Việt</span>
                                <IoIosArrowDown size={16} />
                            </div>

                            {/* Mũi tên tam giác nhỏ (arrow) */}
                            {showLanguagePopup && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: "36px",
                                        width: 0,
                                        height: 0,
                                        borderLeft: "12px solid transparent",
                                        borderRight: "12px solid transparent",
                                        borderBottom: "9px solid white",
                                        zIndex: 10000,
                                    }}
                                />
                            )}

                            {/* Popup label */}
                            <div
                                className={`absolute top-full -left-20 mt-2 h-[80px] w-[180px] bg-white rounded shadow-xl p-3 text-left text-sm text-black
      transition-transform transition-opacity duration-200 z-[9999]
      ${showLanguagePopup ? "opacity-100 visible" : "opacity-0 invisible"}`}
                                style={{
                                    transformOrigin: "right top",
                                    transform: showLanguagePopup ? "scale(1)" : "scale(0.7)",
                                    backgroundColor: "#fff",
                                }}
                            >
                                {/* Lớp giả để giữ hover popup */}
                                <div className="absolute inset-0 -mt-3" aria-hidden="true"></div>

                                {/* Tiếng Việt - font weight nhẹ hơn */}
                                <div
                                    id="viet"
                                    className={`mb-2 font-normal ${hoverEnglish ? "text-black" : "text-[#ff7337]"
                                        }`}
                                >
                                    Tiếng Việt
                                </div>

                                {/* English với hover đổi màu Tiếng Việt, font weight nhẹ */}
                                <div
                                    className="relative inline-block mt-3"
                                    onMouseEnter={() => setHoverEnglish(true)}
                                    onMouseLeave={() => setHoverEnglish(false)}
                                >
                                    <span
                                        className={`font-normal cursor-pointer transition-colors duration-200 ${hoverEnglish ? "text-[#ff7337]" : "text-black"
                                            }`}
                                    >
                                        English
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="inline-block hover:opacity-70 text-[13px] text-white pr-3 pl-3 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-white/50 after:opacity-100"
                        >
                            Đăng Ký
                        </Link>
                        <Link href="#" className="text-[13px] hover:opacity-70">
                            Đăng Nhập
                        </Link>
                    </div>
                </div>

                {/* Middle bar */}
                <div className="flex justify-between items-center h-[80px]">
                    {/* Logo */}
                    <div className="flex items-center mb-2 gap-2">
                        <Image
                            src="/shopee-logo.png"
                            alt="Shopee"
                            width={150}
                            height={80}
                            priority
                        />
                    </div>

                    {/* Search bar */}
                    <div className="flex-1 mr-20 ml-12  relative z-0">
                        <div className="relative w-full">
                            {/* Input + Search */}
                            <div
                                className={`flex w-full relative rounded-lg transition-all duration-150 ${isSearchFocused ? "border-2 border-black" : "border border-transparent"
                                    }`}
                            >
                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Shopee bao ship 0đ - Đăng ký ngay!"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className="m-[4px] pl-6  py-2.5 bg-white rounded-[2px] text-black text-sm outline-none"
                                    style={{ width: "calc(100% + 80px)" }}
                                />

                                {/* Nút search */}
                                <button className="absolute top-1/2 right-[6px] -translate-y-1/2 bg-[#fb5533] py-1.5 px-4 rounded-[2px] flex items-center justify-center">
                                    <IoMdSearch size={24} color="white" />
                                </button>
                            </div>


                            {/* Label khi focus */}
                            {isSearchFocused && (
                                <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-b shadow mt-1 flex items-center justify-between px-4 py-2">
                                    <span className="text-black text-sm">
                                        Shopee bao ship 0đ - Đăng ký ngay!
                                    </span>
                                    <Image
                                        src="/car.png"
                                        alt="Shopee"
                                        width={24}
                                        height={24}
                                        priority
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-x-4 ml-1 gap-y-1 mt-1 text-xs text-white">
                            <Link className="mt-1" href="">
                                Baby Tee Ôm Eo
                            </Link>
                            <Link className="mt-1" href="">
                                Giày Quai Hậu Nữ Đế Thấp
                            </Link>
                            <Link className="mt-1" href="">
                                Bánh Phơi Sương Nhiều Bơ
                            </Link>
                            <Link className="mt-1" href="">
                                Sale 1k Điện Thoại iPhone
                            </Link>
                            <Link className="mt-1" href="">
                                Kẹp Tóc 50 Cái
                            </Link>
                            <Link className="mt-1" href="">
                                Máy Quạt Điện
                            </Link>
                        </div>
                    </div>

                    {/* Cart */}
                    <div
                        className="relative inline-block cursor-pointer"
                        onMouseEnter={() => setShowCartPopup(true)}
                        onMouseLeave={() => setShowCartPopup(false)}
                        onMouseMove={handleCartMouseMove}
                    >
                        <a href="#">
                            <FaShoppingCart className="mr-14 mb-2" size={24} color="white" />
                        </a>

                        {/* Mũi tên tam giác */}
                        {showCartPopup && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: "0px",
                                    width: 0,
                                    height: 0,
                                    borderLeft: "14px solid transparent",
                                    borderRight: "14px solid transparent",
                                    borderBottom: "10px solid white",
                                    zIndex: 10000,
                                    transformOrigin: `${cartPopupPos.x}px ${cartPopupPos.y}px`,
                                    animation: "zoomIn 0.2s forwards",
                                }}
                            />
                        )}

                        {/* Popup label */}
                        <div
                            className={`absolute top-full -left-90 mt-2 h-[250px] w-[400px] bg-white rounded shadow-xl p-3 text-center text-sm text-black
        transition-transform transition-opacity duration-200 z-[9999]
        ${showCartPopup ? "opacity-100 visible" : "opacity-0 invisible"}`}
                            style={{
                                transformOrigin: "right top",
                                transform: showCartPopup ? "scale(1)" : "scale(0.7)",
                                backgroundColor: "#fff",
                                animation: showCartPopup ? "zoomIn 0.2s forwards" : undefined,
                            }}
                        >
                            {/* Ảnh no_cart.png */}
                            <div className="relative w-full h-24 mt-12 mb-4">
                                <Image
                                    src="/no__cart.png"
                                    alt="No Cart"
                                    layout="fill"
                                    objectFit="contain"
                                />

                            </div>
                            <div>Chưa Có Sản Phẩm</div>
                        </div>

                        {/* Animation keyframes */}
                        <style jsx>{`
              @keyframes zoomIn {
                0% {
                  opacity: 0;
                  transform: scale(0.7);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}</style>
                    </div>
                </div>
            </div>
        </header>
    );
}
