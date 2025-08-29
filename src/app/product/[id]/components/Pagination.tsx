import { useEffect, useRef, useState } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-6 pb-6">
            <nav className="flex items-center space-x-8">

                <button
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-1 text-gray-500 hover:text-black disabled:opacity-40`}
                >
                    &lt;
                </button>


                {pages.map((p) => (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        className={`w-10 h-8 text-[20px] flex items-center justify-center rounded ${p === currentPage
                            ? "bg-red-500 text-white font-medium"
                            : "text-gray-400 hover:bg-gray-200"
                            }`}
                    >
                        {p}
                    </button>
                ))}


                <button
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-1 text-gray-500 hover:text-black disabled:opacity-40`}
                >
                    &gt;
                </button>
            </nav>
        </div>
    );
}
