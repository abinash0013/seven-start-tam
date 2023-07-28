-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2023 at 07:20 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sevenstar`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_username` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_username`, `admin_password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '123456', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_agents`
--

CREATE TABLE `tbl_agents` (
  `agents_id` int(11) NOT NULL,
  `agents_name` varchar(255) DEFAULT NULL,
  `agents_email` varchar(255) DEFAULT NULL,
  `agents_phone` varchar(255) DEFAULT NULL,
  `agents_password` varchar(500) DEFAULT NULL,
  `agents_address` varchar(500) DEFAULT NULL,
  `agents_ticket_limit` varchar(500) DEFAULT NULL,
  `agents_gender` varchar(255) DEFAULT NULL,
  `agents_active_status` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_agents`
--

INSERT INTO `tbl_agents` (`agents_id`, `agents_name`, `agents_email`, `agents_phone`, `agents_password`, `agents_address`, `agents_ticket_limit`, `agents_gender`, `agents_active_status`, `created_at`, `updated_at`) VALUES
(1, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1', NULL, NULL),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1qw', NULL, NULL),
(3, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1', NULL, NULL),
(4, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1qw', NULL, NULL),
(5, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMMssssss', '1qw', NULL, NULL),
(6, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1qw', NULL, NULL),
(7, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1qw', NULL, NULL),
(8, 'asdfasdf', 'asdfasd', '1111', NULL, NULL, NULL, 'MMMM', '1qw', NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1qw', NULL, NULL),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1qw', NULL, NULL),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL),
(13, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'ssd', 'ssd@gmail.com', '123wewe12', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_game`
--

CREATE TABLE `tbl_game` (
  `game_id` int(11) NOT NULL,
  `game_name` varchar(255) DEFAULT NULL,
  `game_start_date` varchar(255) DEFAULT NULL,
  `game_start_time` varchar(255) DEFAULT NULL,
  `game_maximum_ticket_sell` varchar(1000) DEFAULT NULL,
  `game_amount` varchar(1000) DEFAULT NULL,
  `game_quick_fire` varchar(1000) DEFAULT NULL,
  `game_star` varchar(1000) DEFAULT NULL,
  `game_top_line` varchar(1000) DEFAULT NULL,
  `game_middle_line` varchar(1000) DEFAULT NULL,
  `game_bottom_line` varchar(1000) DEFAULT NULL,
  `game_corner` varchar(1000) DEFAULT NULL,
  `game_half_sheet` varchar(1000) DEFAULT NULL,
  `game_housefull` varchar(1000) DEFAULT NULL,
  `game_status` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_game`
--

INSERT INTO `tbl_game` (`game_id`, `game_name`, `game_start_date`, `game_start_time`, `game_maximum_ticket_sell`, `game_amount`, `game_quick_fire`, `game_star`, `game_top_line`, `game_middle_line`, `game_bottom_line`, `game_corner`, `game_half_sheet`, `game_housefull`, `game_status`, `updated_at`, `created_at`) VALUES
(1, 'asdfasdf', 'asdfasd', '1111', '1111', '1111', '1111', '1111', '1111', '1111', '1111', '1111', '1111', '1111', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ticket`
--

CREATE TABLE `tbl_ticket` (
  `ticket_id` int(11) NOT NULL,
  `ticket_serial_number` varchar(500) DEFAULT NULL,
  `ticket_number` varchar(500) DEFAULT NULL,
  `ticket_amount` varchar(500) DEFAULT NULL,
  `ticket_total` varchar(500) DEFAULT NULL,
  `ticket_status` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_ticket`
--

INSERT INTO `tbl_ticket` (`ticket_id`, `ticket_serial_number`, `ticket_number`, `ticket_amount`, `ticket_total`, `ticket_status`, `created_at`, `updated_at`) VALUES
(1, 'asdfasdf', 'asdfasd', '1111', NULL, '1', NULL, NULL),
(2, 'asdfasdf', 'asdfasd', '1111', NULL, '1', NULL, NULL),
(3, 'erty', 'ertyu', 'etryu', NULL, '1', NULL, NULL),
(4, 'tyu', 'tryui', 'rtyu', NULL, 'tryu', NULL, NULL),
(5, 'tyu', 'tryui', 'rtyu', NULL, '1', NULL, NULL),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `users_id` int(11) NOT NULL,
  `users_name` varchar(255) DEFAULT NULL,
  `users_email` varchar(255) DEFAULT NULL,
  `users_phone` varchar(255) DEFAULT NULL,
  `users_gender` varchar(255) DEFAULT NULL,
  `users_active_status` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`users_id`, `users_name`, `users_email`, `users_phone`, `users_gender`, `users_active_status`, `created_at`, `updated_at`) VALUES
(1, 'name', 'email', 'phone', 'gender', NULL, 'jk', 'jkj'),
(2, 'jk', 'jk', 'jkjk', 'jk', NULL, 'jk', 'jk'),
(3, 'Abinash', 'abinash@gmail.com', '123456789', 'Male', NULL, 'now()', NULL),
(4, 'Amar', 'abinash@gmail.com', '123456789', 'Male', NULL, NULL, NULL),
(5, 'asdfasdf', 'asdfasd', '1111', 'MMMMssssss', NULL, NULL, NULL),
(6, 'Amar', 'abinash@gmail.com', '123456789', 'Male', '1', NULL, NULL),
(7, 'Amar', 'abinash@gmail.com', '123456789', 'Male', NULL, NULL, NULL),
(8, 'Amar', 'abinash@gmail.com', '123456789', 'Male', NULL, NULL, NULL),
(9, 'Amar', 'abinash@gmail.com', '123456789', 'Male', NULL, NULL, NULL),
(10, 'new user', 'newuser@gmail.com', '1234567890', 'male', '1', NULL, NULL),
(11, 'abinashtestweb', 'abinash@gmail.com', '1234567890', NULL, NULL, NULL, NULL),
(12, 'abinashtestweb', 'abi@gmail.Com', '21234567890', NULL, NULL, NULL, NULL),
(13, 'abinashtestweb', 'abi@gmail.Com', '21234567890', NULL, NULL, NULL, NULL),
(14, 'abinashtestweb', 'abi@gmail.Com', '21234567890', NULL, NULL, NULL, NULL),
(15, 'abinashtestweb', 'abi@gmail.Com', '21234567890', NULL, NULL, NULL, NULL),
(16, 'abinashtestweb', 'abi@gmail.Com', '21234567890', NULL, NULL, NULL, NULL),
(17, 'erty', 'rtyu', '1234567890as', NULL, NULL, NULL, NULL),
(18, 'test', 'test@gmail.com', '123wer', NULL, NULL, NULL, NULL),
(19, 'test', 'test@gmail.com', '123wer', NULL, NULL, NULL, NULL),
(20, 'test', 'test@gmail.com', '123wer', NULL, NULL, NULL, NULL),
(21, 'test', 'test@gmail.com', '123wer', NULL, NULL, NULL, NULL),
(22, 'testuser', 'test@gmail.com', 'werw23', NULL, NULL, NULL, NULL),
(23, 'new user', 'newuser@gmail.com', '1234567890', 'male', NULL, NULL, NULL),
(24, 'erty', 'ert@gmail.com', '4657', 'hjgf', NULL, NULL, NULL),
(25, 'tea', 'adfasd', 'dfasd', 'adsf', '11', NULL, NULL),
(26, 'etryui', 'TYUI', 'TUYI', 'YTU', NULL, NULL, NULL),
(27, 'etryui', 'TYUI', 'TUYI', 'YTU', NULL, NULL, NULL),
(28, 'QWEewre', 'wqq', 'qwwq', 'qwqw', NULL, NULL, NULL),
(29, 'qwerqwQW', 'qw', 'qw', 'qw', NULL, NULL, NULL),
(30, 'ytyttyyt', 'TYYT', 'TYTY', 'TYTY', NULL, NULL, NULL),
(31, 'YU', 'yu', 'yu', 'yu', NULL, NULL, NULL),
(32, 'tTtT', 't', 't', 't', NULL, NULL, NULL),
(33, 'ew', 'ew', 'we', 'we', NULL, NULL, NULL),
(34, 't', 't', 't', 't', NULL, NULL, NULL),
(35, 'qqw', 't', 't', 't', NULL, NULL, NULL),
(36, '1', '1', '1', '1', NULL, NULL, NULL),
(37, 'qqw', 'q', 'qwqqq1', 'q', NULL, NULL, NULL),
(38, 'qqw', 'q', 'qwqqq1', 'q', NULL, NULL, NULL),
(39, 'testing', 'testing@gmail.com', '12', '2321', NULL, NULL, NULL),
(40, 'amit', 'amit@gmail.com', '234589', 'male', '1', NULL, NULL),
(41, '21', '21', '21', 'Select Gender', NULL, NULL, NULL),
(42, 'amit kumar', 'amit@gmail.com', '2345675346', 'Male', NULL, NULL, NULL),
(43, '12', 'a', 'a', 'Male', NULL, NULL, NULL),
(44, '12', 'a', 'a', 'Male', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_agents`
--
ALTER TABLE `tbl_agents`
  ADD PRIMARY KEY (`agents_id`);

--
-- Indexes for table `tbl_game`
--
ALTER TABLE `tbl_game`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `tbl_ticket`
--
ALTER TABLE `tbl_ticket`
  ADD PRIMARY KEY (`ticket_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_agents`
--
ALTER TABLE `tbl_agents`
  MODIFY `agents_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_game`
--
ALTER TABLE `tbl_game`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_ticket`
--
ALTER TABLE `tbl_ticket`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
