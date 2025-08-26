"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { categories } from "@/app/data/categories";
import { useRouter } from "next/navigation";


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
    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/product/category/${id}`);
    };
    return (
        <div className=" w-full bg-[rgba(0,0,0,0.03)] py-3 sm:py-6">
            <div className="relative bg-white sm:mx-40 h-[370px] group">
                <h2 className="hidden sm:flex text-lg text-gray-500 mb-4 px-4 pt-4">DANH MỤC</h2>
                <div className="flex sm:hidden items-center pl-3 pr-1 h-10  justify-between mb-2">
                    <h2 className="flex sm:hidden text-md text-orange-600  pt-2">DANH MỤC</h2>
                    <button className="flex items-center cursor-pointer text-gray-600 text-xs font-medium">
                        Xem thêm
                        <span className="ml-1 p-1 flex items-center justify-center">
                            <IoIosArrowForward className="text-gray" size={12} />
                        </span>
                    </button>
                </div>
                <div className="overflow-hidden">
                    <div
                        className="hidden sm:flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
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
                                    {pageItems.map((cat) => (
                                        <div
                                            key={cat.id}
                                            onClick={() => handleClick(cat.id)}
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
                    <div className="sm:hidden overflow-x-auto snap-x snap-mandatory">
                        <div className="flex w-max">
                            {Array.from({ length: Math.ceil(categories.length / 6) }).map((_, pageIndex) => {
                                const start = pageIndex * 6;
                                const pageItems = categories.slice(start, start + 6);

                                return (
                                    <div
                                        key={pageIndex}
                                        className="grid grid-cols-3 grid-rows-2 flex-none w-screen snap-start"
                                    >
                                        {pageItems.map((cat) => (
                                            <div
                                                key={cat.id}
                                                onClick={() => handleClick(cat.id)}
                                                className="flex flex-col items-center h-[155px] p-2  
                         hover:shadow-md transition-all duration-200 cursor-pointer"
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
