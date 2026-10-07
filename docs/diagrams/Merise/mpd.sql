-- ============================================================
-- DEVFLASH - Base de données PostgreSQL
-- ============================================================

CREATE DATABASE devflash_db;


-- ============================================================
-- SUPPRESSION DES TABLES EXISTANTES
-- ============================================================

DROP TABLE IF EXISTS Add_Favorite CASCADE;
DROP TABLE IF EXISTS Understand CASCADE;
DROP TABLE IF EXISTS Flashcard CASCADE;
DROP TABLE IF EXISTS Category CASCADE;
DROP TABLE IF EXISTS User_ CASCADE;
DROP TABLE IF EXISTS Role CASCADE;
DROP TABLE IF EXISTS Stack CASCADE;


-- ============================================================
-- TABLE : Stack
-- ============================================================

CREATE TABLE Stack (
    stack_id INT GENERATED ALWAYS AS IDENTITY,
    stack_name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (stack_id),
    UNIQUE (stack_name),
    UNIQUE (slug)
);


-- ============================================================
-- TABLE : Category
-- ============================================================

CREATE TABLE Category (
    category_id INT GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    stack_id INT NOT NULL,

    PRIMARY KEY (category_id),

    FOREIGN KEY (stack_id)
        REFERENCES Stack(stack_id)
);


-- ============================================================
-- TABLE : Flashcard
-- ============================================================

CREATE TABLE Flashcard (
    flashcard_id INT GENERATED ALWAYS AS IDENTITY,
    ref_flashcard VARCHAR(20) NOT NULL,
    title VARCHAR(100) NOT NULL,
    definition TEXT NOT NULL,
    doc_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    category_id INT NOT NULL,

    PRIMARY KEY (flashcard_id),
    UNIQUE (ref_flashcard),

    FOREIGN KEY (category_id)
        REFERENCES Category(category_id)
);


-- ============================================================
-- TABLE : Role
-- ============================================================

CREATE TABLE Role (
    role_id INT GENERATED ALWAYS AS IDENTITY,
    role_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (role_id)
);


-- ============================================================
-- TABLE : User_
-- ============================================================

CREATE TABLE User_ (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(320) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role_id INT NOT NULL,

    PRIMARY KEY (user_id),
    UNIQUE (email),

    FOREIGN KEY (role_id)
        REFERENCES Role(role_id)
);


-- ============================================================
-- TABLE : Add_Favorite
-- ============================================================

CREATE TABLE Add_Favorite (
    flashcard_id INT,
    user_id INT,

    PRIMARY KEY (flashcard_id, user_id),

    FOREIGN KEY (flashcard_id)
        REFERENCES Flashcard(flashcard_id),

    FOREIGN KEY (user_id)
        REFERENCES User_(user_id)
);


-- ============================================================
-- TABLE : Understand
-- ============================================================

CREATE TABLE Understand (
    flashcard_id INT,
    user_id INT,

    PRIMARY KEY (flashcard_id, user_id),

    FOREIGN KEY (flashcard_id)
        REFERENCES Flashcard(flashcard_id),

    FOREIGN KEY (user_id)
        REFERENCES User_(user_id)
);
