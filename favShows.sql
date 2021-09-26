CREATE DATABASE favoriteshows;
USE favoriteshows;
CREATE TABLE netflix (
    ID INT auto_increment,
    Title varchar(255),
    NumberofEps varchar(3),
    Starring varchar(255),
    FavCharacter varchar(255),
    createdAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (ID)
);
INSERT INTO netflix (Title, NumberofEps, Starring, favCharacter)
VALUES (
        'The Vampire Diaries',
        '171',
        'Nina Dobrev, Ian Somerhalder',
        'Bonnie Bennett'
    ),
    (
        'Breaking Bad',
        '62',
        'Bryan Cranston, Aaron Paul',
        'Jesse'
    ),
    (
        'Orange is the New Black',
        '91',
        'Laura Prepon, Taylor Schilling',
        'Taystee'
    ),
    (
        'Manifest',
        '42',
        'Melissa Roxburgh, Josh Dallas',
        'Saanvi'
    ),
    (
        'Jane the Virgin',
        '100',
        'Gina Rodriguez, Justin Baldoni',
        'Xiomara'
    ),
    (
        'How To Get Away With Murder',
        '90',
        'Viola Davis, Liza Weil',
        'Oliver'
    );
SELECT *
FROM netflix;
CREATE TABLE hulu (
    ID INT auto_increment,
    Title varchar(255),
    NumberofEps varchar(3),
    Starring varchar(255),
    FavCharacter varchar(255),
    createdAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (ID)
);
INSERT INTO hulu (Title, NumberofEps, Starring, favCharacter)
VALUES (
        'Cruel Summer',
        '10',
        'Olivia Holt, Chiara Aurelia',
        'Vince'
    ),
    (
        'Lost',
        '121',
        'Naveen Andrews, Josh Holloway',
        'Sawyer'
    ),
    (
        '90 Day Fiance',
        '79',
        'Matt Ryan, Ashley Martson',
        'Jorge'
    );
SELECT *
FROM hulu;
CREATE TABLE starz (
    ID INT auto_increment,
    Title varchar(255),
    NumberofEps varchar(3),
    Starring varchar(255),
    FavCharacter varchar(255),
    createdAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (ID)
);
INSERT INTO starz (Title, NumberofEps, Starring, favCharacter)
VALUES (
        'Power',
        '63',
        'Omari Hardwick, Naturi Naughton',
        'Proctor'
    ),
    (
        'Run the World',
        '8',
        'Amber Stevens West, Corbin Reid',
        'Renee'
    ),
    (
        'Survivors Remorse',
        '36',
        'Jessie T. Usher, Erica Ash',
        'Mary Jo'
    ),
    (
        'P-Valley',
        '8',
        'Brandee Evans, Nicco Annan',
        'Mississippi'
    );
SELECT *
FROM netflix;
SELECT *
FROM hulu;
SELECT *
FROM starz;