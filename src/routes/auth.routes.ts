// import { Router } from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import pool from "@/config/db";

// const router = Router();

// // 1. Gửi OTP (fake)
// router.post("/register/send-otp", async (req, res) => {
//   const { phone } = req.body;
//   if (!phone) return res.status(400).json({ message: "Số điện thoại bắt buộc" });

//   // kiểm tra số đã tồn tại
//   const [rows]: any = await pool.query("SELECT * FROM users WHERE phone = ?", [phone]);
//   if (rows.length > 0) return res.status(400).json({ message: "Số điện thoại đã đăng ký" });

//   const otp = "123456"; // fake
//   await pool.query("INSERT INTO otp_requests (phone, otp_code) VALUES (?, ?)", [phone, otp]);

//   return res.json({ message: "OTP đã gửi (fake)", otp });
// });

// // 2. Xác thực OTP & tạo user
// router.post("/register/verify-otp", async (req, res) => {
//   const { phone, otp } = req.body;

//   const [rows]: any = await pool.query(
//     "SELECT * FROM otp_requests WHERE phone = ? ORDER BY created_at DESC LIMIT 1",
//     [phone]
//   );

//   if (rows.length === 0 || rows[0].otp_code !== otp) {
//     return res.status(400).json({ message: "OTP không hợp lệ" });
//   }

//   await pool.query("INSERT INTO users (phone) VALUES (?)", [phone]);

//   return res.json({ message: "Đăng ký thành công, vui lòng đặt mật khẩu" });
// });

// // 3. Đặt mật khẩu lần đầu
// router.post("/set-password", async (req, res) => {
//   const { phone, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);

//   await pool.query("UPDATE users SET password = ? WHERE phone = ?", [hashed, phone]);

//   res.json({ message: "Mật khẩu đã được đặt thành công" });
// });

// // 4. Đăng nhập
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) return res.status(400).json({ message: "Thiếu thông tin" });

//   const [rows]: any = await pool.query(
//     "SELECT * FROM users WHERE phone = ? OR email = ? OR username = ? LIMIT 1",
//     [username, username, username]
//   );

//   if (rows.length === 0) return res.status(400).json({ message: "Tài khoản không tồn tại" });

//   const user = rows[0];
//   if (!user.password) {
//     return res.status(400).json({ message: "Tài khoản chưa đặt mật khẩu" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ message: "Sai mật khẩu" });

//   const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "1h" });

//   res.json({ message: "Đăng nhập thành công", token });
// });

// export default router;
