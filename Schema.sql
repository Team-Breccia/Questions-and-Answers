-- CREATE DATABASE Q_and_A;

-- SELECT 'CREATE DATABASE q_and_a'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'q_and_a');

-- \gexec;

-- \c q_and_a;

-- DROP TABLE questions;

-- CREATE TABLE IF NOT EXISTS questions (
--   id INT PRIMARY KEY,
--   product_id INT,
--   body text,
--   date_written BIGINT,
--   asker_name text,
--   asker_email text,
--   reported INT,
--   helpful int
-- );

-- COPY questions FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/questions.csv' CSV HEADER;

-- DROP TABLE answers;

-- CREATE TABLE IF NOT EXISTS answers (
--   id INT PRIMARY KEY,
--   question_id INT,
--   body text,
--   date_written BIGINT,
--   answerer_name text,
--   answerer_email text,
--   reported INT,
--   helpful int
-- );

-- COPY answers FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/answers.csv' CSV HEADER;


-- CREATE TABLE IF NOT EXISTS photos (
--   id INT PRIMARY KEY,
--   answer_id INT,
--   "url" text
-- );

-- COPY photos FROM '/Users/santiagoveranicola/hackreactor/SDC/Questions-and-Answers/CSV/answers_photos.csv' CSV HEADER;


  -- FOREIGN KEY (photo_id) REFERENCES photos(photo_id),
  -- FOREIGN KEY (answer_id) REFERENCES answers(answer_id),

-- ALTER TABLE questions
-- ALTER COLUMN date_written SET DATA TYPE timestamp without time zone
-- USING to_timestamp(date_written/1000),
-- ALTER COLUMN date_written
-- SET DEFAULT current_timestamp;


-- ALTER TABLE answers
-- ALTER COLUMN date_written SET DATA TYPE timestamp without time zone
-- USING to_timestamp(date_written/1000),
-- ALTER COLUMN date_written
-- SET DEFAULT current_timestamp;
