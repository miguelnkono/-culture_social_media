CREATE TABLE IF NOT EXISTS `user` (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(30) NOT NULL,
    userEmail VARCHAR(255) NOT NULL UNIQUE,
    userPassword VARCHAR(100) NOT NULL,
    userPhone VARCHAR(30),
    userCity VARCHAR(30) NOT NULL,
    userCountry VARCHAR(30) DEFAULT 'Cameroon',
    userProfilePicture VARCHAR(255),
    userStatus ENUM('simpleUser', 'sponsor', 'manager', 'follower') NOT NULL DEFAULT 'simpleUser',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- insertions for testing
-- Managers (userStatus = 'manager')
INSERT INTO `user` (userName, userEmail, userPassword, userCity, userStatus) VALUES
('Manager1', 'manager1@cam.com', 'hashed_pass1', 'Douala', 'manager'),
('Manager2', 'manager2@cam.com', 'hashed_pass2', 'Yaoundé', 'manager'),
('Manager3', 'manager3@cam.com', 'hashed_pass3', 'Bamenda', 'manager'),
('Manager4', 'manager4@cam.com', 'hashed_pass4', 'Buea', 'manager'),
('Manager5', 'manager5@cam.com', 'hashed_pass5', 'Limbe', 'manager');

-- Sponsors (userStatus = 'sponsor')
INSERT INTO `user` (userName, userEmail, userPassword, userCity, userStatus) VALUES
('Sponsor1', 'sponsor1@cam.com', 'hashed_pass6', 'Douala', 'sponsor'),
('Sponsor2', 'sponsor2@cam.com', 'hashed_pass7', 'Yaoundé', 'sponsor'),
('Sponsor3', 'sponsor3@cam.com', 'hashed_pass8', 'Bafoussam', 'sponsor'),
('Sponsor4', 'sponsor4@cam.com', 'hashed_pass9', 'Edea', 'sponsor'),
('Sponsor5', 'sponsor5@cam.com', 'hashed_pass10', 'Kumba', 'sponsor');

-- Simple Users (default status = 'simpleUser')
INSERT INTO `user` (userName, userEmail, userPassword, userCity, userPhone) VALUES
('Alice', 'alice@cam.com', 'hashed_pass11', 'Douala', '+237612345678'),
('Bob', 'bob@cam.com', 'hashed_pass12', 'Yaoundé', '+237698765432'),
('Charlie', 'charlie@cam.com', 'hashed_pass13', 'Bamenda', NULL),
('David', 'david@cam.com', 'hashed_pass14', 'Buea', '+237655443322'),
('Eve', 'eve@cam.com', 'hashed_pass15', 'Limbe', NULL),
('Frank', 'frank@cam.com', 'hashed_pass16', 'Bafoussam', '+237677889900'),
('Grace', 'grace@cam.com', 'hashed_pass17', 'Edea', NULL),
('Henry', 'henry@cam.com', 'hashed_pass18', 'Kumba', '+237688776655'),
('Ivy', 'ivy@cam.com', 'hashed_pass19', 'Douala', NULL),
('Jack', 'jack@cam.com', 'hashed_pass20', 'Yaoundé', '+237699887766');

-- Followers (userStatus = 'follower')
INSERT INTO `user` (userName, userEmail, userPassword, userCity, userStatus) VALUES
('Follower1', 'follower1@cam.com', 'hashed_pass21', 'Bamenda', 'follower'),
('Follower2', 'follower2@cam.com', 'hashed_pass22', 'Buea', 'follower');