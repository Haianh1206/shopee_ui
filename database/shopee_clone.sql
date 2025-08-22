
-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS shopee_clone CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE shopee_clone;

-- Tạo bảng users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(15) UNIQUE,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chèn dữ liệu mẫu vào bảng users
INSERT INTO users (phone, email, username, password)
VALUES ('0123456789', 'demo@example.com', 'demoUser', '123456');

-- Tạo bảng otp_requests
CREATE TABLE IF NOT EXISTS otp_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(20),
  otp_code VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ví dụ truy vấn dữ liệu
SELECT * FROM users;
SELECT * FROM otp_requests;

-- Hiển thị cơ sở dữ liệu và bảng
SHOW DATABASES;
SHOW TABLES;

-- Thay đổi cột password cho phép NULL
ALTER TABLE users MODIFY password VARCHAR(255) DEFAULT NULL;
