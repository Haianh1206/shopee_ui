import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import pool from "../config/db";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  id: number;
  phone: string;
  email?: string;
  username?: string;
  password?: string;
}

interface MyJwtPayload extends JwtPayload {
  id: number;
}

const router = Router();

// 1. Gửi OTP (random)
router.post("/register/send-otp", async (req: Request, res: Response) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: "Số điện thoại bắt buộc" });

  const [rows] = await pool.query<User[]>(
    "SELECT * FROM users WHERE phone = ?",
    [phone]
  );

  if (rows.length > 0) return res.status(400).json({ message: "Số điện thoại đã đăng ký" });

  // tạo OTP random 6 chữ số
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await pool.query(
    "INSERT INTO otp_requests (phone, otp_code, created_at) VALUES (?, ?, NOW())",
    [phone, otp]
  );

  console.log(`OTP gửi tới ${phone}: ${otp}`);
  return res.json({ message: "OTP đã gửi", otp });
});

// 2. Xác thực OTP & tạo user
router.post("/register/verify-otp", async (req: Request, res: Response) => {
  const { phone, otp } = req.body;

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM otp_requests WHERE phone = ? ORDER BY created_at DESC LIMIT 1",
    [phone]
  );

  if (rows.length === 0 || rows[0].otp_code !== otp) {
    return res.status(400).json({ message: "OTP không hợp lệ" });
  }

  // kiểm tra nếu user chưa tồn tại
  const [existingUser] = await pool.query<User[]>(
    "SELECT * FROM users WHERE phone = ?",
    [phone]
  );

  if (existingUser.length === 0) {
    await pool.query("INSERT INTO users (phone) VALUES (?)", [phone]);
  }

  return res.json({ message: "OTP hợp lệ, vui lòng đặt mật khẩu" });
});

// 3. Đặt mật khẩu lần đầu
router.post("/set-password", async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  if (!password) return res.status(400).json({ message: "Mật khẩu không được để trống" });

  const hashed = await bcrypt.hash(password, 10);
  await pool.query("UPDATE users SET password = ? WHERE phone = ?", [hashed, phone]);

  res.json({ message: "Mật khẩu đã được đặt thành công" });
});

// 4. Đăng nhập
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Thiếu thông tin đăng nhập" });

    const [rows] = await pool.query<User[]>(
      "SELECT * FROM users WHERE phone = ? OR email = ? OR username = ? LIMIT 1",
      [username, username, username]
    );

    if (rows.length === 0) return res.status(400).json({ message: "Tài khoản không tồn tại" });

    const user = rows[0];

    if (!user.password) return res.status(400).json({ message: "Người dùng chưa đặt mật khẩu" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Sai mật khẩu" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
