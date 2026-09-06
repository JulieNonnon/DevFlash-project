-- Source : Looping

CREATE TABLE Language_(
   language_name VARCHAR(50),
   slug VARCHAR(50) NOT NULL,
   created_at DATETIME NOT NULL,
   PRIMARY KEY(language_name),
   UNIQUE(slug)
);

CREATE TABLE Category(
   category_name VARCHAR(20),
   description TEXT NOT NULL,
   created_at DATETIME NOT NULL,
   language_name VARCHAR(50) NOT NULL,
   PRIMARY KEY(category_name),
   FOREIGN KEY(language_name) REFERENCES Language_(language_name)
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

CREATE TABLE Favoriser(
   ref_flashcard VARCHAR(20),
   email VARCHAR(320),
   PRIMARY KEY(ref_flashcard, email),
   FOREIGN KEY(ref_flashcard) REFERENCES Flashcard(ref_flashcard),
   FOREIGN KEY(email) REFERENCES User_(email)
);

CREATE TABLE Comprendre(
   ref_flashcard VARCHAR(20),
   email VARCHAR(320),
   PRIMARY KEY(ref_flashcard, email),
   FOREIGN KEY(ref_flashcard) REFERENCES Flashcard(ref_flashcard),
   FOREIGN KEY(email) REFERENCES User_(email)
);
