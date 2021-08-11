CREATE DATABASE Q_and_A;

USE Q_and_A;

CREATE TABLE product_to_questions (
  product_id int NOT NULL AUTO_INCREMENT,
  question_id int,
  PRIMARY KEY (id)
);

CREATE TABLE questions (
  question_id int NOT NULL AUTO_INCREMENT,
  question_body text,
  question_date date,
  asker_name text,
  question_helpfulness int,
  reported boolean,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  answer_id int NOT NULL AUTO_INCREMENT,
  body text,
  "date" date,
  answerer_name text,
  helpfulness int,
  PRIMARY KEY (id)
);


CREATE TABLE photos (
  photo_id int NOT NULL AUTO_INCREMENT,
  "url" text,
  PRIMARY KEY (id)
);