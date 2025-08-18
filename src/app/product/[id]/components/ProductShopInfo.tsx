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
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-1">

            <div className="    mx-40 ">

                <div className="bg-white p-8 rounded-[2px] shadow-sm mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24">
                            <img
                                src={avatar}
                                alt={name}
                                className="w-20 h-20 rounded-full object-cover border"
                            />
                            <span
                                className="absolute bottom-3 left-[40px] -translate-x-1/2
               bg-orange-600 text-white text-[12px] 
               px-1.5 py-1 rounded-[2px]
               whitespace-nowrap leading-none"
                            >
                                Yêu Thích
                            </span>
                        </div>


                        <div className="mb-3  border-r border-gray-200">
                            <h2 className=" text-[16px]">{name}</h2>
                            <p className="text-gray-500 text-sm">Online 3 Giờ Trước</p>
                            <div className="flex gap-2 mt-2 mr-6">
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
                    </div>

                    <div className="grid grid-cols-3 flex   mb-2 text-sm ">
                        <div className="flex flex-col items-center gap-y-4 -ml-16 gap-2">
                            <div className="flex gap-16 ">
                                <p className="text-gray-400 ">Đánh Giá</p>
                                <p className=" text-red-400 mr-6">{stats.reviews}</p>
                            </div>
                            <div className="flex gap-16">
                                <p className="text-gray-400 ">Sản Phẩm</p>
                                <p className=" text-red-400 mr-6">{stats.products}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-y-4 gap-2 ">
                            <div className="flex gap-27">
                                <p className="text-gray-400">Tỉ Lệ Phản Hồi</p>
                                <p className=" text-red-400 ">{stats.responseRate}</p>
                            </div>
                            <div className="flex gap-7">
                                <p className="text-gray-400">Thời Gian Phản Hồi</p>
                                <p className=" text-red-400 ">{stats.responseTime}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-y-4 gap-2">
                            <div className="flex gap-9">
                                <p className="text-gray-400">Tham Gia</p>
                                <p className=" text-red-400">{stats.joined}</p>
                            </div>
                            <div className="flex gap-16">
                                <p className="text-gray-400">Người Theo Dõi</p>
                                <p className=" text-red-400">{stats.followers}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductShopInfo;
