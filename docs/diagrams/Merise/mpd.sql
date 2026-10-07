-- Source : Looping

CREATE DATABASE devflash_db;

DROP TABLE IF EXISTS Stack CASCADE;
DROP TABLE IF EXISTS Category CASCADE;
DROP TABLE IF EXISTS Flashcard CASCADE;
DROP TABLE IF EXISTS Role CASCADE;
DROP TABLE IF EXISTS User_ CASCADE;
DROP TABLE IF EXISTS Add_Favorite CASCADE;
DROP TABLE IF EXISTS Understand CASCADE;

CREATE TABLE Stack(
   stack_name VARCHAR(50),
   slug VARCHAR(50) NOT NULL,
   created_at DATETIME NOT NULL,
   PRIMARY KEY(stack_name),
   UNIQUE(slug)
);

CREATE TABLE Category(
   category_name VARCHAR(20),
   description TEXT NOT NULL,
   created_at DATETIME NOT NULL,
   stack_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(category_name),
   FOREIGN KEY(stack_name) REFERENCES Stack(stack_name)
);

CREATE TABLE Flashcard(
   ref_flashcard VARCHAR(20),
   title VARCHAR(100) NOT NULL,
   definition TEXT NOT NULL,
   doc_url VARCHAR(255) NOT NULL,
   created_at DATETIME NOT NULL,
   category_name VARCHAR(20) NOT NULL,
   PRIMARY KEY(ref_flashcard),
   FOREIGN KEY(category_name) REFERENCES Category(category_name)
);

CREATE TABLE Role(
   role_name VARCHAR(50),
   created_at DATETIME NOT NULL,
   PRIMARY KEY(role_name)
);

CREATE TABLE User_(
   email VARCHAR(320),
   username VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   created_at DATETIME NOT NULL,
   role_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(email),
   FOREIGN KEY(role_name) REFERENCES Role(role_name)
);

CREATE TABLE Add_Favorite(
   ref_flashcard VARCHAR(20),
   email VARCHAR(320),
   PRIMARY KEY(ref_flashcard, email),
   FOREIGN KEY(ref_flashcard) REFERENCES Flashcard(ref_flashcard),
   FOREIGN KEY(email) REFERENCES User_(email)
);

CREATE TABLE Understand(
   ref_flashcard VARCHAR(20),
   email VARCHAR(320),
   PRIMARY KEY(ref_flashcard, email),
   FOREIGN KEY(ref_flashcard) REFERENCES Flashcard(ref_flashcard),
   FOREIGN KEY(email) REFERENCES User_(email)
);
