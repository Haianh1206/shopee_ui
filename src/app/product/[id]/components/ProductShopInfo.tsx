import { FC } from "react";
import { MessageCircle, Store } from "lucide-react";
const avt = "/avtshop.webp" as const;
interface ShopInfoProps {
    name: string;
    avatar: string;
    stats: {
        reviews: string;
        products: string;
        responseRate: string;
        responseTime: string;
        joined: string;
        followers: string;
    };
}

const ProductShopInfo: FC<ShopInfoProps> = ({ name, avatar, stats }) => {
    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pt-3 mt-21 sm:pt-0 sm:mt-0 pb-1">

            <div className="    xl:mx-40 ">

                <div className="bg-white p-4 md:p-2 lg:p-8  rounded-[2px] shadow-sm mb-4 flex items-center ">
                    <div className="flex items-center sm:gap-4">
                        <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                            <img
                                src={avatar}
                                alt={name}
                                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border"
                            />
                            <span
                                className="absolute bottom-4 lg:bottom-3 left-8 lg:left-[40px] -translate-x-1/2
                                    bg-orange-600 text-white text-[10px] lg:text-[12px] 
                                    px-1 py-0.5 lg:px-1.5 lg:py-1 rounded-[2px]
                                    whitespace-nowrap leading-none"
                            >
                                Yêu Thích
                            </span>
                            <div className="flex sm:hidden gap-4 mt-2 text-xs whitespace-nowrap">
                                <span>
                                    <span className="text-red-500 font-medium">11</span> Sản phẩm
                                </span>
                                <span>
                                    <span className="text-red-500 font-medium">4.9</span> Đánh giá
                                </span>
                                <span>
                                    <span className="text-red-500 font-medium">100%</span> Phản hồi Chat
                                </span>
                            </div>


                        </div>


                        <div className="mb-3  sm:border-r border-gray-200">
                            <h2 className=" text-[16px]">{name}</h2>
                            <p className="text-gray-500 text-sm">Online 3 Giờ Trước</p>
                            <div className="hidden sm:flex gap-2 mt-2 mr-6">
                                <button className="flex items-center px-4  py-1.5 whitespace-nowrap leading-none bg-red-50 border border-red-500 text-red-500 hover:opacity-80 rounded-[2px] text-sm">
                                    <MessageCircle size={14} className="mr-1" />
                                    Chat Ngay
                                </button>
                                <button className="flex items-center px-4 whitespace-nowrap leading-none text-gray-500 py-1.5 border rounded-[2px] text-sm hover hover:bg-gray-100">
                                    <Store size={14} className="mr-1" />
                                    Xem Shop
                                </button>
                            </div>
                        </div>
                        <button className="flex sm:hidden items-center ml-16 px-2 whitespace-nowrap leading-none text-red-500 py-1.5 border border-red-500 rounded-[2px] text-sm hover hover:bg-gray-100">
                            <Store size={14} className="mr-1" />
                            Xem Shop
                        </button>

                    </div>

                    <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 text-sm mb-2">

                        <div className="flex flex-row ml-6 items-center justify-between">
                            <p className="text-gray-400">Đánh Giá</p>
                            <p className="text-red-400">{stats.reviews}</p>
                        </div>


                        <div className="flex flex-row items-center justify-between">
                            <p className="text-gray-400">Tỉ Lệ Phản Hồi</p>
                            <p className="text-red-400">{stats.responseRate}</p>
                        </div>


                        <div className="flex flex-row  items-center justify-between">
                            <p className="text-gray-400">Tham Gia</p>
                            <p className="text-red-400">{stats.joined}</p>
                        </div>


                        <div className="flex flex-row ml-6 items-center justify-between">
                            <p className="text-gray-400">Sản Phẩm</p>
                            <p className="text-red-400">{stats.products}</p>
                        </div>


                        <div className="flex flex-row items-center justify-between">
                            <p className="text-gray-400">Thời Gian Phản Hồi</p>
                            <p className="text-red-400">{stats.responseTime}</p>
                        </div>


                        <div className="flex flex-row items-center justify-between">
                            <p className="text-gray-400">Người Theo Dõi</p>
                            <p className="text-red-400">{stats.followers}</p>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default ProductShopInfo;
