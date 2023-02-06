CREATE DATABASE notes_app;
USE ten_owasp;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(75) NOT NULL,
  password VARCHAR(50) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (name, password)
VALUES 
('User1', 'User1@1234'),
('User2', 'User2@1234');