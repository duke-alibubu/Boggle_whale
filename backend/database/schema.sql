USE boggle;

DROP TABLE IF EXISTS game;

CREATE TABLE game
(
    id  INT unsigned NOT NULL AUTO_INCREMENT,
    token VARCHAR(150) NOT NULL,
    board VARCHAR(150) NOT NULL,
    duration INT unsigned NOT NULL,
    points INT unsigned NOT NULL,
    time_left BIGINT NOT NULL,
    created_at BIGINT NOT NULL,
    PRIMARY KEY (id)
);