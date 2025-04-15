-- Event Participants Junction Table
CREATE TABLE IF NOT EXISTS `event_participant` (
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, event_id),
    FOREIGN KEY (user_id) REFERENCES `user`(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES `event`(event_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- create index for optimization
CREATE INDEX idx_event_participant_user ON `event_participant`(user_id);
CREATE INDEX idx_event_participant_event ON `event_participant`(event_id);


-- insertions for tests
INSERT INTO `event_participant` (user_id, event_id) VALUES
-- User 11 joins events 1 and 2
(11, 1), (11, 2),
-- User 12 joins events 3 and 4
(12, 3), (12, 4),
-- User 13 joins events 5 and 6
(13, 5), (13, 6),
-- User 14 joins events 7 and 8
(14, 7), (14, 8),
-- User 15 joins events 9 and 10
(15, 9), (15, 10),
-- User 16 joins events 11 and 12
(16, 11), (16, 12),
-- User 17 joins events 13 and 14
(17, 13), (17, 14),
-- User 18 joins events 15 and 16
(18, 15), (18, 16),
-- User 19 joins events 17 and 18
(19, 17), (19, 18),
-- User 20 joins events 19 and 20
(20, 19), (20, 20);