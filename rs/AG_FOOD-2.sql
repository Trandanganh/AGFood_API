-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th6 23, 2024 lúc 02:22 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `AG_FOOD`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `type` varchar(80) NOT NULL,
  `shopId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `type`, `shopId`) VALUES
(1, '2', 2),
(2, '2', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `shopId` int(11) NOT NULL,
  `foodId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createDate` datetime NOT NULL,
  `image` longtext NOT NULL,
  `comment` varchar(255) NOT NULL,
  `rate` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `url` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shop`
--

CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `url` longtext DEFAULT NULL,
  `name` varchar(80) NOT NULL,
  `favorite` tinyint(1) NOT NULL DEFAULT 0,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `address` varchar(255) DEFAULT NULL,
  `rate` double NOT NULL DEFAULT 0,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `opening` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `shop`
--

INSERT INTO `shop` (`id`, `url`, `name`, `favorite`, `verified`, `address`, `rate`, `latitude`, `longitude`, `opening`) VALUES
(2, 'https://mms.img.susercontent.com/vn-11134513-7r98o-lstpx3ybgo1wb3@resize_ss640x400!@crop_w640_h400_cT', 'Gà Rán KFC - BigC Hà Nội', 0, 1, '222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội 100000, Việt Nam', 4.6, 21.0110922, 105.7861162, 0),
(3, 'https://mms.img.susercontent.com/vn-11134513-7r98o-lsv81jwma5jt69@resize_ss640x400!@crop_w640_h400_cT', 'Quán Gà Luộc Gà Rán - Gà Ủ Muối Tiêu - Ngọc Lâm', 0, 1, '222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội ', 0, NULL, NULL, 0),
(4, 'https://mms.img.susercontent.com/vn-11134513-7r98o-lsv81jwma5jt69@resize_ss640x400!@crop_w640_h400_cT', 'Quán Gà Luộc Gà Rán - Gà Ủ Muối Tiêu - Ngọc Lâm', 0, 1, '222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội ', 0, NULL, NULL, 0),
(5, 'https://mms.img.susercontent.com/vn-11134513-7r98o-lsv81jwma5jt69@resize_ss640x400!@crop_w640_h400_cT', 'Quán Gà Luộc Gà Rán - Gà Ủ Muối Tiêu - Ngọc Lâm', 0, 1, '222 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội ', 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL,
  `phone` varchar(80) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `url` longtext DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_info`
--

INSERT INTO `user_info` (`user_id`, `phone`, `email`, `name`, `password`, `url`, `address`) VALUES
(3, NULL, 'test@gmail.com.vn', NULL, NULL, NULL, NULL),
(4, NULL, 'test2@gmail.com', NULL, NULL, NULL, NULL),
(5, NULL, 'gsa@ygsaysga.cin', NULL, NULL, NULL, NULL),
(6, NULL, 'dhsgdhjs@gmial.com', NULL, NULL, NULL, NULL),
(7, NULL, 'dhsgdhjs@gmial.com', NULL, NULL, NULL, NULL),
(8, NULL, 'dhsgdhjs@gmial.com', NULL, NULL, NULL, NULL),
(9, NULL, 'ghghg@g.com', NULL, NULL, NULL, NULL),
(10, NULL, 'gfdgsf@gmail.com', NULL, NULL, NULL, NULL),
(11, '9898989', 'hghg@gmail.com', 'anh tran', 'anh tran', NULL, NULL),
(12, '1234', 'gfgf@gmail.com', 'Trần Đăng Anh', '1234', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', '78 Duy Tân, Dịch Vọng, Cầu Giấy, Hà Nội');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
