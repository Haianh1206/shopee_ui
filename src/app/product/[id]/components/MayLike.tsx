"use client";
import Image from "next/image";
import { products } from "@/app/data/products"

import { HiLightningBolt } from "react-icons/hi";
import { useRouter } from "next/navigation";


export default function FlashSale() {


    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-18 text-center pb-6 border-b-[4px] border-red-500">

            <div className="sm:mx-40">
                <div className="flex items-center justify-between ">
                    <h2 className="text-lg text-[16px] text-gray-500 pl-3 sm:pl-0 mb-2 pt-4 sm:pt-10">CÓ THỂ BẠN CŨNG THÍCH</h2>
                </div>

                <div className="grid grid-cols-2 px-2 sm:px-0 sm:grid-cols-5 gap-2 sm:gap-3 pb-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleClick(product.id)}
                            className="group relative flex flex-col bg-white border border-gray-200  transition-all duration-200 ">

                            <div className="relative w-full aspect-square transition-transform duration-200 group-hover:translate-y-[-1px] ">
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
                </div>
            </div>
            <div className="mx-auto text-[14px] text-gray-600 inline-block px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded">
                Login To See More
            </div>


        </div>
    );
}
