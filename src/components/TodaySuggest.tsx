"use client";
import Image from "next/image";
import { products } from "@/app/data/products"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { HiLightningBolt } from "react-icons/hi";
import { useRouter } from "next/navigation";


export default function FlashSale() {


    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] sm:pb-18 text-center pb-6 sm:border-b-[4px] border-red-500">
            <div className="xl:mx-40 sm:bg-transparent">
                <div className="hidden sm:flex justify-center bg-white mb-4 border-b-[4px] border-red-500">
                    <h2 className="text-lg text-orange-500 mb-4 px-4 pt-4">
                        GỢI Ý HÔM NAY
                    </h2>
                </div>

                <div className="flex sm:hidden bg-white items-center pl-3 pr-1 h-10 pb-4 pt-2 
                justify-between ">
                    <h2 className="text-md text-orange-600 pt-2">GỢI Ý HÔM NAY</h2>

                    <button className="flex items-center cursor-pointer text-gray-600 text-xs font-medium md:hidden">
                        Xem thêm
                        <span className="ml-1 p-1 flex items-center justify-center">
                            <IoIosArrowForward className="text-gray" size={12} />
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:px-1 xl:px-2 sm:px-4 pb-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleClick(product.id)}
                            className="group relative flex flex-col bg-white border border-gray-200 hover:border-red-500 transition-all duration-200 ">

                            <div className="relative w-full aspect-square  ">
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





                            <div className="absolute w-[full] left-0 right-0 z-999 -bottom-[33px] text-[14px] bg-orange-600 text-white text-center text-[12px] py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {product.label}
                            </div>
                            <div className="flex items-center space-x-1">
                                <HiLightningBolt style={{ borderRightWidth: "3px" }} className="text-red-500 ml-2 border border-red-500 w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-y-[-1px]" />
                                <span className="bg-red-300 -ml-1 text-white text-[10px] px-1.5 py-0.5 transition-transform duration-200 group-hover:translate-y-[-1px] ">
                                    {product.status}
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
