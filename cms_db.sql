-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2024 at 09:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_group`
--

INSERT INTO `auth_group` (`id`, `name`) VALUES
(1, 'accountant'),
(5, 'admin'),
(4, 'member'),
(2, 'pastor'),
(3, 'secretary');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add announcement', 7, 'add_announcement'),
(26, 'Can change announcement', 7, 'change_announcement'),
(27, 'Can delete announcement', 7, 'delete_announcement'),
(28, 'Can view announcement', 7, 'view_announcement'),
(29, 'Can add donation', 8, 'add_donation'),
(30, 'Can change donation', 8, 'change_donation'),
(31, 'Can delete donation', 8, 'delete_donation'),
(32, 'Can view donation', 8, 'view_donation'),
(33, 'Can add event', 9, 'add_event'),
(34, 'Can change event', 9, 'change_event'),
(35, 'Can delete event', 9, 'delete_event'),
(36, 'Can view event', 9, 'view_event'),
(37, 'Can add service', 10, 'add_service'),
(38, 'Can change service', 10, 'change_service'),
(39, 'Can delete service', 10, 'delete_service'),
(40, 'Can view service', 10, 'view_service'),
(41, 'Can add service request', 11, 'add_servicerequest'),
(42, 'Can change service request', 11, 'change_servicerequest'),
(43, 'Can delete service request', 11, 'delete_servicerequest'),
(44, 'Can view service request', 11, 'view_servicerequest'),
(45, 'Can add budget', 12, 'add_budget'),
(46, 'Can change budget', 12, 'change_budget'),
(47, 'Can delete budget', 12, 'delete_budget'),
(48, 'Can view budget', 12, 'view_budget'),
(49, 'Can add expense', 13, 'add_expense'),
(50, 'Can change expense', 13, 'change_expense'),
(51, 'Can delete expense', 13, 'delete_expense'),
(52, 'Can view expense', 13, 'view_expense'),
(53, 'Can add financial report', 14, 'add_financialreport'),
(54, 'Can change financial report', 14, 'change_financialreport'),
(55, 'Can delete financial report', 14, 'delete_financialreport'),
(56, 'Can view financial report', 14, 'view_financialreport'),
(57, 'Can add income', 15, 'add_income'),
(58, 'Can change income', 15, 'change_income'),
(59, 'Can delete income', 15, 'delete_income'),
(60, 'Can view income', 15, 'view_income'),
(61, 'Can add blacklisted token', 16, 'add_blacklistedtoken'),
(62, 'Can change blacklisted token', 16, 'change_blacklistedtoken'),
(63, 'Can delete blacklisted token', 16, 'delete_blacklistedtoken'),
(64, 'Can view blacklisted token', 16, 'view_blacklistedtoken'),
(65, 'Can add outstanding token', 17, 'add_outstandingtoken'),
(66, 'Can change outstanding token', 17, 'change_outstandingtoken'),
(67, 'Can delete outstanding token', 17, 'delete_outstandingtoken'),
(68, 'Can view outstanding token', 17, 'view_outstandingtoken');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$720000$LLEH5yLceOIQdeMZ1BwTVh$mIi9CcMA+eFakTpadWtGhb82Aat0b3PvGP0He4AG3MU=', '2024-07-05 20:59:54.489704', 1, 'programmer', 'Denis', 'Taganya', 'denisjuma422@gmail.com', 1, 1, '2024-04-28 12:14:03.000000'),
(3, 'pbkdf2_sha256$720000$bfeV7mLDOoFZZySbPqIq5T$OFrdS91GeNLIg62hdqVsxrkn6BtxuDtqgEqpYakvL84=', NULL, 0, 'debruin@gmail.com', 'debruin', 'underson', 'debruin@gmail.com', 0, 0, '2024-05-11 09:31:45.534361'),
(22, 'pbkdf2_sha256$720000$5ZeGXvvrKC2Umbu0cujBqJ$Sc6kzZDrFrJG4psYnHU1LXkAHb2qog337ORRmc6lZec=', NULL, 0, 'musahalaja7@gmail.com', 'Mussa', 'Halaja', 'denisjuma1@gmail.com', 0, 1, '2024-05-12 01:20:50.672471'),
(32, 'pbkdf2_sha256$720000$7XGf2VwVpnpcc68dmgtav9$avZBaf15dbqw04s2yKF652wc0kqzFdEV4HLfjTVPll8=', NULL, 0, 'elizah@gmail.com', 'Elizah', 'Juma', 'elizah@gmail.com', 1, 1, '2024-05-26 12:22:07.939950'),
(33, 'pbkdf2_sha256$720000$ZHJXnqmz7T1F2RZUoxQBOt$pGbJ53rQCnmuPSWxNV9B8se4lRPNjziXukq0ZKHr+HM=', NULL, 0, 'bety@gmail.com', 'Bety', 'Juma', 'bety@gmail.com', 0, 1, '2024-05-26 15:40:36.000000'),
(35, 'pbkdf2_sha256$720000$ySj66MclmDQIwgQG4sjm0A$LOquZVlanS5w8cf67HGLQ9IXEHz5E5wGCeffYvtJNr8=', NULL, 0, 'joshua@gmail.com', 'Joshua', 'Juma', 'joshua@gmail.com', 0, 1, '2024-05-26 17:16:23.468317'),
(38, 'pbkdf2_sha256$720000$qsJRtnkoGtN9Rw7Z2gN0Tc$tKQc8vVjW2u3GkP+pIOPGOO+ZzHWSBTcGBYCnwIkpqM=', NULL, 0, 'hamadi@gmail.com', 'Hamadi', 'Kibindoni', 'hamadi@gmail.com', 0, 1, '2024-07-05 02:09:54.247908');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user_groups`
--

INSERT INTO `auth_user_groups` (`id`, `user_id`, `group_id`) VALUES
(29, 1, 5),
(18, 22, 4),
(30, 32, 3),
(31, 33, 1),
(34, 35, 2),
(38, 38, 4);

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cmsapp_announcement`
--

CREATE TABLE `cmsapp_announcement` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `author` varchar(255) NOT NULL,
  `publication_date` date NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `category` varchar(100) NOT NULL,
  `priority_level` varchar(50) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cmsapp_announcement`
--

INSERT INTO `cmsapp_announcement` (`id`, `title`, `content`, `author`, `publication_date`, `image`, `expiration_date`, `category`, `priority_level`, `created_at`, `updated_at`) VALUES
(1, 'Join Us for Sabbath Worship!', 'Dear Church Family,\r\n\r\nWe are excited to invite you to join us for Sabbath worship this coming [Day, Date]. As Seventh-day Adventists, we cherish the Sabbath as a special day of rest, worship, and fellowship with our Creator.\r\n\r\nSchedule:\r\n\r\nSabbath School: 9:30 AM - Join us as we study God\'s Word together in various Sabbath School classes tailored to different age groups and interests.\r\nDivine Worship Service: 11:00 AM - Experience the joy of worshiping together as we lift our voices in praise and hear an inspiring message from God\'s Word.\r\nFellowship Lunch: 12:30 PM - Following the worship service, please join us for a delicious fellowship lunch. Feel free to bring a dish to share if you are able.\r\nAfternoon Program: 2:00 PM - Stay for an engaging afternoon program, including music, testimonies, and special presentations.', 'pastor John', '2024-04-29', 'image_2.jpg', '2024-04-30', 'Worship', 'high', '2024-04-29 12:13:48.250985', '2024-04-29 12:13:48.250985'),
(2, 'Church Picnic Announcement', 'Dear Church Family,\r\n\r\nWe\'re excited to announce our upcoming church picnic on [date]. It\'s going to be a wonderful day filled with fellowship, fun activities, and delicious food.\r\n\r\n\r\n\r\nWe\'ll have games for all ages, including sack races, volleyball, and a water balloon toss. Plus, we\'ll have a barbecue with hot dogs, hamburgers, and vegetarian options.\r\n\r\nPlease bring a side dish or dessert to share, as well as your own chairs or blankets. Don\'t forget sunscreen and hats to protect yourself from the sun.\r\n\r\nThis event is open to everyone, so feel free to invite your friends and neighbors to join us for a day of community and celebration.\r\n\r\nWe look forward to seeing you there!', 'Pst John', '2024-04-01', '', '2024-04-09', 'Picnic', 'medium', '2024-04-30 16:19:26.674191', '2024-06-27 14:02:37.229727'),
(3, 'Special Worship Service Announcemen', 'Dear Brothers and Sisters,\r\n\r\nWe\'re excited to invite you to a special worship service next Sabbath, [date], as we celebrate [occasion]. It\'s going to be a time of joyful praise, heartfelt worship, and spiritual renewal.\r\n\r\nOur guest speaker, [Speaker Name], will be sharing a powerful message on [theme]. We\'ll also have uplifting music led by our worship team and opportunities for prayer and reflection.\r\n\r\nAfter the service, please join us for a fellowship meal in the church hall. It\'s a wonderful opportunity to connect with one another and build deeper relationships within our church family.\r\n\r\nWe encourage you to invite your friends, neighbors, and colleagues to join us for this special occasion. Let\'s come together to worship God and be inspired by His Word.\r\n\r\nSee you there!', 'Pst. Joshua', '2024-04-30', '', '2024-04-02', 'announcement', 'low', '2024-04-30 16:22:31.456763', '2024-06-27 13:28:08.157106');

-- --------------------------------------------------------

--
-- Table structure for table `cmsapp_donation`
--

CREATE TABLE `cmsapp_donation` (
  `id` bigint(20) NOT NULL,
  `donor` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `contact_info` longtext NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cmsapp_donation`
--

INSERT INTO `cmsapp_donation` (`id`, `donor`, `amount`, `date`, `description`, `contact_info`, `status`, `created_at`, `updated_at`) VALUES
(1, 'denis', '20000.00', '2024-07-02', 'Paying church electric bill', '0753227730', 'pending', '0000-00-00 00:00:00.000000', '2024-07-05 15:51:24.715078'),
(2, 'denis', '20000.00', '2024-07-02', 'Build church', '0758646487', 'pending', '0000-00-00 00:00:00.000000', '2024-07-05 16:40:49.245960');

-- --------------------------------------------------------

--
-- Table structure for table `cmsapp_event`
--

CREATE TABLE `cmsapp_event` (
  `id` bigint(20) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `end_date` datetime(6) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `organizer` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `registration_deadline` datetime(6) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cmsapp_event`
--

INSERT INTO `cmsapp_event` (`id`, `Title`, `description`, `start_date`, `end_date`, `image`, `location`, `organizer`, `category`, `registration_deadline`, `created_at`, `updated_at`) VALUES
(1, 'Health Expo & Community Outreach', 'Dear Church Family and Community Members,\r\n\r\nWe are excited to announce our upcoming Health Expo & Community Outreach event, where we will come together to promote holistic health and wellness in body, mind, and spirit.\r\n\r\nEvent Highlights:\r\n\r\nHealth Screenings: Take advantage of free health screenings including blood pressure checks, cholesterol tests, and blood sugar assessments. Our team of healthcare professionals will be available to provide personalized health advice and resources.\r\nHealthy Living Workshops: Join interactive workshops on topics such as nutrition, stress management, exercise, and mental health. Learn practical tips for living a balanced and vibrant life.\r\nCooking Demonstrations: Discover delicious and nutritious plant-based recipes through live cooking demonstrations. Sample healthy snacks and meals that nourish the body and delight the taste buds.\r\nChildren\'s Activities: Bring the whole family! Kids can enjoy fun activities, games, and crafts while learning about the importance of healthy habits and positive lifestyle choices.\r\nCommunity Resources: Connect with local organizations and resources dedicated to supporting health and wellness in our community. Explore opportunities for volunteerism, advocacy, and collaboration.\r\nPrayer and Spiritual Counseling: Our pastoral team will be available for prayer and spiritual guidance. Experience the healing power of prayer and find hope and encouragement for your journey.\r\nCOVID-19 Precautions:\r\n\r\nThe health and safety of our participants are our top priority. We will implement strict COVID-19 protocols, including mask-wearing, social distancing, and enhanced sanitation measures.\r\nPlease follow all posted guidelines and instructions to ensure a safe and enjoyable experience for everyone.\r\nInvite Your Friends and Neighbors!\r\nWe invite you to join us for this special event and invite your friends, family, and neighbors to participate. Together, let\'s take proactive steps towards better health and well-being for ourselves and our community.\r\n\r\nFor more information and to RSVP, please contact  on this number +255875665 or mwengesda@gmail.com.\r\n\r\nWe look forward to seeing you at our Health Expo & Community Outreach event!', '2024-04-30 12:00:00.000000', '2024-05-07 12:00:00.000000', 'image_3.jpg', 'Ardhi University', 'Dr Denis Juma Taganya', 'Seminar', '2024-04-29 00:00:00.000000', '2024-04-29 12:26:08.487406', '2024-04-29 23:40:52.387019'),
(2, 'Sabbath Worship Service', 'Join us for our weekly Sabbath worship service, where we come together as a community to celebrate our faith and connect with God. Experience the joy of uplifting music led by our talented choir and musicians, and be inspired by thought-provoking messages delivered by our dedicated pastors. Engage in meaningful fellowship with fellow believers and visitors alike, as we share in the blessings of God\'s grace and love.', '2024-05-04 08:00:00.000000', '2024-04-05 12:00:00.000000', 'worship.jpg', 'Mwenge SDA Church', 'pastor Joseph', 'Worship', NULL, '2024-04-30 00:10:13.966623', '2024-04-30 00:10:13.966623'),
(3, 'Bible Study and Prayer Meeting', 'Deepen your understanding of Scripture and strengthen your prayer life at our midweek Bible study and prayer meeting, where we gather to seek God\'s guidance and wisdom in our lives. Engage in lively discussions and interactive study sessions led by knowledgeable facilitators, as we delve into the timeless truths of God\'s word and explore how they apply to our daily challenges and triumphs. Experience the power of communal prayer as we lift up our praises, concerns, and thanksgivings to the Lord, knowing that He hears and answers according to His perfect will.', '2024-05-01 07:00:00.000000', '2024-05-22 08:00:00.000000', 'bible_study.jpg', 'Mwenge SDA Church', 'Pastor Joshua', 'Seminar', NULL, '2024-04-30 00:22:16.348437', '2024-04-30 00:22:16.348437'),
(4, 'Community Service Day', 'Make a difference in our community by joining us for a day of service! Together, we\'ll roll up our sleeves and lend a helping hand to those in need. Whether it\'s cleaning up a local park, distributing food to the homeless, or assisting elderly neighbors with yard work, there\'s a place for everyone to contribute. Let\'s embody the spirit of Jesus\' love and compassion as we serve others and make a positive impact on our community.', '2024-05-05 09:00:00.000000', '2024-05-04 12:00:00.000000', 'worship_again.jpg', 'Kimara', 'Pst. Jacob', 'Fellowship', NULL, '2024-04-30 00:28:53.782440', '2024-04-30 00:28:53.782440');

-- --------------------------------------------------------

--
-- Table structure for table `cmsapp_service`
--

CREATE TABLE `cmsapp_service` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cmsapp_servicerequest`
--

CREATE TABLE `cmsapp_servicerequest` (
  `id` bigint(20) NOT NULL,
  `request_date` datetime(6) NOT NULL,
  `service_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-04-29 12:13:48.465973', '1', 'Join Us for Sabbath Worship!', 1, '[{\"added\": {}}]', 7, 1),
(2, '2024-04-29 12:26:08.547404', '1', 'Health Expo & Community Outreach', 1, '[{\"added\": {}}]', 9, 1),
(3, '2024-04-29 23:31:23.086583', '1', 'Health Expo & Community Outreach', 2, '[]', 9, 1),
(4, '2024-04-29 23:32:09.790970', '1', 'Health Expo & Community Outreach', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 9, 1),
(5, '2024-04-29 23:40:52.402651', '1', 'Health Expo & Community Outreach', 2, '[]', 9, 1),
(6, '2024-04-30 00:10:14.004387', '2', 'Sabbath Worship Service', 1, '[{\"added\": {}}]', 9, 1),
(7, '2024-04-30 00:22:16.671232', '3', 'Bible Study and Prayer Meeting', 1, '[{\"added\": {}}]', 9, 1),
(8, '2024-04-30 00:28:53.851505', '4', 'Community Service Day', 1, '[{\"added\": {}}]', 9, 1),
(9, '2024-04-30 16:19:26.857959', '2', 'Church Picnic Announcement', 1, '[{\"added\": {}}]', 7, 1),
(10, '2024-04-30 16:22:31.611750', '3', 'Special Worship Service Announcement', 1, '[{\"added\": {}}]', 7, 1),
(11, '2024-05-10 08:13:13.458429', '2', 'deliz', 1, '[{\"added\": {}}]', 4, 1),
(12, '2024-05-10 08:14:40.176036', '2', 'deliz', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\", \"Email address\", \"Last login\"]}}]', 4, 1),
(13, '2024-05-10 08:15:13.755414', '1', 'programmer', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 1),
(14, '2024-05-11 11:03:58.062505', '1', 'Accountant', 1, '[{\"added\": {}}]', 3, 1),
(15, '2024-05-11 11:05:16.843810', '2', 'pastor', 1, '[{\"added\": {}}]', 3, 1),
(16, '2024-05-11 11:05:28.100139', '1', 'accountant', 2, '[{\"changed\": {\"fields\": [\"Name\"]}}]', 3, 1),
(17, '2024-05-11 11:06:57.891720', '3', 'secretary', 1, '[{\"added\": {}}]', 3, 1),
(18, '2024-05-11 11:07:21.631646', '4', 'member', 1, '[{\"added\": {}}]', 3, 1),
(19, '2024-05-11 12:48:23.029205', '6', 'musahalaja7@gmail.com', 3, '', 4, 1),
(20, '2024-05-11 13:16:58.999002', '7', 'musahalaja7@gmail.com', 3, '', 4, 1),
(21, '2024-05-11 13:24:38.536632', '8', 'musahalaja7@gmail.com', 3, '', 4, 1),
(22, '2024-05-11 13:25:45.541285', '9', 'musahalaja7@gmail.com', 3, '', 4, 1),
(23, '2024-05-11 13:59:53.474821', '10', 'musahalaja7@gmail.com', 3, '', 4, 1),
(24, '2024-05-11 14:32:44.720710', '11', 'musahalaja7@gmail.com', 3, '', 4, 1),
(25, '2024-05-11 15:10:43.597438', '12', 'musahalaja7@gmail.com', 3, '', 4, 1),
(26, '2024-05-11 15:42:25.413003', '13', 'musahalaja7@gmail.com', 3, '', 4, 1),
(27, '2024-05-11 15:53:21.115135', '14', 'musahalaja7@gmail.com', 3, '', 4, 1),
(28, '2024-05-12 01:07:35.238763', '15', 'musahalaja7@gmail.com', 3, '', 4, 1),
(29, '2024-05-12 01:10:36.910107', '16', 'musahalaja7@gmail.com', 3, '', 4, 1),
(30, '2024-05-12 01:12:46.300134', '17', 'musahalaja7@gmail.com', 3, '', 4, 1),
(31, '2024-05-12 01:15:20.425374', '18', 'musahalaja7@gmail.com', 3, '', 4, 1),
(32, '2024-05-12 01:17:12.082567', '19', 'musahalaja7@gmail.com', 3, '', 4, 1),
(33, '2024-05-12 01:19:17.671545', '20', 'musahalaja7@gmail.com', 3, '', 4, 1),
(34, '2024-05-12 01:20:43.013252', '21', 'musahalaja7@gmail.com', 3, '', 4, 1),
(35, '2024-05-14 22:00:21.372785', '23', 'Test@gmail.com', 3, '', 4, 1),
(36, '2024-05-14 22:04:12.319323', '24', '', 3, '', 4, 1),
(37, '2024-05-14 22:40:22.565264', '25', '', 3, '', 4, 1),
(38, '2024-05-14 22:42:48.032214', '26', 'Test@test.com', 3, '', 4, 1),
(39, '2024-05-15 04:40:48.229847', '27', 'Test@test.com', 3, '', 4, 1),
(40, '2024-05-15 04:52:48.723492', '28', 'Test@test.com', 3, '', 4, 1),
(41, '2024-05-15 05:40:45.072381', '29', 'Test@gmail.com', 3, '', 4, 1),
(42, '2024-05-15 05:51:35.680025', '30', 'Test@gmail.com', 3, '', 4, 1),
(43, '2024-05-26 03:07:13.416341', '4', 'joshua@gmail.com', 2, '[]', 4, 1),
(44, '2024-05-26 03:07:48.298490', '2', 'deliz', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 1),
(45, '2024-05-26 11:30:20.972063', '5', 'admin', 1, '[{\"added\": {}}]', 3, 1),
(46, '2024-05-26 11:30:46.787303', '1', 'programmer', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 1),
(47, '2024-05-26 17:05:12.181906', '4', 'joshua@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Active\", \"Groups\"]}}]', 4, 1),
(48, '2024-05-26 17:07:00.347101', '4', 'joshua@gmail.com', 3, '', 4, 1),
(49, '2024-05-26 17:14:55.869860', '34', 'jushua@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Staff status\"]}}]', 4, 1),
(50, '2024-05-26 17:15:07.697203', '34', 'jushua@gmail.com', 3, '', 4, 1),
(51, '2024-05-27 17:00:22.412052', '33', 'bety@gmail.com', 2, '[]', 4, 1),
(52, '2024-05-27 17:01:32.133182', '33', 'bety@gmail.com', 2, '[]', 4, 1),
(53, '2024-06-07 00:21:55.141523', '2', 'Offering - 40000.00', 3, '', 15, 1),
(54, '2024-06-07 00:22:42.986473', '4', 'Donation - 100000.00', 3, '', 15, 1),
(55, '2024-06-07 00:22:43.167891', '3', 'Offering - 10000.00', 3, '', 15, 1),
(56, '2024-06-07 00:22:43.222740', '1', 'Tithes - 40000.00', 3, '', 15, 1),
(57, '2024-06-07 00:23:32.786681', '4', 'Event - 20000.00', 3, '', 13, 1),
(58, '2024-06-07 00:23:32.913242', '3', 'Events - 1000.00', 3, '', 13, 1),
(59, '2024-06-07 00:25:54.700239', '2', 'Offering - 20000.00', 3, '', 13, 1),
(60, '2024-06-07 00:25:54.926000', '1', 'Offering - 10000.00', 3, '', 13, 1),
(61, '2024-06-12 15:53:13.367149', '6', 'Event - 100000.00', 3, '', 13, 1),
(62, '2024-06-12 15:53:13.568148', '5', 'Offering - 300000.00', 3, '', 13, 1),
(63, '2024-06-12 15:53:39.619862', '1', 'Event - 0.00', 3, '', 12, 1),
(64, '2024-06-12 15:59:53.158749', '6', 'Offering - 100000.00', 3, '', 15, 1),
(65, '2024-06-12 15:59:53.243594', '5', 'Pleages - 100000.00', 3, '', 15, 1),
(66, '2024-06-12 16:00:32.213414', '7', 'salary - 50000.00', 3, '', 13, 1),
(67, '2024-06-12 16:01:01.425053', '2', 'salary - 50000.00', 3, '', 12, 1),
(68, '2024-06-14 09:25:06.032513', '31', 'Test@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 1),
(69, '2024-06-14 09:25:50.545491', '31', 'Test@gmail.com', 2, '[]', 4, 1),
(70, '2024-06-14 09:26:35.434383', '37', 'denistz@gmail.com', 1, '[{\"added\": {}}]', 4, 1),
(71, '2024-06-14 09:28:28.648938', '37', 'denistz@gmail.com', 2, '[{\"changed\": {\"fields\": [\"Groups\"]}}]', 4, 1),
(72, '2024-07-05 21:01:36.790658', '19', 'donation - 20000.00', 2, '[{\"changed\": {\"fields\": [\"Category\"]}}]', 15, 1),
(73, '2024-07-05 21:07:36.086382', '8', 'Offering - 50000.00', 3, '', 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'cmsapp', 'announcement'),
(8, 'cmsapp', 'donation'),
(9, 'cmsapp', 'event'),
(10, 'cmsapp', 'service'),
(11, 'cmsapp', 'servicerequest'),
(5, 'contenttypes', 'contenttype'),
(12, 'Finance', 'budget'),
(13, 'Finance', 'expense'),
(14, 'Finance', 'financialreport'),
(15, 'Finance', 'income'),
(6, 'sessions', 'session'),
(16, 'token_blacklist', 'blacklistedtoken'),
(17, 'token_blacklist', 'outstandingtoken');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-04-28 11:13:33.582965'),
(2, 'auth', '0001_initial', '2024-04-28 11:13:43.389933'),
(3, 'admin', '0001_initial', '2024-04-28 11:13:45.396617'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-04-28 11:13:45.441594'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-04-28 11:13:45.496613'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-04-28 11:13:46.679873'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-04-28 11:13:47.786855'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-04-28 11:13:47.968218'),
(9, 'auth', '0004_alter_user_username_opts', '2024-04-28 11:13:48.008220'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-04-28 11:13:49.274048'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-04-28 11:13:49.329048'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-04-28 11:13:49.374043'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-04-28 11:13:49.509038'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-04-28 11:13:49.619027'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-04-28 11:13:49.732618'),
(16, 'auth', '0011_update_proxy_permissions', '2024-04-28 11:13:49.787614'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-04-28 11:13:50.017600'),
(18, 'sessions', '0001_initial', '2024-04-28 11:13:51.244572'),
(19, 'cmsapp', '0001_initial', '2024-04-28 13:25:58.714149'),
(20, 'Finance', '0001_initial', '2024-05-27 15:23:45.109624'),
(21, 'Finance', '0002_financialreport_needs_update', '2024-05-28 12:18:49.357906'),
(22, 'Finance', '0003_remove_financialreport_needs_update', '2024-05-28 18:32:21.605333'),
(23, 'token_blacklist', '0001_initial', '2024-05-28 23:45:53.001777'),
(24, 'token_blacklist', '0002_outstandingtoken_jti_hex', '2024-05-28 23:45:53.262664'),
(25, 'token_blacklist', '0003_auto_20171017_2007', '2024-05-28 23:45:53.320572'),
(26, 'token_blacklist', '0004_auto_20171017_2013', '2024-05-28 23:45:54.153979'),
(27, 'token_blacklist', '0005_remove_outstandingtoken_jti', '2024-05-28 23:45:54.449197'),
(28, 'token_blacklist', '0006_auto_20171017_2113', '2024-05-28 23:45:54.589830'),
(29, 'token_blacklist', '0007_auto_20171017_2214', '2024-05-28 23:46:19.835428'),
(30, 'token_blacklist', '0008_migrate_to_bigautofield', '2024-05-28 23:46:24.236473'),
(31, 'token_blacklist', '0010_fix_migrate_to_bigautofield', '2024-05-28 23:46:24.314593'),
(32, 'token_blacklist', '0011_linearizes_history', '2024-05-28 23:46:24.373606'),
(33, 'token_blacklist', '0012_alter_outstandingtoken_user', '2024-05-28 23:46:24.420354'),
(34, 'Finance', '0004_rename_planned_amount_budget_amount_and_more', '2024-06-12 14:45:27.450180');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('7o2buwsyhi0wxrj4jhm6ur6b6ni1igx4', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1s13X5:T2JkzjBpatrlLOf1qDdNujCaeMWEsCl4ZcspPP725mI', '2024-05-12 12:21:27.162304'),
('ain15crmev2hdrfl6h7pmxaadwi51y2v', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sHQHM:pusfdcsB7jPLPevMyR5aLASUE_kHo-GfBvP_c7p-rjU', '2024-06-26 15:52:52.374912'),
('axc0yll30drkk743x3q3s40d9dychwo8', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sI39e:UrCjY7eILEhIG0AaqjgGCVJBXSFF6vpgf0LX1B5WP0Q', '2024-06-28 09:23:30.904436'),
('d39mnfzewrj59r3mte3yhwirdf5gr9ev', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1s1aR6:mqs4Iac2FAQiAH4VALb2gvjVjBTl7wV21tLjgm1W0LA', '2024-05-13 23:29:28.524601'),
('ddogpni70ull8p3y27mvdmlexfwt79lg', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sFNK0:PgV_GxWXw_KzS7CAPna7W1SVFD5hArTRpCl1hjJz5Y4', '2024-06-21 00:19:08.721562'),
('dsmavv0dixwkbs4oosu0gboium8fhoxg', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sB4Cp:umm7NW1TKHcs_70AEj36-m91fTMmeT0oVk40MRMbHsc', '2024-06-09 03:05:55.591014'),
('jxkxhh6ue2qwcvb61ri4jloed8z19pkj', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sPq26:Fh9tinYY5coym4m7y1C0-BPeH8yvs-epTyK3aE3TTsE', '2024-07-19 20:59:54.581383'),
('nbolh82kgz82zrjsrelws383294c97mk', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1s5LLh:1wZobuFWMgxuyeBgRMncKOdTQUOzgAj_HYmMKmMGtd0', '2024-05-24 08:11:25.752930'),
('smslmq8s8a96o34m0886obdwxsd8vbks', '.eJxVjDsOwjAQBe_iGln-rhNKes5grXdtHECOFCcV4u4QKQW0b2beS0Tc1hq3npc4sTgLLU6_W0J65LYDvmO7zZLmti5TkrsiD9rldeb8vBzu30HFXr910YqsQ8Uj2OItecUEybMJUJiBnB4CAYLBTCmh8V7rYofiSlA0shbvD_AmOFQ:1sI39f:Mvd7hdNmSWbYvlk7cxE19Ma3UG7acfIzkk8xqepksY8', '2024-06-28 09:23:31.016516');

-- --------------------------------------------------------

--
-- Table structure for table `finance_budget`
--

CREATE TABLE `finance_budget` (
  `id` bigint(20) NOT NULL,
  `category` varchar(100) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finance_budget`
--

INSERT INTO `finance_budget` (`id`, `category`, `amount`, `date`, `description`) VALUES
(3, 'Offering', '50000.00', '2024-06-13', 'Pay salaries');

-- --------------------------------------------------------

--
-- Table structure for table `finance_expense`
--

CREATE TABLE `finance_expense` (
  `id` bigint(20) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finance_expense`
--

INSERT INTO `finance_expense` (`id`, `category`, `description`, `amount`, `date`) VALUES
(9, 'offerings', 'paying church  erectric bill', '50000.00', '2024-07-05'),
(10, 'Donations', 'money from donations', '50000.00', '2024-07-04');

-- --------------------------------------------------------

--
-- Table structure for table `finance_financialreport`
--

CREATE TABLE `finance_financialreport` (
  `id` bigint(20) NOT NULL,
  `date` date NOT NULL,
  `total_income` decimal(10,2) NOT NULL,
  `total_expenses` decimal(10,2) NOT NULL,
  `net_balance` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finance_financialreport`
--

INSERT INTO `finance_financialreport` (`id`, `date`, `total_income`, `total_expenses`, `net_balance`) VALUES
(1, '2024-05-28', '80000.00', '0.00', '80000.00');

-- --------------------------------------------------------

--
-- Table structure for table `finance_income`
--

CREATE TABLE `finance_income` (
  `id` bigint(20) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `contact_info` longtext DEFAULT NULL,
  `donor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finance_income`
--

INSERT INTO `finance_income` (`id`, `category`, `description`, `amount`, `date`, `contact_info`, `donor`) VALUES
(7, 'Offering', 'money from offering', '200000.00', '2024-06-12', NULL, NULL),
(19, 'donation', 'Buildind church', '20000.00', '2024-07-02', '0753227733', 'denis');

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint(20) NOT NULL,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

INSERT INTO `token_blacklist_blacklistedtoken` (`id`, `blacklisted_at`, `token_id`) VALUES
(1, '2024-05-29 00:08:57.848856', 1),
(2, '2024-06-03 03:28:18.613195', 4),
(3, '2024-06-03 05:09:39.179668', 6);

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint(20) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `jti` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

INSERT INTO `token_blacklist_outstandingtoken` (`id`, `token`, `created_at`, `expires_at`, `user_id`, `jti`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNjk5NDk3MywiaWF0IjoxNzE2OTA4NTczLCJqdGkiOiI2YzE3MGMyNmYxZjE0YTAwOWUxMDg2M2Y3OGY2MDM4ZSIsInVzZXJfaWQiOjMzfQ.gwBNOH-FESo1YnZty-AUgV_FCa1RAfgLKPktsYjyFGE', NULL, '2024-05-29 15:02:53.000000', NULL, '6c170c26f1f14a009e10863f78f6038e'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzAzMTg1MiwiaWF0IjoxNzE2OTQ1NDUyLCJqdGkiOiIxNTM2Y2FiZGY4NDQ0MTllODcxOTlmNjE5NTcwMzk5MiIsInVzZXJfaWQiOjJ9.JkaoCZxT1ExHwIJmmCfuKlkH8umfTdGPMpcUvDE5mUg', '2024-05-29 01:17:32.130947', '2024-05-30 01:17:32.000000', NULL, '1536cabdf844419e87199f6195703992'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzAzMTg1MiwiaWF0IjoxNzE2OTQ1NDUyLCJqdGkiOiI4Mzk1OTkwZjBhMWI0YTU2YWQyZGJiNjlmNmIzMjkxNyIsInVzZXJfaWQiOjJ9.AOy7cPCsBfJw0iJNKet-kxRW278K1JMo6Cb_Ijm609Y', '2024-05-29 01:17:32.621554', '2024-05-30 01:17:32.000000', NULL, '8395990f0a1b4a56ad2dbb69f6b32917'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ3MDYzOCwiaWF0IjoxNzE3Mzg0MjM4LCJqdGkiOiI0NTcxMjJhYzFjNGY0NzMzYTRjNTc2MWJiMGQ2NzIyMSIsInVzZXJfaWQiOjF9.WZjg0HHmY85VYvW9NbgPPCwly9uD__1akCmJYSxXfZ0', '2024-06-03 03:10:38.410118', '2024-06-04 03:10:38.000000', 1, '457122ac1c4f4733a4c5761bb0d67221'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ3MDYzOCwiaWF0IjoxNzE3Mzg0MjM4LCJqdGkiOiJlNzc5M2M1ZWVkY2M0NDc3YjY0N2ZlMGY1MGVkMTU3MiIsInVzZXJfaWQiOjF9.zkPhcN7iK7RMmFcksIKCPg-X2rR21fFZF8X_QyokmLQ', '2024-06-03 03:10:38.727191', '2024-06-04 03:10:38.000000', 1, 'e7793c5eedcc4477b647fe0f50ed1572'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ3MTc0NSwiaWF0IjoxNzE3Mzg1MzQ1LCJqdGkiOiIyMzhmZTQyYWU5YzU0NzA5OGNmMGRkYjgyOTY5OTQyZCIsInVzZXJfaWQiOjMzfQ.vsbfwR1tY1JQcYCpSo-DcflQ0MpYH2J7BblyMAmLHY0', '2024-06-03 03:29:05.264799', '2024-06-04 03:29:05.000000', 33, '238fe42ae9c547098cf0ddb82969942d'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ3MTc0NSwiaWF0IjoxNzE3Mzg1MzQ1LCJqdGkiOiIwNDQ0MTFjYjQ0NWQ0MjQxYjRmNTU5MTZkYzM4NmU5NCIsInVzZXJfaWQiOjMzfQ.5MoShc-uZUjdAvNwz5dzeJk-qW_i2Z1IVVmDq9NqmV8', '2024-06-03 03:29:05.404492', '2024-06-04 03:29:05.000000', 33, '044411cb445d4241b4f55916dc386e94'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDU4OCwiaWF0IjoxNzE3Mzk4MTg4LCJqdGkiOiIyNTc5YWYxMzQ0YmE0OTFmYTk0MjZmMDljYWRmMjQxYSIsInVzZXJfaWQiOjMzfQ.Ty4YV8byduwuDcsqsZ4dXadycmXvtCUdhNtfPjenepg', '2024-06-03 07:03:08.555068', '2024-06-04 07:03:08.000000', 33, '2579af1344ba491fa9426f09cadf241a'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDU5MCwiaWF0IjoxNzE3Mzk4MTkwLCJqdGkiOiIzNTk0NzdkYTM2Mjc0NTZmYWM3ZDNjN2U2NDFjZDEyZiIsInVzZXJfaWQiOjMzfQ.ilzFz1jnxpd0PoVPlpauopLnYj_3fYfOZo910ndYNcw', '2024-06-03 07:03:10.321779', '2024-06-04 07:03:10.000000', 33, '359477da3627456fac7d3c7e641cd12f'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDYyOSwiaWF0IjoxNzE3Mzk4MjI5LCJqdGkiOiIwMGVlODU1OTc0N2U0MWRhYTE4YTAzMTliMTA0NDgyNiIsInVzZXJfaWQiOjMzfQ._TlNgQn89Ax_twEpl2BevfdjQO_VyGVhxuijjU9N9BE', '2024-06-03 07:03:49.039112', '2024-06-04 07:03:49.000000', 33, '00ee8559747e41daa18a0319b1044826'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDYyOSwiaWF0IjoxNzE3Mzk4MjI5LCJqdGkiOiJmNDIzYjUxMGI2NWU0ZDY3YWQ2YWE1MDMyNzAyN2E1YiIsInVzZXJfaWQiOjMzfQ.vZ_5yV37QlB4W8tzHlwaVxl4YWKF87xQhaV1_9hLNk0', '2024-06-03 07:03:49.146457', '2024-06-04 07:03:49.000000', 33, 'f423b510b65e4d67ad6aa50327027a5b'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDczOSwiaWF0IjoxNzE3Mzk4MzM5LCJqdGkiOiJkMTk3MmM5YjVjYzg0ODdiYjI2ZWRmNWIwYWY0M2I1MyIsInVzZXJfaWQiOjM2fQ.FCKJlcUCPKeHKgUu3EuZcx9k5TlBMM6SJeIwbTXvCWA', '2024-06-03 07:05:39.321827', '2024-06-04 07:05:39.000000', NULL, 'd1972c9b5cc8487bb26edf5b0af43b53'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDc4MywiaWF0IjoxNzE3Mzk4MzgzLCJqdGkiOiJjZTIwNTUzZWYyNmI0ZDc4YmU3ZGQyYjQyZjliNjVlNCIsInVzZXJfaWQiOjM2fQ.5hMtGq173y9tC4nXA9kIdV5b9c7X5H_gT-DzvPeaVJc', '2024-06-03 07:06:23.744516', '2024-06-04 07:06:23.000000', NULL, 'ce20553ef26b4d78be7dd2b42f9b65e4'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ4NDc4MywiaWF0IjoxNzE3Mzk4MzgzLCJqdGkiOiJjMGE1ZmJiZGRkOGY0MDQ1YjQ4ZDkzM2ZiMTFlMjU0MCIsInVzZXJfaWQiOjM2fQ.ahRiWiKv8y7M1l5mt8e_RPC2gOUU9D4ufW9RF-BLnqQ', '2024-06-03 07:06:23.849508', '2024-06-04 07:06:23.000000', NULL, 'c0a5fbbddd8f4045b48d933fb11e2540'),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ5NTY4OSwiaWF0IjoxNzE3NDA5Mjg5LCJqdGkiOiI1NDczM2RkMDczNWY0YmMzYTljZGM5NDk1ZWM0YTNiNiIsInVzZXJfaWQiOjF9.9M00nyYPgPa-g4vDdqB6FY7Morz-o-NWanGdCoRSsM8', '2024-06-03 10:08:09.619093', '2024-06-04 10:08:09.000000', 1, '54733dd0735f4bc3a9cdc9495ec4a3b6'),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ5NTY4OSwiaWF0IjoxNzE3NDA5Mjg5LCJqdGkiOiI1YWExZmJlNmU0MTg0MzY2YjhiMzNmNTYxNGYyMjI2ZiIsInVzZXJfaWQiOjF9.5PpZAVLBdY1Z0ArqI8JiqHsXh4YvD414lezXkX9KbiI', '2024-06-03 10:08:09.755615', '2024-06-04 10:08:09.000000', 1, '5aa1fbe6e4184366b8b33f5614f2226f'),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ5NTk5MywiaWF0IjoxNzE3NDA5NTkzLCJqdGkiOiI2MWEwMTkxOGZiNzc0M2Y4ODk0ODI5ODM2ZDcyZTgzMyIsInVzZXJfaWQiOjMzfQ.Fd_m3TPQRYOApGZOXZdEtuQ98N9-gVnwr5VaxyDHhjQ', '2024-06-03 10:13:13.818153', '2024-06-04 10:13:13.000000', 33, '61a01918fb7743f8894829836d72e833'),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzQ5NTk5NCwiaWF0IjoxNzE3NDA5NTk0LCJqdGkiOiI1OGVkY2NhMzcwMTY0YmEyODU0ZDQ3ZmQyMjQ4YTE1NSIsInVzZXJfaWQiOjMzfQ.FbeFcX-jo7ZYpUTubA1gKQGRvFYglBx7oi-DQhIq4L0', '2024-06-03 10:13:14.001488', '2024-06-04 10:13:14.000000', 33, '58edcca370164ba2854d47fd2248a155'),
(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MDc1OSwiaWF0IjoxNzE3NjY0MzU5LCJqdGkiOiJlYzgyNjYwNGQ1MmM0OTI2YjQ2MzhkNDJmNTM0N2QxMyIsInVzZXJfaWQiOjMzfQ.AZZwUSlITtstHnVXOD7eV_6J38YWO8kR0J9ybfNLSgA', '2024-06-06 08:59:19.898919', '2024-06-07 08:59:19.000000', 33, 'ec826604d52c4926b4638d42f5347d13'),
(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MDc2MCwiaWF0IjoxNzE3NjY0MzYwLCJqdGkiOiIzMWUyYzMwNWY0NjY0ZmUwYWY3MGEyMzY4NDVlOWI5OSIsInVzZXJfaWQiOjMzfQ.dDOWKh6lW9wFRA9dAjjzLKKFOwk_zh86CngaxhkTYCE', '2024-06-06 08:59:20.501888', '2024-06-07 08:59:20.000000', 33, '31e2c305f4664fe0af70a236845e9b99'),
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MTUzNSwiaWF0IjoxNzE3NjY1MTM1LCJqdGkiOiJiY2ZlYThiNmQ4Y2I0ZGRlOTdkMzhlYWMyNzdjZDA1ZiIsInVzZXJfaWQiOjMyfQ.zsVsvz8poam-5Vfd6FILIKWH2fksXdvy5VCdoIVFhq8', '2024-06-06 09:12:15.753185', '2024-06-07 09:12:15.000000', 32, 'bcfea8b6d8cb4dde97d38eac277cd05f'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MTUzNSwiaWF0IjoxNzE3NjY1MTM1LCJqdGkiOiJjNGM2NTczOWM0ZWM0ZDljODJhNDdhMGI0NDYxZmY2OSIsInVzZXJfaWQiOjMyfQ.PJlX8jiPdF3aml_L8dvH-p0WZ5SfSLKvUDlkajHMhxA', '2024-06-06 09:12:15.871666', '2024-06-07 09:12:15.000000', 32, 'c4c65739c4ec4d9c82a47a0b4461ff69'),
(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MjgxOSwiaWF0IjoxNzE3NjY2NDE5LCJqdGkiOiI5N2FiYTUzZWE1Nzc0NzlmYjNhOGYwMzFiM2U3Yzc2YyIsInVzZXJfaWQiOjMyfQ.L446GbxIn2mFIjZalLeHqOqP54YfNLoqsbWxiP9y9ZM', '2024-06-06 09:33:39.036833', '2024-06-07 09:33:39.000000', 32, '97aba53ea577479fb3a8f031b3e7c76c'),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc1MjgxOSwiaWF0IjoxNzE3NjY2NDE5LCJqdGkiOiIzYmE5OGQ2NzY2YzQ0YTk5OGQ5ZmFlZGIzMDU2OWE5ZSIsInVzZXJfaWQiOjMyfQ.iMyRrCEou5q05xL5kGQkgEf1cv42pU5rbqHkAUzetkg', '2024-06-06 09:33:39.207661', '2024-06-07 09:33:39.000000', 32, '3ba98d6766c44a998d9faedb30569a9e'),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc2NTkwMiwiaWF0IjoxNzE3Njc5NTAyLCJqdGkiOiI0NWRhZDQ4YTVkYTA0MjU1YmExM2I0ODg2NjgwYTY5OSIsInVzZXJfaWQiOjMzfQ.Kew7Y7LHTHbEtdZJEN_OXo7E_UNdQR92dvjF5Y4O4XE', '2024-06-06 13:11:42.876088', '2024-06-07 13:11:42.000000', 33, '45dad48a5da04255ba13b4886680a699'),
(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc2NTkwMywiaWF0IjoxNzE3Njc5NTAzLCJqdGkiOiIxM2FlOTA1YzkwNTE0NzBhYTk2ZTVjZjI4OGIzMzM5MCIsInVzZXJfaWQiOjMzfQ.DOpdq8KkPll3zk3qBQhOWK3shcuUwymIAI1WKtdKjUw', '2024-06-06 13:11:43.051675', '2024-06-07 13:11:43.000000', 33, '13ae905c9051470aa96e5cf288b33390'),
(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc5Mzc2NywiaWF0IjoxNzE3NzA3MzY3LCJqdGkiOiI0MjllNWYwMDY5OWQ0YmE5OTQ3OWYxZjQxNmM1ZjQwYiIsInVzZXJfaWQiOjMzfQ.oCqC4zxxS6wgLDybwz3TGxtQBY0Ee24zZKGs5V-lkHw', '2024-06-06 20:56:07.323532', '2024-06-07 20:56:07.000000', 33, '429e5f00699d4ba99479f1f416c5f40b'),
(28, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzc5Mzc2NywiaWF0IjoxNzE3NzA3MzY3LCJqdGkiOiI1NjAzNWMyYWYzYzM0YWE0YmQ4YzRhNTIzZWMwMDZiNSIsInVzZXJfaWQiOjMzfQ.gTRtS0o3ydpsL872vtlOQ6vn40JdKJSM2Ut1AMvwAnM', '2024-06-06 20:56:07.608364', '2024-06-07 20:56:07.000000', 33, '56035c2af3c34aa4bd8c4a523ec006b5'),
(29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzgwNTg5NSwiaWF0IjoxNzE3NzE5NDk1LCJqdGkiOiJlMmQ3NjRiMTQ2YmU0OTQzYjBiNTQyOWMyNDY1NzFlZSIsInVzZXJfaWQiOjMzfQ.PcIBPb63zYfi38tjoEQQknbKkA1EEzjS5HhpyeeC2LU', '2024-06-07 00:18:15.082067', '2024-06-08 00:18:15.000000', 33, 'e2d764b146be4943b0b5429c246571ee'),
(30, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzgwNTg5NSwiaWF0IjoxNzE3NzE5NDk1LCJqdGkiOiIyZjIzYmI3MjM5MWE0MDdmODI1ZjhlZDczMjE0MTA3NyIsInVzZXJfaWQiOjMzfQ.fKB0yxBAZ5e_2PqrzqVUE4efyyNLCbzGRfF42SE_gJU', '2024-06-07 00:18:15.310898', '2024-06-08 00:18:15.000000', 33, '2f23bb72391a407f825f8ed732141077'),
(31, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzgwNjYxMSwiaWF0IjoxNzE3NzIwMjExLCJqdGkiOiJhZmVlMmVmOTYwZGU0YWVlOWY2MmFiODk2NWM1NWIzMCIsInVzZXJfaWQiOjMzfQ.RzFpm5C1aFhxRjQhbeETD37RvUdrQTBJUfX0JPjdYvU', '2024-06-07 00:30:11.174584', '2024-06-08 00:30:11.000000', 33, 'afee2ef960de4aee9f62ab8965c55b30'),
(32, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNzgwNjYxMSwiaWF0IjoxNzE3NzIwMjExLCJqdGkiOiIzMmVlNmVmOGFiOWM0OWU2YTcxMzcwMDZkNGVhMGNjNiIsInVzZXJfaWQiOjMzfQ.ny0-_4jnlmF_rzc9wQvFdC1AbTzRUZXOqKPYycCgsEM', '2024-06-07 00:30:11.251024', '2024-06-08 00:30:11.000000', 33, '32ee6ef8ab9c49e6a7137006d4ea0cc6'),
(33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI3ODcwOCwiaWF0IjoxNzE4MTkyMzA4LCJqdGkiOiI0MjUzYjRkNTUwYWQ0ODVlOWI3N2ZhMzdjNzBhMTZkYSIsInVzZXJfaWQiOjMzfQ.wO7qFu1lsCzl0Be1MM7EsTHamvPQbuR7vfaX_eggGvY', '2024-06-12 11:38:28.007770', '2024-06-13 11:38:28.000000', 33, '4253b4d550ad485e9b77fa37c70a16da'),
(34, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI3ODcwOCwiaWF0IjoxNzE4MTkyMzA4LCJqdGkiOiI3YjZhNDUwMTJhNGM0YjU5OGMwM2EwMTE5YTgzYzEyNiIsInVzZXJfaWQiOjMzfQ.4fMtPhQ0Rq20UWEWtcICNBpTQD8m121VlYBNSsf_Ni8', '2024-06-12 11:38:28.224270', '2024-06-13 11:38:28.000000', 33, '7b6a45012a4c4b598c03a0119a83c126'),
(35, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NDg3OCwiaWF0IjoxNzE4MjA4NDc4LCJqdGkiOiIxNDZlOGUzZjRmYmQ0ODkxOTI1MDc5NTkyMDZmM2NkNSIsInVzZXJfaWQiOjMzfQ.aNTuxaNWRa57wId_jpM2MM-MpISW1FUXWlcXK47fR3w', '2024-06-12 16:07:58.857087', '2024-06-13 16:07:58.000000', 33, '146e8e3f4fbd489192507959206f3cd5'),
(36, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NDg3OCwiaWF0IjoxNzE4MjA4NDc4LCJqdGkiOiI4YTBiODJkZTk3NWY0ZGIxODBiMTU4ODI2YmQ3NDhmMSIsInVzZXJfaWQiOjMzfQ.W1FRTMUVCxo-9nDdAofQJpEtYgOby4BklyK1P3E_Alo', '2024-06-12 16:07:58.934042', '2024-06-13 16:07:58.000000', 33, '8a0b82de975f4db180b158826bd748f1'),
(37, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NTI2NywiaWF0IjoxNzE4MjA4ODY3LCJqdGkiOiI5Y2EwY2JmYmFjOTc0NTk2OTQ3NzgxNDZkZTNiZGVlOSIsInVzZXJfaWQiOjMzfQ.vZaCMfyD-_xuLposBnP5mvW645KuA-MIG-I0lfr7X-E', '2024-06-12 16:14:27.170913', '2024-06-13 16:14:27.000000', 33, '9ca0cbfbac97459694778146de3bdee9'),
(38, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NTI2NywiaWF0IjoxNzE4MjA4ODY3LCJqdGkiOiJhNzQ3ZjJjODRjMDQ0ZDMyOGQxNWUxMGMxMmZiYjE5ZSIsInVzZXJfaWQiOjMzfQ.Vq4YfxbF3eSGz3j5F6UCNRg3TNENZ4zMwAYlZNcSyhY', '2024-06-12 16:14:27.275854', '2024-06-13 16:14:27.000000', 33, 'a747f2c84c044d328d15e10c12fbb19e'),
(39, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NTQ0NiwiaWF0IjoxNzE4MjA5MDQ2LCJqdGkiOiJmYTIyMTAyY2JlYzk0MjliOGNiMDY4MGQyNjI5MGJiMiIsInVzZXJfaWQiOjMzfQ.8Nji6ZkrCOezYi0_wNWcwpNKLNJCcvwr-SGVbEyv7Ao', '2024-06-12 16:17:26.218769', '2024-06-13 16:17:26.000000', 33, 'fa22102cbec9429b8cb0680d26290bb2'),
(40, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODI5NTQ0NiwiaWF0IjoxNzE4MjA5MDQ2LCJqdGkiOiIwMmJjMTQzZTdhYzg0N2Q4OWI5NTkyMTI0NWMxOTliMyIsInVzZXJfaWQiOjMzfQ.ld7Gb26qX7L6kcNTts9gQkKIf_v1ll66BPAlBlF-i9A', '2024-06-12 16:17:26.313713', '2024-06-13 16:17:26.000000', 33, '02bc143e7ac847d89b95921245c199b3'),
(41, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTM2MCwiaWF0IjoxNzE4MzU0OTYwLCJqdGkiOiJiZDU0ZmRlNWVmYjM0ZTJlOGFlZGI0OTdhZmY0YWIyYyIsInVzZXJfaWQiOjMzfQ.I6dlhR12HMxPw2aP-tGDIOEl_7jOXRJTLT5cIkJXoJ8', '2024-06-14 08:49:20.143031', '2024-06-15 08:49:20.000000', 33, 'bd54fde5efb34e2e8aedb497aff4ab2c'),
(42, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTM2NCwiaWF0IjoxNzE4MzU0OTY0LCJqdGkiOiJkYjYzOTE2MzdjZWQ0NWQxYmFhYTgzYjc5MzZlNjdmNCIsInVzZXJfaWQiOjMzfQ.D-DbySTNqViTEnsLL5VVZ63sGUcc1hjvRwi3PMO_UV0', '2024-06-14 08:49:24.153588', '2024-06-15 08:49:24.000000', 33, 'db6391637ced45d1baaa83b7936e67f4'),
(43, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTQyNiwiaWF0IjoxNzE4MzU1MDI2LCJqdGkiOiIxMWQ5Yjg4Mzc5MzQ0ODkwOGQ3OTRiNmU1NGY0M2NjYSIsInVzZXJfaWQiOjF9.oGrtxR6EvU90WJI933K8IovyvRRU6-kt8B9tHU2A0TY', '2024-06-14 08:50:26.386023', '2024-06-15 08:50:26.000000', 1, '11d9b883793448908d794b6e54f43cca'),
(44, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTQyNiwiaWF0IjoxNzE4MzU1MDI2LCJqdGkiOiJlMWFiNzQ1MzQzMWM0NDc2Yjg1ODkwMDZhZjYwYmQ0NSIsInVzZXJfaWQiOjF9.wjYgnfZXD7b-gQ_pD6Cg2r0ULhZHS1Fcya66YwewKl0', '2024-06-14 08:50:26.522013', '2024-06-15 08:50:26.000000', 1, 'e1ab7453431c4476b8589006af60bd45'),
(45, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTU3MiwiaWF0IjoxNzE4MzU1MTcyLCJqdGkiOiI4NzA3ZWYwNjNkOTg0NzNlYmE5YjEyOWU4YWVkODJhYyIsInVzZXJfaWQiOjMyfQ.bqhrVc69mFciCQ-INjzVdeeLd1PgqIZgZ0tNPpTcMf0', '2024-06-14 08:52:52.412795', '2024-06-15 08:52:52.000000', 32, '8707ef063d98473eba9b129e8aed82ac'),
(46, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTU3MiwiaWF0IjoxNzE4MzU1MTcyLCJqdGkiOiJiOGYyMjhjNTNlYmY0ZjFhYjMxOGUzMmY2MDFkOWQ2YyIsInVzZXJfaWQiOjMyfQ.7KyRRoLW6luZ9YYDaHG3EIGL6kJ7xuekjgtHXsePBcQ', '2024-06-14 08:52:52.804837', '2024-06-15 08:52:52.000000', 32, 'b8f228c53ebf4f1ab318e32f601d9d6c'),
(47, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTk4OSwiaWF0IjoxNzE4MzU1NTg5LCJqdGkiOiI5NWRiYmYzMWZjN2E0ZTFiOTA0YTIwNDYyOGE2NjllNCIsInVzZXJfaWQiOjM1fQ.Ixpyv-oo8cuSIvXoFBqvUod-Ce8AuIKHhkNUb5BBsB4', '2024-06-14 08:59:49.127813', '2024-06-15 08:59:49.000000', 35, '95dbbf31fc7a4e1b904a204628a669e4'),
(48, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MTk4OSwiaWF0IjoxNzE4MzU1NTg5LCJqdGkiOiIzNDUyMjllZTZjYmE0OTYyOTliMTk1YmYzNmE3NDkzOSIsInVzZXJfaWQiOjM1fQ.wbyRw0CYvUM9UX_HEq1ceWITQyWijxePjdVap9wYimY', '2024-06-14 08:59:49.874796', '2024-06-15 08:59:49.000000', 35, '345229ee6cba496299b195bf36a74939'),
(49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzYyMSwiaWF0IjoxNzE4MzU3MjIxLCJqdGkiOiJhZGY4MjJmYjBmNWM0NWY3ODg0ZmVhZDY2ZWYyNTBmYSIsInVzZXJfaWQiOjM3fQ._rpeHk3PsdxV_9Xw9E2t0GzeVXcz1RUnikkAfasr7aY', '2024-06-14 09:27:01.387002', '2024-06-15 09:27:01.000000', NULL, 'adf822fb0f5c45f7884fead66ef250fa'),
(50, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzYyMSwiaWF0IjoxNzE4MzU3MjIxLCJqdGkiOiJiMzgwYTI5MTllNjY0ZGE5YTYxMmEyYjNjYmFkZjZjMiIsInVzZXJfaWQiOjM3fQ.1t9s6uKWwqtY8tn8wsTTulQsWOyLFEELHrAGVq-77CY', '2024-06-14 09:27:01.522992', '2024-06-15 09:27:01.000000', NULL, 'b380a2919e664da9a612a2b3cbadf6c2'),
(51, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzY0NywiaWF0IjoxNzE4MzU3MjQ3LCJqdGkiOiIyMWQ2YjNhYzY3MmY0MTExOWFlYzg1ZDFhN2RhNGZlNiIsInVzZXJfaWQiOjM3fQ.fU_3igGbbrkEEZQpmG6XzSR1tlyxw4wWIaBRcbLt8Zc', '2024-06-14 09:27:27.012225', '2024-06-15 09:27:27.000000', NULL, '21d6b3ac672f41119aec85d1a7da4fe6'),
(52, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzY0NywiaWF0IjoxNzE4MzU3MjQ3LCJqdGkiOiJiYTVmZmE1NTczNDA0NWYwYTM2ZjdmNWE1MWJlMzAxMCIsInVzZXJfaWQiOjM3fQ.FQn_41HOEONqbz1iXNh-ElmV3jTxf7R7AMywzSEJCW4', '2024-06-14 09:27:27.100219', '2024-06-15 09:27:27.000000', NULL, 'ba5ffa55734045f0a36f7f5a51be3010'),
(53, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzcxNywiaWF0IjoxNzE4MzU3MzE3LCJqdGkiOiJjNmI3YjBjNzZmZTI0ODc0YTVkZDVjMDljODQ3OTkwYSIsInVzZXJfaWQiOjM3fQ.tmqmxi0RaTHLsdrCVeWhDR1sWB1QQT1Tk4IRa8TeiRs', '2024-06-14 09:28:37.279914', '2024-06-15 09:28:37.000000', NULL, 'c6b7b0c76fe24874a5dd5c09c847990a'),
(54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODQ0MzcxNywiaWF0IjoxNzE4MzU3MzE3LCJqdGkiOiJjNmVhMjkyMWI3YjI0OGFlOWZlNzY4Nzg3NjBmNzZiOCIsInVzZXJfaWQiOjM3fQ.Fx8oU53eylannUtY-bIlBv-hu4XXjxeT2xTucjjJ9Fs', '2024-06-14 09:28:37.940064', '2024-06-15 09:28:37.000000', NULL, 'c6ea2921b7b248ae9fe76878760f76b8'),
(55, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODUwNjMzNywiaWF0IjoxNzE4NDE5OTM3LCJqdGkiOiJjYzc4ZjVjN2EyOWQ0YWE0YTZlNjJkZjkyNWI1YjI0MCIsInVzZXJfaWQiOjMzfQ.yoACY9YQ4ryKpO7sn6AudH6DIzT6uwjLwlHNitzzeUc', '2024-06-15 02:52:17.358753', '2024-06-16 02:52:17.000000', 33, 'cc78f5c7a29d4aa4a6e62df925b5b240'),
(56, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODUwNjMzNywiaWF0IjoxNzE4NDE5OTM3LCJqdGkiOiI2NmQ0ZGU3ZjkxOGM0NzA0YTQ1MjIzMjAxNTYwMzM0ZCIsInVzZXJfaWQiOjMzfQ._Or7k2BRomF2AakQk9eJuY0At7nuA0sO7kMwCukIMkY', '2024-06-15 02:52:17.808619', '2024-06-16 02:52:17.000000', 33, '66d4de7f918c4704a45223201560334d'),
(57, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODc5Nzk5NiwiaWF0IjoxNzE4NzExNTk2LCJqdGkiOiJmYTg3NzdhNjQ3MzE0NGM5OGMyN2E4YmI2ZDMyZWRlNCIsInVzZXJfaWQiOjF9.K9aVkQ1gVsOZqATmfAdldvtsDEkXU8cSVX_8Jt3xgYw', '2024-06-18 11:53:16.719747', '2024-06-19 11:53:16.000000', 1, 'fa8777a6473144c98c27a8bb6d32ede4'),
(58, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODc5Nzk5NiwiaWF0IjoxNzE4NzExNTk2LCJqdGkiOiJjYmIyMWJkYjVkNmU0ZmFmYWUyMzVkODQzZWYxNjY1ZSIsInVzZXJfaWQiOjF9.6rLX8ys2Zl0F-mQKG15FoHtfauLbbAqE8uxiTk6PJnE', '2024-06-18 11:53:16.935576', '2024-06-19 11:53:16.000000', 1, 'cbb21bdb5d6e4fafae235d843ef1665e'),
(59, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODg5ODM2NCwiaWF0IjoxNzE4ODExOTY0LCJqdGkiOiI0NzM5Njc0MzczZDI0YzE2OWYwYjQ5Yzc4MmJiMTExNSIsInVzZXJfaWQiOjF9.QetWVtxFqLGVBR9hEv5kv8P--_-0a91hofyxUC5Qfyw', '2024-06-19 15:46:04.486521', '2024-06-20 15:46:04.000000', 1, '4739674373d24c169f0b49c782bb1115'),
(60, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODg5ODM2NCwiaWF0IjoxNzE4ODExOTY0LCJqdGkiOiJhYTkzYmVlOWZlMmU0MmEzYTU3NzNhNTY5YTM0MjAwMSIsInVzZXJfaWQiOjF9.JF6mC3Juw6N0xm5FuuJyR-Zgze8vJaWrvfIQrgBRUwk', '2024-06-19 15:46:04.759585', '2024-06-20 15:46:04.000000', 1, 'aa93bee9fe2e42a3a5773a569a342001'),
(61, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxOTIwNjU4MiwiaWF0IjoxNzE5MTIwMTgyLCJqdGkiOiJjMzhlNTAwNjFmZWU0MWI0YTAzZGY3YjZhM2ZlMzFlNyIsInVzZXJfaWQiOjF9.P8ZVAPkSQPFRlxMWLEi7Pb8h1kSUgVIld3n2f6o-07s', '2024-06-23 05:23:02.378768', '2024-06-24 05:23:02.000000', 1, 'c38e50061fee41b4a03df7b6a3fe31e7'),
(62, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxOTIwNjU4MiwiaWF0IjoxNzE5MTIwMTgyLCJqdGkiOiI3MzFjZmIwMGU0ZTg0YTM0OTU2NGM0Y2QzNmE5YzBkMCIsInVzZXJfaWQiOjF9.K_04tdwMibdRYWXhwRV3F_e3Q-UhcThGTCxPKNfE6x8', '2024-06-23 05:23:02.594935', '2024-06-24 05:23:02.000000', 1, '731cfb00e4e84a349564c4cd36a9c0d0'),
(63, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDE5MjY5MywiaWF0IjoxNzIwMTA2MjkzLCJqdGkiOiJmZjFhYjBjM2VlN2I0MmVjOTllMTBkZTMyNDk2YmQzYSIsInVzZXJfaWQiOjMzfQ._K5ZKmO9PbYdg038jVUQtkzSegCdziLKjqB126xzLUM', '2024-07-04 15:18:13.899500', '2024-07-05 15:18:13.000000', 33, 'ff1ab0c3ee7b42ec99e10de32496bd3a'),
(64, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDE5MjY5NCwiaWF0IjoxNzIwMTA2Mjk0LCJqdGkiOiI0NzZiODkxNjU4MDE0MzhmODA4ODRhNTY5M2JiYTE2MyIsInVzZXJfaWQiOjMzfQ.nmbinwEc4sSfmX-3Wf2J-IQr7ZUYhhaKy1YAbJYLCeY', '2024-07-04 15:18:14.460116', '2024-07-05 15:18:14.000000', 33, '476b89165801438f80884a5693bba163'),
(65, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDE5MzEzOSwiaWF0IjoxNzIwMTA2NzM5LCJqdGkiOiJkNzhlMTE5NzhmZTk0NjBkOWI1YTIyYjgxYjc0YTU2MyIsInVzZXJfaWQiOjMzfQ.sTRQQadUJ7RJfWk7xHIm0BTPCmcBV8AJpsIKu8wcImk', '2024-07-04 15:25:39.575535', '2024-07-05 15:25:39.000000', 33, 'd78e11978fe9460d9b5a22b81b74a563'),
(66, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDE5MzE0MSwiaWF0IjoxNzIwMTA2NzQxLCJqdGkiOiI1MWQzNWMwZmYxY2E0ZjBiOGYzNzEyN2RiYWUxNDFlZCIsInVzZXJfaWQiOjMzfQ.SGo2pSLydNAC0u8WhGaFY9vlnDjkb8r4kvREUkTk9Ms', '2024-07-04 15:25:41.208810', '2024-07-05 15:25:41.000000', 33, '51d35c0ff1ca4f0b8f37127dbae141ed'),
(67, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMTU5OCwiaWF0IjoxNzIwMTQ1MTk4LCJqdGkiOiI4ZjQ1OTcyMmE1NzM0MjFlYWE5MmM4YmJiNjJkZTM5ZSIsInVzZXJfaWQiOjF9.yBTBvgDmeat4F6N4zXzLxO10154LcUnYKvC7kOpLmzQ', '2024-07-05 02:06:38.584242', '2024-07-06 02:06:38.000000', 1, '8f459722a573421eaa92c8bbb62de39e'),
(68, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMTU5OCwiaWF0IjoxNzIwMTQ1MTk4LCJqdGkiOiI4NjlmYjYzYzAyODA0ZjU3YjQ0MTZjMDQ5MDkxMGNmZSIsInVzZXJfaWQiOjF9.tWyEDm2cO4IDocdVpl1ydzveSdEspLkaaHdyNIHTT7E', '2024-07-05 02:06:38.884137', '2024-07-06 02:06:38.000000', 1, '869fb63c02804f57b4416c0490910cfe'),
(69, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMTc5NCwiaWF0IjoxNzIwMTQ1Mzk0LCJqdGkiOiI5ZTYxYzQ5MTE1OWE0MGVkODI0NGI2MzdmZmU1YjQ4ZSIsInVzZXJfaWQiOjM4fQ.hO5haUmZUuu4VRq9_edofTVNQep7X-XruLPW8VjVT1g', '2024-07-05 02:09:54.578804', '2024-07-06 02:09:54.000000', 38, '9e61c491159a40ed8244b637ffe5b48e'),
(70, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMTgxMywiaWF0IjoxNzIwMTQ1NDEzLCJqdGkiOiI0MTJmMDYzZDUyY2I0ZmYxOGRkMDU5NmUzMTQ4YzVjNSIsInVzZXJfaWQiOjM4fQ.QWTzgOB4zik9AzvKx5rSr1NnE-dOyJiNbUS0WbmFCSg', '2024-07-05 02:10:13.920820', '2024-07-06 02:10:13.000000', 38, '412f063d52cb4ff18dd0596e3148c5c5'),
(71, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMTgxNCwiaWF0IjoxNzIwMTQ1NDE0LCJqdGkiOiI1OTExNGIwMzcwYzk0NThhYTQwMjI1OWRmZDJmMWQ0ZiIsInVzZXJfaWQiOjM4fQ.wtXSeoSGzQc5TKZEQp3ehsoBHHujiMuacoTG_j4Nbis', '2024-07-05 02:10:14.096068', '2024-07-06 02:10:14.000000', 38, '59114b0370c9458aa402259dfd2f1d4f'),
(72, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMzY0MywiaWF0IjoxNzIwMTQ3MjQzLCJqdGkiOiIzYmYyYTM0M2U1OTE0OTJkODZjYWE2ZDBiNmE5Y2ZjNyIsInVzZXJfaWQiOjMzfQ.wKK5tPsNjnbc52Vjc8VYo_Q658iWfxkTfFw-P-RUSxs', '2024-07-05 02:40:43.007481', '2024-07-06 02:40:43.000000', 33, '3bf2a343e591492d86caa6d0b6a9cfc7'),
(73, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDIzMzY0MywiaWF0IjoxNzIwMTQ3MjQzLCJqdGkiOiI0M2IxZjQ2ZmIzYTQ0YjBhODI1MDk3YTkzODI2YjQ1MCIsInVzZXJfaWQiOjMzfQ.2ZQ-oc4RKqCvOhJmxpjuOe7rc4SVzSc4GNPow71ueS4', '2024-07-05 02:40:43.256750', '2024-07-06 02:40:43.000000', 33, '43b1f46fb3a44b0a825097a93826b450'),
(74, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI2NzUxMCwiaWF0IjoxNzIwMTgxMTEwLCJqdGkiOiJhNmQzMTM5NGE0YzQ0OTgzOGNkYjFjZmUxMGQ2ZmNiOSIsInVzZXJfaWQiOjMzfQ.kbMebjDHStufOfOMqtWJUbvP4J5VoJiFVD8xe5zdQ4o', '2024-07-05 12:05:10.366778', '2024-07-06 12:05:10.000000', 33, 'a6d31394a4c449838cdb1cfe10d6fcb9'),
(75, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI2NzUxMCwiaWF0IjoxNzIwMTgxMTEwLCJqdGkiOiIxNzE0MTg5YWE1NDE0NTY5OTlhMjVjYjU1YmI2ZDQ4MyIsInVzZXJfaWQiOjMzfQ.T9TaZRrztP_1eONIUL30cs3a-wxQMrQIcNQ83px0UhQ', '2024-07-05 12:05:10.912685', '2024-07-06 12:05:10.000000', 33, '1714189aa541456999a25cb55bb6d483'),
(76, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDI1MCwiaWF0IjoxNzIwMTk3ODUwLCJqdGkiOiI2YWMyNzk2YmE3OTA0NzVhYTA5N2QwNTM2MDg4N2IzOSIsInVzZXJfaWQiOjF9.REoK8n2PUZ3xD4uxzOlWFTAIAI9F89snRHbkexOTCqQ', '2024-07-05 16:44:10.519767', '2024-07-06 16:44:10.000000', 1, '6ac2796ba790475aa097d05360887b39'),
(77, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDI1MSwiaWF0IjoxNzIwMTk3ODUxLCJqdGkiOiI5MjI3ZWFlOWY3ZmE0OGJiYmZjY2I0YWI0MDUyNGVhMCIsInVzZXJfaWQiOjF9.uEWMPLUAK9lQ8RUgG7r_DuuaFcTIcRkFk-4HgNhH1jo', '2024-07-05 16:44:11.174390', '2024-07-06 16:44:11.000000', 1, '9227eae9f7fa48bbbfccb4ab40524ea0'),
(78, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDMyOCwiaWF0IjoxNzIwMTk3OTI4LCJqdGkiOiI0YmIzODExYzJhNWI0MTM5YjkwY2U2MjUwNDkzYWJlZiIsInVzZXJfaWQiOjM4fQ.-ZIpKXQEEA5YO3v5sLd-FOCtIVAhfCjMmwXhNtLpRR4', '2024-07-05 16:45:28.033227', '2024-07-06 16:45:28.000000', 38, '4bb3811c2a5b4139b90ce6250493abef'),
(79, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDMyOCwiaWF0IjoxNzIwMTk3OTI4LCJqdGkiOiJhOGFkYTBhYzAxMGE0NTMzOWU0MzMyYTMyNWQ3MDg0YyIsInVzZXJfaWQiOjM4fQ.Bchmt4eAyBpdcPLjFUmETDcOyu0WIR8OC4UPri8hHLY', '2024-07-05 16:45:28.142165', '2024-07-06 16:45:28.000000', 38, 'a8ada0ac010a45339e4332a325d7084c'),
(80, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDY1MCwiaWF0IjoxNzIwMTk4MjUwLCJqdGkiOiJiYTY0OGQ2ODhkZTQ0Zjc0YTU1N2EzMmM4NzExNTQ0NiIsInVzZXJfaWQiOjMzfQ.36EfCekiez4mqJZ30fKbUqqTn6kQ98KZw1TcDGd-uzU', '2024-07-05 16:50:50.751674', '2024-07-06 16:50:50.000000', 33, 'ba648d688de44f74a557a32c87115446'),
(81, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NDY1MSwiaWF0IjoxNzIwMTk4MjUxLCJqdGkiOiJkNjc3NDEyMDg4OTA0MTViYTc4MzdhNjI0NTVjNTA3ZCIsInVzZXJfaWQiOjMzfQ.x55IdJnNM0Qi4-HQIy0HHNjv0A480lNCHtZoBTdOlR4', '2024-07-05 16:50:51.043506', '2024-07-06 16:50:51.000000', 33, 'd67741208890415ba7837a62455c507d'),
(82, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NTQ2OSwiaWF0IjoxNzIwMTk5MDY5LCJqdGkiOiJhNDZiMDY3ZDQ1N2E0ZGNmYjc1ZTJkMjgwMDE5YzE4ZCIsInVzZXJfaWQiOjM4fQ.cbmzoL2Lm3YoT6jUpd-IHG0yyLA9qu2VDlqjyEuDBZY', '2024-07-05 17:04:29.161119', '2024-07-06 17:04:29.000000', 38, 'a46b067d457a4dcfb75e2d280019c18d'),
(83, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI4NTQ2OSwiaWF0IjoxNzIwMTk5MDY5LCJqdGkiOiI1ZjUzOTg5ODJlZTQ0ZTc1OWY2NDFhMzdkZmE0NzYyYSIsInVzZXJfaWQiOjM4fQ.6y7dnQ-aoX_KkvjnFL5annYgQc9QBxvAo2dIvWuS3NY', '2024-07-05 17:04:29.275055', '2024-07-06 17:04:29.000000', 38, '5f5398982ee44e759f641a37dfa4762a'),
(84, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI5OTA0NywiaWF0IjoxNzIwMjEyNjQ3LCJqdGkiOiJkNTZjODJkYWRiM2Q0YWNiYjc0NjQwYTFiNDI4MmVjYyIsInVzZXJfaWQiOjMzfQ.c1U-YqDUUcU13BM1FmfIhSVLesSYOwbS7je-FWtAmSY', '2024-07-05 20:50:47.732607', '2024-07-06 20:50:47.000000', 33, 'd56c82dadb3d4acbb74640a1b4282ecc'),
(85, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDI5OTA0OCwiaWF0IjoxNzIwMjEyNjQ4LCJqdGkiOiJlNmUzNzQ2ZDI4Y2Y0ODk3ODA1NTc1MGQzMmI0MmZmYiIsInVzZXJfaWQiOjMzfQ.EsCkYlTaqQmIpVe7XUH8SqeuJ6cFS25Ss6GmOvc7s8M', '2024-07-05 20:50:48.042204', '2024-07-06 20:50:48.000000', 33, 'e6e3746d28cf48978055750d32b42ffb'),
(86, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDMwMzI0MiwiaWF0IjoxNzIwMjE2ODQyLCJqdGkiOiJhY2RjMzJlZTIzYjE0YmFhYjFkYjIwMzNhZmJlZDVkZiIsInVzZXJfaWQiOjMzfQ.7kmtYMbNGUneO1bDU0iIpbiGjjZbJMPxeC8slU71F_U', '2024-07-05 22:00:42.041055', '2024-07-06 22:00:42.000000', 33, 'acdc32ee23b14baab1db2033afbed5df'),
(87, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDMwMzI0MiwiaWF0IjoxNzIwMjE2ODQyLCJqdGkiOiI4ZjU4ZmUwNGNmYjI0OGZjYTFhYTJiNTc4OTM5Y2ViZSIsInVzZXJfaWQiOjMzfQ.M4SuutNaZiHa3UFLM4IHMCQEO-VcfdfbJwhUNsF41cY', '2024-07-05 22:00:42.166183', '2024-07-06 22:00:42.000000', 33, '8f58fe04cfb248fca1aa2b578939cebe'),
(88, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDMwMzc5NCwiaWF0IjoxNzIwMjE3Mzk0LCJqdGkiOiI3YWRlZGE4ODZiZTk0NDAzODZmNTk3NzFmMmM2MzQ4YSIsInVzZXJfaWQiOjMzfQ.shT8e5qubQQ9h4MmSNydrSWTHihTo6W7Rc9AL3PRiNc', '2024-07-05 22:09:54.567584', '2024-07-06 22:09:54.000000', 33, '7adeda886be9440386f59771f2c6348a'),
(89, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDMwMzc5NCwiaWF0IjoxNzIwMjE3Mzk0LCJqdGkiOiI4YTEwMzY0NWMxNjc0NmZiOWJlNTI4NzAxODNiZDA0MCIsInVzZXJfaWQiOjMzfQ.nWzTvgX465xmp8zonjdcZUKJ1FjMbm2d0cwMvjLTe88', '2024-07-05 22:09:54.630396', '2024-07-06 22:09:54.000000', 33, '8a103645c16746fb9be52870183bd040');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `cmsapp_announcement`
--
ALTER TABLE `cmsapp_announcement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cmsapp_donation`
--
ALTER TABLE `cmsapp_donation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cmsapp_event`
--
ALTER TABLE `cmsapp_event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cmsapp_service`
--
ALTER TABLE `cmsapp_service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cmsapp_servicerequest`
--
ALTER TABLE `cmsapp_servicerequest`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cmsapp_servicerequest_service_id_f81be110_fk_cmsapp_service_id` (`service_id`),
  ADD KEY `cmsapp_servicerequest_user_id_cca4ef2c_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `finance_budget`
--
ALTER TABLE `finance_budget`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance_expense`
--
ALTER TABLE `finance_expense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance_financialreport`
--
ALTER TABLE `finance_financialreport`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance_income`
--
ALTER TABLE `finance_income`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_id` (`token_id`);

--
-- Indexes for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  ADD KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cmsapp_announcement`
--
ALTER TABLE `cmsapp_announcement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cmsapp_donation`
--
ALTER TABLE `cmsapp_donation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cmsapp_event`
--
ALTER TABLE `cmsapp_event`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cmsapp_service`
--
ALTER TABLE `cmsapp_service`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cmsapp_servicerequest`
--
ALTER TABLE `cmsapp_servicerequest`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `finance_budget`
--
ALTER TABLE `finance_budget`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `finance_expense`
--
ALTER TABLE `finance_expense`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `finance_financialreport`
--
ALTER TABLE `finance_financialreport`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `finance_income`
--
ALTER TABLE `finance_income`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `cmsapp_servicerequest`
--
ALTER TABLE `cmsapp_servicerequest`
  ADD CONSTRAINT `cmsapp_servicerequest_service_id_f81be110_fk_cmsapp_service_id` FOREIGN KEY (`service_id`) REFERENCES `cmsapp_service` (`id`),
  ADD CONSTRAINT `cmsapp_servicerequest_user_id_cca4ef2c_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`);

--
-- Constraints for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
