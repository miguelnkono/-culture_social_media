-- create a comment table if not exists
CREATE TABLE IF NOT EXISTS `comment` (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    publication_id INT,
    comment_content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    FOREIGN KEY (publication_id) REFERENCES `publication`(publication_id) ON DELETE SET NULL
)  ENGINE=InnoDB;

-- insertions for tests
INSERT INTO `comment` (user_id, publication_id, comment_content) VALUES
-- Publication 1 (3 comments)
(1, 1, 'Great event! Looking forward to it!'),
(6, 1, 'Proud to sponsor this! 🚀'),
(11, 1, 'See you all there!'),

-- Publication 2 (3 comments)
(2, 2, 'Music Fest lineup is fire! 🔥'),
(7, 2, 'Don’t miss our live performances!'),
(12, 2, 'Bringing friends!'),

-- Publication 3 (3 comments)
(3, 3, 'Art Workshop was so inspiring!'),
(8, 3, 'Love traditional art! 🎨'),
(13, 3, 'When is the next session?'),

-- Publication 4 (3 comments)
(4, 4, 'Startup Pitch is a game-changer!'),
(9, 4, 'Ready to invest! 💼'),
(14, 4, 'Need more details...'),

-- Publication 5 (3 comments)
(5, 5, 'Charity Run for a great cause! 🏃♀️'),
(10, 5, 'Let’s raise funds together!'),
(15, 5, 'Signed up already!'),

-- Publication 6 (2 comments)
(1, 6, 'AI Conference is a must-attend!'),
(16, 6, 'Any registration links?'),

-- Publication 7 (2 comments)
(2, 7, 'Jazz Night is my vibe! 🎷'),
(17, 7, 'Bringing my saxophone!'),

-- Publication 8 (2 comments)
(3, 8, 'Coding Bootcamp starts when?'),
(18, 8, 'Perfect for beginners! 👩💻'),

-- Publication 9 (2 comments)
(4, 9, 'Eco Summit changed my perspective! 🌿'),
(19, 9, 'Sustainability matters!'),

-- Publication 10 (2 comments)
(5, 10, 'Health Fair saved my day! ❤️'),
(20, 10, 'Free checkups are a blessing!'),

-- Publication 11 (2 comments)
(6, 11, 'Tech Trends blog is spot-on!'),
(11, 11, 'Shared with my team!'),

-- Publication 12 (2 comments)
(7, 12, 'Weekend vibes! 🎉'),
(12, 12, 'Love this playlist!'),

-- Publication 13 (2 comments)
(8, 13, 'Support local startups! 💡'),
(13, 13, 'How to apply?'),

-- Publication 14 (2 comments)
(9, 14, 'Bamenda is beautiful! 🌄'),
(14, 14, 'Travel goals!'),

-- Publication 15 (2 comments)
(10, 15, 'Health tips are gold! 💪'),
(15, 15, 'More posts like this!'),

-- Publication 16 (2 comments)
(16, 16, 'New recipe? Yum! 🍲'),
(1, 16, 'Share the ingredients!'),

-- Publication 17 (2 comments)
(17, 17, 'Book recommendations? 📚'),
(2, 17, 'Try "Atomic Habits"!'),

-- Publication 18 (2 comments)
(18, 18, 'Dance practice video is lit! 💃'),
(3, 18, 'Teach me those moves!'),

-- Publication 19 (2 comments)
(19, 19, 'Sustainability is the future! 🌍'),
(4, 19, 'Agreed 100%!'),

-- Publication 20 (2 comments)
(20, 20, 'Event promo looks awesome! 🎟️'),
(5, 20, 'Count me in!'),

-- Additional comments to reach 50
(10, 1, 'Tech Summit is unmissable!'),
(15, 2, 'Music Fest tickets sold out?'),
(20, 3, 'Art Workshop photos?'),
(5, 4, 'Startup Pitch winners announced?'),
(12, 5, 'Charity Run route map?');