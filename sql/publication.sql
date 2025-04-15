-- Publication Table (Posts/Content)
CREATE TABLE IF NOT EXISTS `publication` (
    publication_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT,
    content TEXT NOT NULL,
    media_path VARCHAR(255),
    like_count INT DEFAULT 0,
    unlike_count INT DEFAULT 0,
    share_count INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES `user`(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES `event`(event_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Indexes for Optimization
CREATE INDEX idx_publication_user ON `publication`(user_id);
CREATE INDEX idx_publication_event ON `publication`(event_id);
CREATE INDEX idx_publication_like ON `publication`(like_count);
CREATE INDEX idx_publication_unlike ON `publication`(unlike_count);

-- insertions for tests
INSERT INTO `publication` (user_id, event_id, content, media_path) VALUES
-- Event-related posts
(11, 1, 'Excited for the Tech Summit!', '/media/tech_post.jpg'),
(1, 1, 'Welcome to the Tech Summit!', NULL),
(6, 1, 'Proud to sponsor this event!', '/media/sponsor_logo.png'),
(12, 3, 'Art Workshop was amazing!', '/media/art_work.jpg'),
(2, 2, 'Music Fest starts tomorrow!', NULL),
(13, 5, 'Ready for the Charity Run! 🏃♂️', '/media/run.jpg'),
(7, 2, 'Check out our Music Fest lineup!', NULL),
(14, 7, 'AI Conference insights...', '/media/ai_slide.png'),
(3, 3, 'Join our Coding Bootcamp!', NULL),
(15, 9, 'Eco Summit was inspiring!', '/media/eco.jpg'),
-- General posts (no event)
(16, NULL, 'New blog post: Tech Trends in 2024!', NULL),
(17, NULL, 'Weekend vibes 🎧', '/media/music.jpg'),
(8, NULL, 'Support local startups!', NULL),
(18, NULL, 'Exploring Bamenda today!', '/media/travel.jpg'),
(9, NULL, 'Health is wealth! 💪', NULL),
(19, NULL, 'Just shared a new recipe!', '/media/food.jpg'),
(10, NULL, 'Book recommendations? 📚', NULL),
(20, NULL, 'Dance practice session!', '/media/dance.mp4'),
(4, NULL, 'Sustainability matters 🌿', NULL),
(5, NULL, 'Join our next meetup!', '/media/event_promo.jpg');