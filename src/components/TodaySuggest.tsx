"use client";
import Image from "next/image";

export default function FlashSale() {
    const products = Array(18).fill({
        name: "[Mẫu Mới] Son Bóng Romand The Juicy Lasting Tint Mẫu Mới, Son Tint Bóng Romand Juicy Lasting Tint 13,14, 22",
        img: "/Sale_img.jpg",
        price: "₫28.000",
        bg: "/bg_img.png",
        label: "Tìm sản phẩm tương tự",
    });

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-18 text-center pb-6 border-b-[4px] border-red-500">
            <div className="mx-40">
                <div className="bg-white text-center mb-4 border-b-[4px] border-red-500">
                    <h2 className="text-lg text-[16px] text-orange-500 mb-4 px-4 pt-4">
                        GỢI Ý HÔM NAY
                    </h2>
                </div>

                <div className="grid grid-cols-6 gap-3 px-4 pb-6">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col bg-white border border-gray-200 hover:border-red-500 transition-all duration-200"
                        >
                            {/* Ảnh */}
                            <div className="relative w-full aspect-square">
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
                            </div>

                            {/* Giá */}


                            {/* Tên sản phẩm */}
                            <div className="p-2 flex-grow">
                                <div className="text-[#555] text-[14px] text-left line-clamp-2">
                                    <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-[2px] mr-1 align-middle">
                                        Yêu thích
                                    </span>
                                    {product.name}
                                </div>
                            </div>




                            {/* Label hover ở chân sản phẩm */}
                            <div className="absolute w-[full] left-0 right-0 z-999 -bottom-[27px] bg-red-500 text-white text-center text-[12px] py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {product.label}
                            </div>
                            <div className="text-left ml-2 text-red-400 text-lg mt-2">
                                {product.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto text-[14px] text-gray-600 inline-block px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded">
                Login To See More
            </div>


        </div>
    );
}
