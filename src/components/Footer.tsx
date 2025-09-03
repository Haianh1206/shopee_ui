import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" bg-[rgba(0,0,0,0.01)] sm:mt-10">
            <div className=" hidden sm:grid max-w-7xl md:mx-2 xl:mx-42 py-10 grid grid-cols-5 gap-6 border-b border-gray-200 text-sm text-gray-700">
                <div>
                    <h3 className="font-bold mb-3 text-[12px] uppercase">Dịch Vụ Khách Hàng</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Trung Tâm Trợ Giúp Shopee</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Shopee Blog</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Shopee Mall</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Hướng Dẫn Mua Hàng/Đặt Hàng</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Hướng Dẫn Bán Hàng</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Ví ShopeePay</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Shopee Xu</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Đơn Hàng</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Trả Hàng/Hoàn Tiền</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Liên Hệ Shopee</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Chính Sách Bảo Hành</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-[12px] mb-3 uppercase">Shopee Việt Nam</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Về Shopee</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Tuyển Dụng</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Điều Khoản Shopee</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Chính Sách Bảo Mật</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Shopee Mall</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Kênh Người Bán</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Flash Sale</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Tiếp Thị Liên Kết</li>
                        <li className="hover:text-red-500 text-[#000000A6] text-[12px] cursor-pointer">Liên Hệ Truyền Thông</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-[12px] mb-3 uppercase">Thanh Toán</h3>
                    <div className="flex flex-wrap gap-2">
                        <img src="/visa.png" alt="Visa" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/mastercard.png" alt="Mastercard" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/jcb.png" alt="JCB" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/amex.png" alt="Amex" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/cod.png" alt="COD" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/installment.png" alt="Installment" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/ShopeePay.png" alt="ShopeePay" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/ShopeePayLater.png" alt="ShopeePayLater" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />


                    </div>
                    <h3 className="font-bold text-[12px] mt-6 mb-6 uppercase">Đơn Vị Vận Chuyển</h3>
                    <div className="flex flex-wrap gap-2">
                        <img src="/spx.png" alt="SPX" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/viettel.png" alt="Viettel" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/VietnamPost.png" alt="Vietnam Post" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/vtpost.png" alt="Viettel" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />

                        <img src="/jtexpress.png" alt="J&T Express" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/grab.png" alt="GrabExpress" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/ninjavan.png" alt="Ninja Van" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/be.png" alt="Be" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                        <img src="/ahamove.png" alt="Ahamove" className="border border-gray-100 h-6.5 shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-[12px] mb-3 uppercase">Theo Dõi Shopee</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#000000A6] text-[12px] hover:text-red-500 cursor-pointer">
                            <FaFacebook size={16} color="black" />Facebook
                        </li>
                        <li className="flex items-center gap-2 text-[#000000A6] text-[12px] hover:text-red-500 cursor-pointer">
                            <FaInstagram size={16} color="black" /> Instagram
                        </li>
                        <li className="flex items-center gap-2 text-[#000000A6] text-[12px] hover:text-red-500 cursor-pointer">
                            <FaLinkedinIn size={16} color="black" /> LinkedIn
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-[12px] mb-3 uppercase">Tải Ứng Dụng Shopee</h3>
                    <div className="flex gap-3">
                        <img src="/QR_CODE.png" alt="QR" className="w-23 h-23 p-1 border border-gray-200" />
                        <div className="flex flex-col gap-2">
                            <img src="/appstore.png" alt="App Store" className="border border-gray-100 w-[76px] h-[24px] shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                            <img src="/google_play.png" alt="Google Play" className="border border-gray-100 w-[76px] h-[24px] shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />
                            <img src="/AppGallery.png" alt="App Gallery" className="border border-gray-100 w-[76px] h-[24px] shadow-[0_2px_4px_rgba(128,128,128,0.4)]" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex py-10  xl:px-42 text-[#0000008A] text-[14px] flex flex-wrap justify-between items-center">
                <div>© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>
                <div className=" flex flex-wrap items-center">
                    <span className="text-[#0000008A] text-[14px]">Quốc gia &amp; Khu vực:</span>
                    <span className="text-[#0000008A] text-[14px] cursor-pointer ml-2">Singapore</span>
                    <span className="mx-0.5">|</span>
                    <span className="text-[#0000008A] text-[14px] cursor-pointer">Indonesia</span>
                    <span className="mx-0.5">|</span>
                    <span className="text-[#0000008A] text-[14px] cursor-pointer">Thái Lan</span>
                    <span className="mx-0.5">|</span>
                    <span className="text-[#0000008A] text-[14px] cursor-pointer">Malaysia</span>
                    <span className="mx-0.5">|</span>
                    <span className="text-[#0000008A] text-[14px] cursor-pointer">Việt Nam</span>
                    <span className="hidden lg:flex mx-0.5">|</span>
                    <span className="hidden lg:flex text-[#0000008A] text-[14px] cursor-pointer">Philippines</span>
                    <span className="hidden lg:flex mx-0.5">|</span>
                    <span className="hidden lg:flex text-[#0000008A] text-[14px] cursor-pointer">Brazil</span>
                    <span className="hidden lg:flex mx-0.5">|</span>
                    <span className="hidden lg:flex text-[#0000008A] text-[14px] cursor-pointer">México</span>
                    <span className="hidden xl:flex mx-0.5">|</span>
                    <span className="hidden xl:flex text-[#0000008A] text-[14px] cursor-pointer">Colombia</span>
                    <span className="hidden xl:flex mx-0.5">|</span>
                    <span className="hidden xl:flex text-[#0000008A] text-[14px] cursor-pointer">Chile</span>
                    <span className="hidden xl:flex mx-0.5">|</span>
                    <span className="hidden xl:flex text-[#0000008A] text-[14px] cursor-pointer">Đài Loan</span>
                </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.03)] text-center text-xs text-gray-600 py-5 sm:pb-10">

                <div className="sm:hidden grid grid-cols-2 py-2 border-b border-gray-300 gap-y-2 gap-x-4 text-gray-500 text-center bg-white mt-6 mb-8 px-4">
                    <div className="flex items-center justify-center space-x-2">
                        <FaLock className="text-gray-400 text-sm" />
                        <span className="cursor-pointer text-gray-400 text-[10px]">CHÍNH SÁCH BẢO MẬT</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <FaBook className="text-gray-400 text-sm" />
                        <span className="cursor-pointer text-gray-400 text-[10px]">QUY CHẾ HOẠT ĐỘNG</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <FaTruck className="text-gray-400 text-sm" />
                        <span className="cursor-pointer text-gray-400 text-[10px]">CHÍNH SÁCH VẬN CHUYỂN</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <FaBullhorn className="text-gray-400 " size={24} />
                        <span className="cursor-pointer text-gray-400 text-[10px]">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
                    </div>
                </div>


                <div className="hidden sm:flex text-gray-500 justify-center space-x-6 mt-6 mb-8">
                    <span className=" cursor-pointer">CHÍNH SÁCH BẢO MẬT</span><span className="text-gray-300">|</span>
                    <span className=" cursor-pointer">QUY CHẾ HOẠT ĐỘNG</span>   <span className="text-gray-300">|</span>
                    <span className=" cursor-pointer">CHÍNH SÁCH VẬN CHUYỂN</span><span className="text-gray-300">|</span>
                    <span className=" cursor-pointer">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
                </div>
                <div className="flex sm:hidden grid grid-cols-2 justify-center items-center sm:gap-4 mb-4">
                    <img src="/logoCCDV.png" alt="Đã đăng ký 1" className="h-10 mx-auto" />
                    <img src="/logoCCDV.png" alt="Đã đăng ký 2" className="h-10 mx-auto" />
                    <div className="col-span-2 sm:col-span-1 flex justify-center mt-2 sm:mt-0">
                        <Image
                            src="/logovantay.png"
                            alt="logo"
                            width={70}
                            height={120}
                            className="sm:w-[50px] sm:h-[90px]"
                            priority
                        />
                    </div>
                </div>
                <div className="text-[10px] text-black sm:text-[12px] sm:text-gray-600">
                    <div className="mb-5">Công ty TNHH Shopee</div>
                    <div className="max-w-6xl mx-auto mb-1">
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh,
                        Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee
                        (miễn phí) hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp
                    </div>
                    <div className="mb-2">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</div>
                    <div className="mb-2">
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
                        10/02/2015
                    </div>
                    <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div></div>
            </div>
        </footer>
    );
}
