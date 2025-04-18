-- create the event table if not exist --
CREATE TABLE IF NOT EXISTS `event` (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_creator INT NOT NULL, -- user_id
    event_sponsor INT, -- user_id
    event_name VARCHAR(100) NOT NULL,
    event_description TEXT NOT NULL,
    event_logo VARCHAR(255),    -- path to the logo image
    event_image VARCHAR(255),   -- path to the image of the event
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_creator) REFERENCES user(user_id),
    FOREIGN KEY (event_sponsor) REFERENCES user(user_id)
) ENGINE=InnoDB;
 alter table event drop foreign key event_ibfk_1;
 alter table event add constraint event_ibfk_1 foreign key (event_creator) references user(user_id) on delete cascade;

-- insertions for the event for testing
-- Events created by managers (user_id 1-5) and sponsored by sponsors (user_id 6-10)
INSERT INTO `event` (event_creator, event_sponsor, event_name, event_description, event_logo, event_image) VALUES
-- Events with sponsors
(1, 6, 'Tech Summit', 'Annual tech conference in Douala', '/logos/tech_logo.png', '/images/tech_event.jpg'),
(2, 7, 'Music Fest', 'National music festival in Yaoundé', '/logos/music_logo.png', '/images/music_event.jpg'),
(3, 8, 'Art Workshop', 'Traditional art workshop in Bamenda', '/logos/art_logo.png', '/images/art_event.jpg'),
(4, 9, 'Startup Pitch', 'Pitch your startup idea in Buea', '/logos/startup_logo.png', '/images/startup_event.jpg'),
(5, 10, 'Charity Run', 'Charity marathon in Limbe', '/logos/charity_logo.png', '/images/charity_event.jpg'),

-- Events without sponsors
(1, NULL, 'AI Conference', 'Learn about AI advancements', '/logos/ai_logo.png', NULL),
(2, NULL, 'Jazz Night', 'Live jazz performances', NULL, '/images/jazz_event.jpg'),
(3, NULL, 'Coding Bootcamp', 'Learn programming basics', '/logos/coding_logo.png', '/images/coding_event.jpg'),
(4, NULL, 'Eco Summit', 'Sustainability and green tech', '/logos/eco_logo.png', NULL),
(5, NULL, 'Health Fair', 'Free medical checkups', NULL, '/images/health_event.jpg'),

-- Additional events with sponsors
(1, 7, 'Mobile Expo', 'Latest mobile technology showcase', '/logos/mobile_logo.png', '/images/mobile_event.jpg'),
(2, 8, 'Film Festival', 'Cameroonian film screenings', '/logos/film_logo.png', '/images/film_event.jpg'),
(3, 9, 'Food Market', 'Local cuisine showcase', '/logos/food_logo.png', NULL),
(4, 10, 'Fashion Show', 'Designer fashion event', NULL, '/images/fashion_event.jpg'),
(5, 6, 'Book Fair', 'Literary festival', '/logos/book_logo.png', '/images/book_event.jpg'),

-- Mixed events
(1, NULL, 'Cybersecurity Meetup', 'Network with security experts', '/logos/cyber_logo.png', '/images/cyber_event.jpg'),
(2, 9, 'Agriculture Expo', 'Modern farming techniques', '/logos/agri_logo.png', NULL),
(3, NULL, 'Photography Workshop', 'Master photography skills', NULL, '/images/photo_event.jpg'),
(4, 8, 'Gaming Tournament', 'Esports competition', '/logos/gaming_logo.png', '/images/gaming_event.jpg'),
(5, 7, 'Dance Competition', 'National dance championship', '/logos/dance_logo.png', '/images/dance_event.jpg');