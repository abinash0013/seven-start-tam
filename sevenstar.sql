-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2023 at 08:43 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tambola`
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
  `game_id` varchar(100) DEFAULT NULL,
  `ticket_set` longtext DEFAULT NULL,
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

INSERT INTO `tbl_ticket` (`ticket_id`, `game_id`, `ticket_set`, `ticket_serial_number`, `ticket_number`, `ticket_amount`, `ticket_total`, `ticket_status`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'asdfasdf', 'asdfasd', '1111', NULL, '1', NULL, NULL),
(2, NULL, NULL, 'asdfasdf', 'asdfasd', '1111', NULL, '1', NULL, NULL),
(3, NULL, NULL, 'erty', 'ertyu', 'etryu', NULL, '1', NULL, NULL),
(4, NULL, NULL, 'tyu', 'tryui', 'rtyu', NULL, 'tryu', NULL, NULL),
(5, NULL, NULL, 'tyu', 'tryui', 'rtyu', NULL, '1', NULL, NULL),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, '2', '[{\"id\":1,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"111693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":79,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":33,\"line\":\"top\"},{\"status\":false,\"number\":90,\"line\":\"top\"},{\"status\":false,\"number\":96,\"line\":\"top\"},{\"status\":false,\"number\":41,\"line\":\"top\"},{\"status\":false,\"number\":3,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":73,\"line\":\"middle\"},{\"status\":false,\"number\":98,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":62,\"line\":\"middle\"},{\"status\":false,\"number\":17,\"line\":\"middle\"},{\"status\":false,\"number\":7,\"line\":\"middle\"},{\"status\":false,\"number\":33,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":31,\"line\":\"bottom\"},{\"status\":false,\"number\":78,\"line\":\"bottom\"},{\"status\":false,\"number\":3,\"line\":\"bottom\"},{\"status\":false,\"number\":81,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":29,\"line\":\"bottom\"},{\"status\":false,\"number\":15,\"line\":\"bottom\"}]},{\"id\":2,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"121693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":77,\"line\":\"top\"},{\"status\":false,\"number\":81,\"line\":\"top\"},{\"status\":false,\"number\":34,\"line\":\"top\"},{\"status\":false,\"number\":59,\"line\":\"top\"},{\"status\":false,\"number\":63,\"line\":\"top\"},{\"status\":false,\"number\":7,\"line\":\"top\"},{\"status\":false,\"number\":97,\"line\":\"top\"},{\"status\":false,\"number\":90,\"line\":\"top\"},{\"status\":false,\"number\":91,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":21,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":28,\"line\":\"middle\"},{\"status\":false,\"number\":40,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":46,\"line\":\"bottom\"},{\"status\":false,\"number\":85,\"line\":\"bottom\"},{\"status\":false,\"number\":12,\"line\":\"bottom\"},{\"status\":false,\"number\":30,\"line\":\"bottom\"},{\"status\":false,\"number\":55,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":95,\"line\":\"bottom\"},{\"status\":false,\"number\":97,\"line\":\"bottom\"},{\"status\":false,\"number\":33,\"line\":\"bottom\"},{\"status\":false,\"number\":64,\"line\":\"bottom\"}]},{\"id\":3,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"131693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":75,\"line\":\"top\"},{\"status\":false,\"number\":38,\"line\":\"top\"},{\"status\":false,\"number\":37,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":61,\"line\":\"top\"},{\"status\":false,\"number\":57,\"line\":\"top\"},{\"status\":false,\"number\":35,\"line\":\"top\"},{\"status\":false,\"number\":29,\"line\":\"middle\"},{\"status\":false,\"number\":14,\"line\":\"middle\"},{\"status\":false,\"number\":43,\"line\":\"middle\"},{\"status\":false,\"number\":30,\"line\":\"middle\"},{\"status\":false,\"number\":68,\"line\":\"middle\"},{\"status\":false,\"number\":90,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":90,\"line\":\"bottom\"},{\"status\":false,\"number\":14,\"line\":\"bottom\"},{\"status\":false,\"number\":7,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":15,\"line\":\"bottom\"},{\"status\":false,\"number\":41,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":47,\"line\":\"bottom\"}]},{\"id\":4,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"141693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":89,\"line\":\"top\"},{\"status\":false,\"number\":54,\"line\":\"top\"},{\"status\":false,\"number\":78,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":22,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":36,\"line\":\"top\"},{\"status\":false,\"number\":32,\"line\":\"middle\"},{\"status\":false,\"number\":40,\"line\":\"middle\"},{\"status\":false,\"number\":48,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":50,\"line\":\"middle\"},{\"status\":false,\"number\":5,\"line\":\"bottom\"},{\"status\":false,\"number\":87,\"line\":\"bottom\"},{\"status\":false,\"number\":7,\"line\":\"bottom\"},{\"status\":false,\"number\":64,\"line\":\"bottom\"},{\"status\":false,\"number\":19,\"line\":\"bottom\"},{\"status\":false,\"number\":33,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":65,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":33,\"line\":\"bottom\"}]},{\"id\":5,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"151693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":62,\"line\":\"top\"},{\"status\":false,\"number\":12,\"line\":\"top\"},{\"status\":false,\"number\":8,\"line\":\"top\"},{\"status\":false,\"number\":15,\"line\":\"top\"},{\"status\":false,\"number\":42,\"line\":\"top\"},{\"status\":false,\"number\":47,\"line\":\"top\"},{\"status\":false,\"number\":43,\"line\":\"top\"},{\"status\":false,\"number\":76,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":55,\"line\":\"middle\"},{\"status\":false,\"number\":9,\"line\":\"middle\"},{\"status\":false,\"number\":70,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":35,\"line\":\"middle\"},{\"status\":false,\"number\":7,\"line\":\"middle\"},{\"status\":false,\"number\":59,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":81,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":25,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":47,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":52,\"line\":\"bottom\"}]},{\"id\":6,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"161693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":26,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":50,\"line\":\"top\"},{\"status\":false,\"number\":3,\"line\":\"top\"},{\"status\":false,\"number\":82,\"line\":\"top\"},{\"status\":false,\"number\":60,\"line\":\"top\"},{\"status\":false,\"number\":75,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":72,\"line\":\"middle\"},{\"status\":false,\"number\":78,\"line\":\"middle\"},{\"status\":false,\"number\":25,\"line\":\"middle\"},{\"status\":false,\"number\":20,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":58,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":27,\"line\":\"middle\"},{\"status\":false,\"number\":56,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":79,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":1,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":78,\"line\":\"bottom\"},{\"status\":false,\"number\":41,\"line\":\"bottom\"},{\"status\":false,\"number\":16,\"line\":\"bottom\"},{\"status\":false,\"number\":54,\"line\":\"bottom\"}]},{\"id\":7,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"171693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":45,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":12,\"line\":\"top\"},{\"status\":false,\"number\":18,\"line\":\"top\"},{\"status\":false,\"number\":12,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":86,\"line\":\"top\"},{\"status\":false,\"number\":51,\"line\":\"top\"},{\"status\":false,\"number\":15,\"line\":\"top\"},{\"status\":false,\"number\":11,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":46,\"line\":\"middle\"},{\"status\":false,\"number\":66,\"line\":\"middle\"},{\"status\":false,\"number\":76,\"line\":\"middle\"},{\"status\":false,\"number\":26,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":85,\"line\":\"middle\"},{\"status\":false,\"number\":29,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":36,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":19,\"line\":\"bottom\"},{\"status\":false,\"number\":54,\"line\":\"bottom\"},{\"status\":false,\"number\":74,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":51,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"}]},{\"id\":8,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"181693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":34,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":17,\"line\":\"top\"},{\"status\":false,\"number\":70,\"line\":\"top\"},{\"status\":false,\"number\":23,\"line\":\"top\"},{\"status\":false,\"number\":35,\"line\":\"top\"},{\"status\":false,\"number\":75,\"line\":\"top\"},{\"status\":false,\"number\":38,\"line\":\"top\"},{\"status\":false,\"number\":3,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":22,\"line\":\"middle\"},{\"status\":false,\"number\":52,\"line\":\"middle\"},{\"status\":false,\"number\":80,\"line\":\"middle\"},{\"status\":false,\"number\":81,\"line\":\"middle\"},{\"status\":false,\"number\":40,\"line\":\"middle\"},{\"status\":false,\"number\":76,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":33,\"line\":\"bottom\"},{\"status\":false,\"number\":85,\"line\":\"bottom\"},{\"status\":false,\"number\":36,\"line\":\"bottom\"},{\"status\":false,\"number\":9,\"line\":\"bottom\"},{\"status\":false,\"number\":42,\"line\":\"bottom\"},{\"status\":false,\"number\":74,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":97,\"line\":\"bottom\"}]},{\"id\":9,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"191693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":58,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":7,\"line\":\"top\"},{\"status\":false,\"number\":59,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":97,\"line\":\"middle\"},{\"status\":false,\"number\":56,\"line\":\"middle\"},{\"status\":false,\"number\":86,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":15,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":9,\"line\":\"bottom\"},{\"status\":false,\"number\":28,\"line\":\"bottom\"},{\"status\":false,\"number\":2,\"line\":\"bottom\"},{\"status\":false,\"number\":93,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":87,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"}]},{\"id\":10,\"gameId\":1,\"userId\":\"\",\"userName\":\"\",\"ticketUniquieId\":\"1101693242461863\",\"bookingDateAndTime\":1693242461863,\"dateSet\":[{\"status\":false,\"number\":19,\"line\":\"top\"},{\"status\":false,\"number\":92,\"line\":\"top\"},{\"status\":false,\"number\":8,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"top\"},{\"status\":false,\"number\":85,\"line\":\"top\"},{\"status\":false,\"number\":26,\"line\":\"top\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":25,\"line\":\"middle\"},{\"status\":false,\"number\":60,\"line\":\"middle\"},{\"status\":false,\"number\":20,\"line\":\"middle\"},{\"status\":false,\"number\":89,\"line\":\"middle\"},{\"status\":false,\"number\":91,\"line\":\"middle\"},{\"status\":false,\"number\":32,\"line\":\"middle\"},{\"status\":false,\"number\":0,\"line\":\"middle\"},{\"status\":false,\"number\":93,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":84,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":44,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":0,\"line\":\"bottom\"},{\"status\":false,\"number\":32,\"line\":\"bottom\"},{\"status\":false,\"number\":92,\"line\":\"bottom\"}]}]', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
