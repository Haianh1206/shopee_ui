"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const categories = [
    { name: "Thời Trang Nam", img: "/cat1.webp" },
    { name: "Điện Thoại & Phụ Kiện", img: "/cat1.webp" },
    { name: "Thiết Bị Điện Tử", img: "/cat1.webp" },
    { name: "Máy Tính & Laptop", img: "/cat1.webp" },
    { name: "Máy Ảnh & Máy Quay Phim", img: "/cat1.webp" },
    { name: "Đồng Hồ", img: "/cat1.webp" },
    { name: "Giày Dép Nam", img: "/cat1.webp" },
    { name: "Thiết Bị Điện Gia Dụng", img: "/cat1.webp" },
    { name: "Thể Thao & Du Lịch", img: "/cat1.webp" },
    { name: "Ô Tô & Xe Máy & Xe Đạp", img: "/cat1.webp" },
    { name: "Thời Trang Nữ", img: "/cat1.webp" },
    { name: "Mẹ & Bé", img: "/cat1.webp" },
    { name: "Nhà Cửa & Đời Sống", img: "/cat1.webp" },
    { name: "Sắc Đẹp", img: "/cat1.webp" },
    { name: "Sức Khỏe", img: "/cat1.webp" },
    { name: "Giày Dép Nữ", img: "/cat1.webp" },
    { name: "Túi Ví Nữ", img: "/cat1.webp" },
    { name: "Phụ Kiện & Trang Sức Nữ", img: "/cat1.webp" },
    { name: "Bách Hóa Online", img: "/cat1.webp" },
    { name: "Nhà Sách Online", img: "/cat1.webp" },
    { name: "Đồ Chơi Trẻ Em", img: "/cat1.webp" },
    { name: "Nhạc Cụ", img: "/cat1.webp" },
    { name: "Văn Phòng Phẩm", img: "/cat1.webp" },
    { name: "Dụng Cụ Làm Vườn", img: "/cat1.webp" },
    { name: "Thú Cưng", img: "/cat1.webp" },
    { name: "Thực Phẩm", img: "/cat1.webp" },
    { name: "Đồ Uống", img: "/cat1.webp" },
];

export default function CategoryList() {
    const perPage = 20;
    const totalPages = Math.ceil(categories.length / perPage);
    const [page, setPage] = useState(0);

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] py-6">
            <div className="relative bg-white mx-40 h-[370px] group">
                <h2 className="text-lg text-gray-500 mb-4 px-4 pt-4">DANH MỤC</h2>

                {/* Phần overflow-hidden chỉ bọc phần slide thôi */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{ transform: `translateX(-${page * 100}%)` }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => {
                            const start = pageIndex * perPage;
                            const pageItems = categories.slice(start, start + perPage);
                            return (
                                <div
                                    key={pageIndex}
                                    className="grid grid-cols-10 grid-rows-2 grid-flow-col flex-shrink-0 w-full"
                                >
                                    {pageItems.map((cat, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center h-[155px] p-2 border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                                        >
                                            <div className="w-16 h-16 mt-3 flex items-center justify-center rounded-full overflow-hidden bg-gray-100">
                                                <img
                                                    src={cat.img}
                                                    alt={cat.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="text-sm text-center mt-4">{cat.name}</span>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {page < totalPages - 1 && (
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                    >
                        <IoIosArrowForward size={12} />
                    </button>
                )}

                {page > 0 && (
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 transition-transform duration-200 group-hover:scale-175 hover:bg-gray-100"
                    >
                        <IoIosArrowBack size={12} />
                    </button>
                )}
            </div>
        </div>

    );
}
