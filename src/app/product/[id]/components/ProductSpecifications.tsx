import { FC } from "react";

interface SpecificationsProps {
    specs: { label: string; value: string }[];
    content: string[];
    hashtags?: string[];
}

const ProductSpecifications: FC<SpecificationsProps> = ({ specs, content, hashtags }) => {
    return (
        <div className="w-full bg-[rgba(0,0,0,0.03)] pb-1">

            <div className="   xl:mx-40 ">
                <div className="bg-white px-6 py-4 rounded-sm shadow-sm">
                    <h3 className="flex items-center text-lg h-12 bg-gray-100 mb-4">
                        <span className="ml-4">CHI TIẾT SẢN PHẨM</span>
                    </h3>
                    <div className="p-4 space-y-7 text-sm">

                        <div className="grid grid-cols-10 gap-x-4">
                            <span className="col-span-2 text-gray-400">Danh mục</span>
                            <span className="col-span-8 text-[#0055AA]">
                                Shopee &gt; Thời Trang Nữ &gt; Áo &gt; Áo thun
                                <span className="text-gray-900"></span>
                            </span>
                        </div>


                        <div className="grid grid-cols-10 gap-x-4">
                            <span className="col-span-2 text-gray-400">Xuất xứ</span>
                            <span className="col-span-8 font-medium">Việt Nam</span>
                        </div>


                        {specs.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-10 gap-x-4">
                                <span className="col-span-2 text-gray-400">{item.label}</span>
                                <span className="col-span-8 font-medium">{item.value}</span>
                            </div>
                        ))}


                        <div className="grid grid-cols-10 gap-x-4">
                            <span className="col-span-2 text-gray-400">Gửi từ</span>
                            <span className="col-span-8 font-medium">Thanh Hóa</span>
                        </div>
                    </div>


                </div>
                <div className="w-full">

                    <div className="bg-white px-6 py-4 space-y-2">
                        <h3 className="flex items-center text-lg h-12 bg-gray-100 mb-4">
                            <span className="ml-4">MÔ TẢ SẢN PHẨM</span>
                        </h3>
                        {content.map((line, idx) => (
                            <p key={idx} className="text-sm text-gray-800">
                                {line}
                            </p>
                        ))}


                        {hashtags && hashtags.length > 0 && (
                            <div className="flex flex-wrap pt-4 leading-6 text-[14px] text-gray-800">
                                {hashtags.map((tag, idx) => (
                                    <div
                                        key={idx}
                                        className=""
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecifications;
