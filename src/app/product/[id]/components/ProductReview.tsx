"use client";
import { FaStar, FaRegStar, } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useRef, useState } from "react";
import { Pagination } from "./Pagination";

const filters = [
    "Tất Cả",
    "5 Sao (9)",
    "4 Sao (3)",
    "3 Sao (3)",
    "2 Sao (2)",
    "1 Sao (3)",
    "Có Bình Luận (3)",
    "Có Hình Ảnh / Video (0)",

];

const reviews = [
    {
        id: 1,
        user: "nhudiem027",
        avatar: null,
        rating: 5,
        date: "2025-07-31 10:35",
        type: "Đen, Quốc Tế: Free Size",
        content: "Chất liệu: vải mềm\nMàu sắc: đen",
    },
    {
        id: 2,
        user: "tuqdj_2b4n",
        avatar: "/user1.jpg",
        rating: 5,
        date: "2025-08-01 13:53",
        type: "Trắng, Quốc Tế: Free Size",
        content:
            "Sản phẩm khá được so với giá, chất lượng mình sẽ mua lại ở shop nhé (mang tc nhận xu)",
    },
    {
        id: 3,
        user: "anhtester",
        avatar: null,
        rating: 3,
        date: "2025-08-02 09:12",
        type: "Đỏ, Quốc Tế: Free Size",
        content: "Chất lượng tạm ổn, giao hàng hơi chậm.",
    },
    {
        id: 4,
        user: "quynhng",
        avatar: null,
        rating: 4,
        date: "2025-08-03 20:21",
        type: "Xanh, Quốc Tế: Free Size",
        content: "Áo đẹp, vải thoáng, sẽ ủng hộ lần sau.",
    },
    {
        id: 5,
        user: "hoang_92",
        avatar: null,
        rating: 2,
        date: "2025-08-04 18:00",
        type: "Đen, Quốc Tế: Free Size",
        content: "Vải không giống mô tả, hơi thất vọng.",
    },
    {
        id: 6,
        user: "linhpham",
        avatar: "/user2.jpg",
        rating: 5,
        date: "2025-08-05 14:22",
        type: "Trắng, Quốc Tế: Free Size",
        content: "Shop gói hàng cẩn thận, giao nhanh.",
    },
    {
        id: 7,
        user: "khoa_it",
        avatar: null,
        rating: 4,
        date: "2025-08-06 12:10",
        type: "Xanh, Quốc Tế: Free Size",
        content: "Áo vừa size, mặc thoải mái.",
    },
    {
        id: 8,
        user: "huyennt",
        avatar: null,
        rating: 1,
        date: "2025-08-07 22:47",
        type: "Đỏ, Quốc Tế: Free Size",
        content: "Sản phẩm lỗi, đường may xấu.",
    },
    {
        id: 9,
        user: "phatng",
        avatar: "/user3.jpg",
        rating: 5,
        date: "2025-08-08 16:35",
        type: "Đen, Quốc Tế: Free Size",
        content: "Mua cho bạn gái, cô ấy rất thích.",
    },
    {
        id: 10,
        user: "tramy",
        avatar: null,
        rating: 3,
        date: "2025-08-09 19:50",
        type: "Trắng, Quốc Tế: Free Size",
        content: "Áo ổn so với giá tiền, sẽ cân nhắc mua lại.",
    },
];

export default function ProductReviews() {
    const [activeFilter, setActiveFilter] = useState("Tất Cả");
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    const topRef = useRef<HTMLDivElement | null>(null);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const paginatedReviews = reviews.slice(
        startIndex,
        startIndex + reviewsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-1 pt-4" >
            <div className=" mx-40 bg-white" ref={topRef}>
                <h3 className="flex items-center text-lg h-12 mb-4">
                    <span className="ml-4">MÔ TẢ SẢN PHẨM</span>
                </h3>

                <div className="flex items-center border h-[145px] bg-[#FFFBF8] rounded-[2px] p-6 mx-6 mb-6 " >
                    <div>
                        <span className=" ml-6 text-4xl  text-red-500">4</span>
                        <span className="ml-2 text-[20px] text-red-500">trên 5</span>
                        <div className="flex items-center mt-2 gap-1">
                            {Array.from({ length: 5 }).map((_, i) =>
                                i < 4 ? (

                                    <FaStar key={i} className="w-6 h-6 text-red-500" />
                                ) : (

                                    <FaRegStar
                                        key={i}
                                        className="w-6 h-6 text-transparent"
                                        style={{ stroke: "red", strokeWidth: 20 }}
                                    />
                                )
                            )}
                        </div>
                    </div>


                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mt-4 ml-10">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-4 py-1 text-sm border transition ${activeFilter === f
                                    ? "bg-white w-24 text-red-500 border-red-500"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Review List */}
                <div className="space-y-6 mx-6">
                    {paginatedReviews.map((r) => (
                        <div key={r.id} className="border-b pl-6 pb-4">
                            <div className="flex gap-3">
                                {/* Avatar */}
                                {r.avatar ? (
                                    <img
                                        src={r.avatar}
                                        alt={r.user}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        U
                                    </div>
                                )}

                                {/* Nội dung bên phải */}
                                <div className="flex-1">
                                    {/* User */}
                                    <p className="text-[12px]">{r.user}</p>

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`${i < r.rating ? "text-red-400" : "text-gray-300"
                                                    } w-4 h-4`}
                                            />
                                        ))}
                                    </div>

                                    {/* Date */}
                                    <p className="text-xs text-gray-500 mb-2">
                                        {r.date} | {r.type}
                                    </p>

                                    {/* Content */}
                                    <p className="text-gray-700 whitespace-pre-line">{r.content}</p>

                                    {/* Helpful Button */}
                                    <button className="mt-2 text-sm text-gray-400 flex items-center w-full hover:text-red-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 14 13"
                                            fill="currentColor"
                                            width={14}
                                        >
                                            <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z" />
                                        </svg>
                                        <span className="ml-1">Hữu ích?</span>
                                        <HiOutlineDotsVertical className="ml-auto text-gray-400 w-5 h-5 cursor-pointer" />
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}
